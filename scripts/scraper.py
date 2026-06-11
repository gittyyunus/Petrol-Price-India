import os
import time
import requests
import re
from bs4 import BeautifulSoup
from datetime import datetime, date
import logging
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Supabase configuration
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

def get_supabase():
    if not SUPABASE_URL or not SUPABASE_KEY:
        logger.error("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not found.")
        return None
    return create_client(SUPABASE_URL, SUPABASE_KEY)

def slugify(text):
    if not text:
        return ""
    # Basic slugify: lowercase, replace spaces/dots with hyphens, remove non-alphanumeric except hyphens
    s = text.lower().strip()
    s = re.sub(r'[\s./]+', '-', s)
    s = re.sub(r'[^a-z0-9-]', '', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

def extract_city_id(href):
    # e.g. /46/Petrol-price-in-Indore -> 46
    match = re.search(r'/(\d+)/', href)
    if match:
        return int(match.group(1))
    return None

def scrape_india_prices():
    url = "https://www.mypetrolprice.com/petrol-price-in-india.aspx"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    logger.info(f"Fetching {url}")
    try:
        response = requests.get(url, headers=headers, timeout=20)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        results = []
        # Find all H2 tags which are state names
        h2_tags = soup.find_all('h2')
        
        for h2 in h2_tags:
            state_name = h2.get_text(strip=True)
            if not state_name or "Petrol Price" in state_name:
                continue
            
            state_slug = slugify(state_name)
            
            # The cities are usually in a container following the H2
            # Let's assume they are in links following the H2 until the next H2
            sibling = h2.find_next_sibling()
            while sibling and sibling.name != 'h2':
                # Find all links in this sibling
                links = sibling.find_all('a', href=True)
                for link in links:
                    href = link['href']
                    city_id = extract_city_id(href)
                    if city_id is None:
                        continue
                    
                    city_name = link.get_text(strip=True)
                    city_slug = slugify(city_name)
                    
                    # Look for price and change near the link
                    # Typically they are in strong tags or following text
                    # We'll search in the parent of the link
                    parent = link.parent
                    price_tag = parent.find('strong')
                    price_val = None
                    if price_tag:
                        # strip ₹ and spaces
                        price_text = price_tag.get_text(strip=True).replace('₹', '').replace(' ', '')
                        try:
                            price_val = float(price_text)
                        except ValueError:
                            pass
                    
                    change_val = 0.0
                    # Price change is usually in brackets e.g. (0.00)
                    parent_text = parent.get_text()
                    change_match = re.search(r'\(([-+]?\d*\.?\d+)\)', parent_text)
                    if change_match:
                        try:
                            change_val = float(change_match.group(1))
                        except ValueError:
                            pass
                    
                    results.append({
                        "city_id": city_id,
                        "city_name": city_name,
                        "city_slug": city_slug,
                        "state_name": state_name,
                        "state_slug": state_slug,
                        "petrol_price": price_val,
                        "price_change": change_val,
                        "date": date.today().isoformat(),
                        "scraped_at": datetime.utcnow().isoformat()
                    })
                
                sibling = sibling.find_next_sibling()
        
        return results
    except Exception as e:
        logger.error(f"Scrape failed: {e}")
        return []

def run():
    supabase = get_supabase()
    if not supabase:
        return
    
    data = scrape_india_prices()
    if not data:
        logger.warning("No data scraped.")
        return
    
    logger.info(f"Scraped {len(data)} cities. Syncing with database...")
    
    for item in data:
        # 1. Ensure city exists in 'cities' table
        city_data = {
            "id": item["city_id"],
            "city_name": item["city_name"],
            "city_slug": item["city_slug"],
            "state_name": item["state_name"],
            "state_slug": item["state_slug"]
        }
        try:
            supabase.table("cities").upsert(city_data).execute()
        except Exception as e:
            logger.error(f"Error upserting city {item['city_name']}: {e}")
            
        # 2. Insert/Upsert price record
        price_data = {
            "city_id": item["city_id"],
            "city_name": item["city_name"],
            "state_name": item["state_name"],
            "petrol_price": item["petrol_price"],
            "price_change": item["price_change"],
            "date": item["date"],
            "scraped_at": item["scraped_at"]
        }
        try:
            supabase.table("prices").upsert(price_data, on_conflict="city_id, date").execute()
        except Exception as e:
            logger.error(f"Error upserting price for {item['city_name']}: {e}")

if __name__ == "__main__":
    run()
