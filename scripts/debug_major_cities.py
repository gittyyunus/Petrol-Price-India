import os
from supabase import create_client
from dotenv import load_dotenv

load_dotenv()

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase = create_client(url, key)

today = "2026-06-12"
major_cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad", "Pune"]

res = supabase.table("prices").select("*").in_("city_name", major_cities).eq("date", today).execute()
print(f"Data for major cities on {today}:")
for row in res.data:
    print(f"{row['city_name']}: Petrol: {row['petrol_price']}, Diesel: {row['diesel_price']}")

if not res.data:
    print("NO DATA FOUND FOR MAJOR CITIES TODAY.")
