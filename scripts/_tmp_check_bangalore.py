import os
from pathlib import Path
from supabase import create_client
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parent.parent / '.env')
supabase = create_client(os.environ['SUPABASE_URL'], os.environ['SUPABASE_SERVICE_ROLE_KEY'])

res = supabase.table('cities').select('id, city_name, city_slug, state_name').ilike('city_name', '%bang%').execute()
print('cities matching bang:', res.data)

res2 = supabase.table('cities').select('id, city_name, city_slug, state_name').ilike('city_name', '%bengal%').execute()
print('cities matching bengal:', res2.data)

# Check today's prices for whatever bengaluru id is
if res2.data:
    pid = res2.data[0]['id']
    res3 = supabase.table('prices').select('city_name, city_id, petrol_price, date').eq('city_id', pid).order('date', desc=True).limit(3).execute()
    print('bengaluru prices:', res3.data)