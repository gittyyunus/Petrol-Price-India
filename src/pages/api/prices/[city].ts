import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

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
  
  // Fetch recent prices within 30 days of the latest recorded date
  const { data: rawPrices } = await supabase
    .from('prices')
    .select('*')
    .eq('city_id', cityData.id)
    .order('date', { ascending: false })
    .limit(31);

  let prices = rawPrices || [];
  if (prices.length > 0 && prices[0]?.date) {
    const latestDate = new Date(prices[0].date);
    const cutoffDate = new Date(latestDate);
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    const cutoffStr = cutoffDate.toISOString().split('T')[0];
    prices = prices.filter(p => p.date >= cutoffStr);
  }
    
  return new Response(JSON.stringify({
    city: cityData,
    today: prices?.[0] || null,
    history: prices || []
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
