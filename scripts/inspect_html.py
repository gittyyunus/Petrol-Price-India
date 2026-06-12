import requests
from bs4 import BeautifulSoup

url = "https://www.mypetrolprice.com/autogas-price-in-india.aspx"
headers = {'User-Agent': 'Mozilla/5.0'}
r = requests.get(url, headers=headers)
soup = BeautifulSoup(r.text, 'html.parser')

print(f"H2 tags found: {[h2.text for h2 in soup.find_all('h2')]}")
