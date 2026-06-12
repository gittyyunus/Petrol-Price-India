import os
from supabase import create_client
from dotenv import load_dotenv

load_dotenv()

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase = create_client(url, key)

res = supabase.table("prices").select("petrol_price, diesel_price, autogas_price, cng_price").limit(10).execute()
print("First 10 rows of prices:")
for row in res.data:
    print(row)

# Count non-zero prices
res = supabase.table("prices").select("id").not_eq("diesel_price", 0).limit(1).execute()
print(f"Has non-zero diesel: {len(res.data) > 0}")

res = supabase.table("prices").select("id").not_eq("cng_price", 0).limit(1).execute()
print(f"Has non-zero cng: {len(res.data) > 0}")
