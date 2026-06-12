-- SQL Schema for Petrol Price India
-- Run this in your Supabase SQL Editor

-- 1. Cities Table
CREATE TABLE cities (
  id INTEGER PRIMARY KEY,
  city_name TEXT NOT NULL,
  city_slug TEXT NOT NULL UNIQUE,
  state_name TEXT NOT NULL,
  state_slug TEXT NOT NULL
);

-- 2. Prices Table
CREATE TABLE prices (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  city_name TEXT NOT NULL,
  state_name TEXT NOT NULL,
  petrol_price NUMERIC(6,2),
  diesel_price NUMERIC(6,2),
  autogas_price NUMERIC(6,2),
  cng_price NUMERIC(6,2),
  price_change NUMERIC(5,2),
  diesel_change NUMERIC(5,2),
  autogas_change NUMERIC(5,2),
  cng_change NUMERIC(5,2),
  scraped_at TIMESTAMPTZ DEFAULT NOW(),
  date DATE DEFAULT CURRENT_DATE
);

-- Create a unique index to prevent duplicate entries for the same city on the same date
CREATE UNIQUE INDEX ON prices(city_id, date);

-- 3. Enable RLS (Row Level Security) - Optional but recommended
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE prices ENABLE ROW LEVEL SECURITY;

-- 4. Create public read policies
CREATE POLICY "Allow public read-only access to cities" ON cities FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to prices" ON prices FOR SELECT USING (true);
