import os
from supabase import create_client
from dotenv import load_dotenv

load_dotenv()

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase = create_client(url, key)

# Just fetch all records and group in Python
res = supabase.table("prices").select("city_name, date").execute()
counts = {}
for row in res.data:
    name = row['city_name']
    counts[name] = counts.get(name, 0) + 1

multi_day_cities = {name: count for name, count in counts.items() if count > 1}
print(f"Total cities in DB: {len(counts)}")
print(f"Cities with more than 1 day of data: {len(multi_day_cities)}")
for name, count in list(multi_day_cities.items())[:10]:
    print(f"{name}: {count} days")
