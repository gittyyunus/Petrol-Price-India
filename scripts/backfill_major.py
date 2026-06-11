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

MONTH_MAP = {
    "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04",
    "May": "05", "Jun": "06", "Jul": "07", "Aug": "08",
    "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"
}

def get_supabase():
    if not SUPABASE_URL or not SUPABASE_KEY:
        logger.error("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not found.")
        return None
    return create_client(SUPABASE_URL, SUPABASE_KEY)

def scrape_city_history(city_id, city_name):
    url = f"https://www.mypetrolprice.com/{city_id}/Petrol-price-in-{city_name.replace(' ', '-')}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    logger.info(f"Fetching history for {city_name} from {url}")
    try:
        response = requests.get(url, headers=headers, timeout=20)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        history_items = soup.find_all('div', class_='GVHistory')
        results = []
        
        for item in history_items:
            price_tag = item.find('span', class_='GVPrice')
            price_val = None
            if price_tag:
                price_text = price_tag.get_text(strip=True).replace('₹', '').replace(' ', '')
                try:
                    price_val = float(price_text)
                except ValueError:
                    pass
            
            change_tag = item.find('span', class_='GVPriceChange')
            change_val = 0.0
            if change_tag:
                change_text = change_tag.get_text(strip=True).replace('▼', '').replace('▲', '').replace(' ', '')
                try:
                    change_val = float(change_text)
                    if 'ArrowFall' in str(change_tag):
                        change_val = -abs(change_val)
                    elif 'ArrowRise' in str(change_tag):
                        change_val = abs(change_val)
                except ValueError:
                    pass
            
            date_tag = item.find('div', class_='HDate')
            date_iso = None
            if date_tag:
                day = date_tag.find('div', class_='HDday').get_text(strip=True)
                month_str = date_tag.find('div', class_='HDmonth').get_text(strip=True)
                year = date_tag.find('div', class_='HDyear').get_text(strip=True)
                
                month = MONTH_MAP.get(month_str, "01")
                date_iso = f"{year}-{month}-{day.zfill(2)}"
            
            if price_val is not None and date_iso:
                results.append({
                    "city_id": city_id,
                    "city_name": city_name,
                    "petrol_price": price_val,
                    "price_change": change_val,
                    "date": date_iso,
                    "scraped_at": datetime.now().isoformat()
                })
        
        return results
    except Exception as e:
        logger.error(f"Failed to scrape history for {city_name}: {e}")
        return []

def run():
    supabase = get_supabase()
    if not supabase:
        return
    
    # Get all cities from DB
    cities = supabase.table("cities").select("*").execute().data
    
    if not cities:
        logger.warning("No cities found in DB.")
        return
    
    # Prioritize major cities and then the rest
    major_cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad", "Pune"]
    
    sorted_cities = sorted(cities, key=lambda x: x["city_name"] not in major_cities)
    
    logger.info(f"Backfilling history for {len(sorted_cities)} cities...")
    
    # We'll do a larger batch this time, focusing on major ones first
    for city in sorted_cities[:20]: 
        city_id = city["id"]
        city_name = city["city_name"]
        
        history_data = scrape_city_history(city_id, city_name)
        if history_data:
            logger.info(f"Found {len(history_data)} historical records for {city_name}")
            for record in history_data:
                record["state_name"] = city["state_name"]
                try:
                    supabase.table("prices").upsert(record, on_conflict="city_id, date").execute()
                except Exception as e:
                    logger.error(f"Error upserting history for {city_name} on {record['date']}: {e}")
            
            time.sleep(1) # Be polite
        else:
            logger.warning(f"No history found for {city_name}")

if __name__ == "__main__":
    run()
