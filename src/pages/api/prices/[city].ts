import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export async function getStaticPaths() {
  const { data: cities } = await supabase.from('cities').select('city_slug');
  return (cities || [])
    .filter(city => city.city_slug)
    .map(city => ({
      params: { city: city.city_slug }
    }));
}

export const GET: APIRoute = async ({ params }) => {
  const { city } = params;
  
  if (!city) {
    return new Response(JSON.stringify({ error: 'City slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Find city
  const { data: cityData } = await supabase
    .from('cities')
    .select('*')
    .eq('city_slug', city)
    .single();
    
  if (!cityData) {
    return new Response(JSON.stringify({ error: 'City not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Fetch last 30 days of prices
  const { data: prices } = await supabase
    .from('prices')
    .select('*')
    .eq('city_id', cityData.id)
    .order('date', { ascending: false })
    .limit(30);
    
  return new Response(JSON.stringify({
    city: cityData,
    today: prices?.[0] || null,
    history: prices || []
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
