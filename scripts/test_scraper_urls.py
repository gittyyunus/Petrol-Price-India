import requests
import re
from bs4 import BeautifulSoup
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def slugify(text):
    if not text: return ""
    s = text.lower().strip()
    s = re.sub(r'[\s./]+', '-', s)
    s = re.sub(r'[^a-z0-9-]', '', s)
    s = re.sub(r'-+', '-', s)
    return s.strip('-')

def extract_city_id(href):
    match = re.search(r'/(\d+)/', href)
    return int(match.group(1)) if match else None

def test_scrape(fuel_type):
    urls = {
        "petrol": "https://www.mypetrolprice.com/petrol-price-in-india.aspx",
        "diesel": "https://www.mypetrolprice.com/diesel-price-in-india.aspx",
        "autogas": "https://www.mypetrolprice.com/autogas-price-in-india.aspx",
        "cng": "https://www.mypetrolprice.com/cng-price-in-india.aspx"
    }
    url = urls.get(fuel_type)
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    
    print(f"Testing {fuel_type} at {url}")
    try:
        response = requests.get(url, headers=headers, timeout=20)
        soup = BeautifulSoup(response.text, 'html.parser')
        h2_tags = soup.find_all('h2')
        print(f"Found {len(h2_tags)} H2 tags")
        
        count = 0
        for h2 in h2_tags:
            state_name = h2.get_text(strip=True)
            if not state_name or "Price" in state_name: continue
            
            sibling = h2.find_next_sibling()
            while sibling and sibling.name != 'h2':
                links = sibling.find_all('a', href=True)
                for link in links:
                    city_id = extract_city_id(link['href'])
                    if city_id:
                        count += 1
                        if count <= 2:
                            print(f"Sample: {link.get_text(strip=True)} (ID: {city_id})")
                sibling = sibling.find_next_sibling()
        print(f"Total cities found: {count}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_scrape("diesel")
    test_scrape("autogas")
    test_scrape("cng")
