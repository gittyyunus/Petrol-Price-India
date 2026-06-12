import os
import time
import requests
import re
from bs4 import BeautifulSoup
from datetime import datetime, date, timezone
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

def scrape_fuel_prices(fuel_type):
    urls = {
        "petrol": "https://www.mypetrolprice.com/petrol-price-in-india.aspx",
        "diesel": "https://www.mypetrolprice.com/diesel-price-in-india.aspx",
        "autogas": "https://www.mypetrolprice.com/autogas-autolpg-price-in-india.aspx",
        "cng": "https://www.mypetrolprice.com/cng-price-in-india.aspx"
    }
    
    url = urls.get(fuel_type)
    if not url:
        return []
        
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    logger.info(f"Fetching {fuel_type} prices from {url}")
    try:
        response = requests.get(url, headers=headers, timeout=20)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        results = []
        h2_tags = soup.find_all('h2')
        
        for h2 in h2_tags:
            state_name = h2.get_text(strip=True)
            if not state_name or "Price" in state_name:
                continue
            
            state_slug = slugify(state_name)
            
            sibling = h2.find_next_sibling()
            while sibling and sibling.name != 'h2':
                links = sibling.find_all('a', href=True)
                for link in links:
                    href = link['href']
                    city_id = extract_city_id(href)
                    if city_id is None:
                        continue
                    
                    city_name = link.get_text(strip=True)
                    city_slug = slugify(city_name)
                    
                    parent_container = link.find_parent('div', class_='SF')
                    price_val = None
                    change_val = 0.0
                    
                    if parent_container:
                        price_div = parent_container.find('div', class_='txtC')
                        if price_div:
                            price_tag = price_div.find('b')
                            if price_tag:
                                price_text = price_tag.get_text(strip=True).replace('₹', '').replace(' ', '')
                                try:
                                    price_val = float(price_text)
                                except ValueError:
                                    pass
                            
                            div_text = price_div.get_text()
                            change_match = re.search(r'\(([-+]?\d*\.?\d+)\)', div_text)
                            if change_match:
                                try:
                                    change_val = float(change_match.group(1))
                                except ValueError:
                                    pass
                    
                    if price_val is not None:
                        results.append({
                            "city_id": city_id,
                            "city_name": city_name,
                            "city_slug": city_slug,
                            "state_name": state_name,
                            "state_slug": state_slug,
                            "price": price_val,
                            "change": change_val,
                            "fuel_type": fuel_type
                        })
                
                sibling = sibling.find_next_sibling()
        
        return results
    except Exception as e:
        logger.error(f"Scrape failed for {fuel_type}: {e}")
        return []

def run():
    supabase = get_supabase()
    if not supabase:
        return
    
    all_fuel_data = {}
    fuel_types = ["petrol", "diesel", "autogas", "cng"]
    
    for ft in fuel_types:
        data = scrape_fuel_prices(ft)
        for item in data:
            city_id = item["city_id"]
            if city_id not in all_fuel_data:
                all_fuel_data[city_id] = {
                    "city_id": city_id,
                    "city_name": item["city_name"],
                    "city_slug": item["city_slug"],
                    "state_name": item["state_name"],
                    "state_slug": item["state_slug"],
                    "date": date.today().isoformat(),
                    "scraped_at": datetime.now(timezone.utc).isoformat()
                }
            
            all_fuel_data[city_id][f"{ft}_price"] = item["price"]
            # Change column naming depends on petrol vs others
            if ft == "petrol":
                all_fuel_data[city_id]["price_change"] = item["change"]
            else:
                all_fuel_data[city_id][f"{ft}_change"] = item["change"]
    
    if not all_fuel_data:
        logger.warning("No data scraped.")
        return
    
    logger.info(f"Scraped {len(all_fuel_data)} cities. Syncing with database...")
    
    for city_id, item in all_fuel_data.items():
        # 1. Ensure city exists
        city_record = {
            "id": item["city_id"],
            "city_name": item["city_name"],
            "city_slug": item["city_slug"],
            "state_name": item["state_name"],
            "state_slug": item["state_slug"]
        }
        try:
            supabase.table("cities").upsert(city_record).execute()
        except Exception as e:
            logger.error(f"Error upserting city {item['city_name']}: {e}")
            
        # 2. Insert/Upsert price record
        price_record = {
            "city_id": item["city_id"],
            "city_name": item["city_name"],
            "state_name": item["state_name"],
            "date": item["date"],
            "scraped_at": item["scraped_at"]
        }
        
        # Add fuel prices and changes if they exist
        for ft in ["petrol", "diesel", "autogas", "cng"]:
            if f"{ft}_price" in item:
                price_record[f"{ft}_price"] = item[f"{ft}_price"]
            
            change_col = "price_change" if ft == "petrol" else f"{ft}_change"
            if change_col in item:
                price_record[change_col] = item[change_col]

        try:
            supabase.table("prices").upsert(price_record, on_conflict="city_id, date").execute()
        except Exception as e:
            logger.error(f"Error upserting price for {item['city_name']}: {e}")

if __name__ == "__main__":
    run()
