import requests
from bs4 import BeautifulSoup

url = "https://www.mypetrolprice.com/"
headers = {'User-Agent': 'Mozilla/5.0'}
r = requests.get(url, headers=headers)
soup = BeautifulSoup(r.text, 'html.parser')

for link in soup.find_all('a', href=True):
    text = link.text.lower()
    if "gas" in text or "lpg" in text:
        print(f"{link.text.strip()}: {link['href']}")
