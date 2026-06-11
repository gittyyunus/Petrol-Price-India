import os
from supabase import create_client
from dotenv import load_dotenv

load_dotenv()

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase = create_client(url, key)

res = supabase.table("prices").select("count", count="exact").execute()
print(f"Total rows in prices: {res.count}")

res = supabase.table("prices").select("city_name, date").order("date", desc=True).limit(10).execute()
print("Latest 10 rows:")
for row in res.data:
    print(row)
