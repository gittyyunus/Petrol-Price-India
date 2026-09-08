// Hand-written local guides for the top 30 city pages.
//
// Each entry is 200–260 words of unique copy: the actual state VAT slice,
// which depot feeds the city, and what the price means for a real driver
// there. Keyed by city_slug. Cities without an entry fall back to the
// generic state-driven copy in the template.

export type CitySpotlight = {
  heading: string;
  paragraphs: string[];
};

export const CITY_SPOTLIGHTS: Record<string, CitySpotlight> = {
  mumbai: {
    heading: 'Why petrol costs more in Mumbai than almost anywhere else',
    paragraphs: [
      'Mumbai has lived at the top of India\'s fuel-price table for years, and the reason is printed in the state tax code, not at the refinery gate. Maharashtra levies 25% VAT on petrol plus a flat ₹5.12 per litre additional tax in the Mumbai–Thane–Navi Mumbai belt — a surcharge no other metro pays. Delhi, by comparison, charges 19.40% VAT with no such add-on. On a dealer price of roughly ₹60–65 a litre that combination alone explains ₹7–8 of the gap you see every morning at 6 AM.',
      'Supply does not help Mumbai either. The city is fed from Trombay-area terminals and coastal movement that costs more per litre than Delhi\'s short pipeline-fed run from the Panipat refinery. And because VAT is ad valorem — charged on base price plus excise plus dealer commission together — every crude rally gets amplified more here than in the capital. When Brent climbs $5, Mumbai feels it about a rupee harder than Delhi.',
      'What this means on the road: a Bandra–Andheri office commuter doing 1,200 km a month at 14 km/L burns about 86 litres, so a ₹9/L Mumbai–Delhi gap is roughly ₹775 a month purely in tax. Border hopping to Gujarat (13.7% VAT + 4% cess) only pays off for fleet operators running the Mumbai–Vapi corridor — for everyone else, the cheapest lever is trip-chaining on the Western Express Highway and keeping tyres at spec, which beats hunting for a cheaper pump inside the city.',
    ],
  },
  delhi: {
    heading: 'Why Delhi has the cheapest petrol of any big metro',
    paragraphs: [
      'Delhi\'s pump price is the number every other metro is measured against, and it stays low by political choice as much as geography. The capital charges 19.40% VAT on petrol and 16.75% on diesel (plus a small ₹250/KL air ambience charge on diesel) — among the lowest slabs of any major consuming state. Maharashtra\'s 25% + ₹5.12/L and Karnataka\'s 29.84% simply start from a higher floor, so Delhi opens every day ₹8–10/L cheaper than Mumbai on petrol.',
      'Logistics helps too. Delhi is fed from the Panipat refinery through short pipeline and terminal runs via Tikrikalan and Bijwasan, so freight per litre is minimal. Because VAT applies on the delivered base, short freight and low VAT compound: a cheap base taxed lightly stays cheap, while the same base taxed at 30%+ in Telangana or Andhra Pradesh balloons.',
      'For drivers, the practical point is that Delhi NCR has almost no intra-city arbitrage — Noida (UP, 19.36% or ₹14.85/L floor) and Gurugram (Haryana, 18.2% + 5% addl. tax) track Delhi within ₹1–2/L. Cross-border fill-ups are not worth the detour. The real saving for a Rohini–Gurugram commuter is mileage discipline: at 12 km/L in stop-go traffic versus 15 km/L with steady driving, the monthly difference on 1,000 km dwarfs any pump-to-pump gap inside the NCR.',
    ],
  },
  bengaluru: {
    heading: 'Bengaluru fuel prices after Karnataka\'s 29.84% sales tax',
    paragraphs: [
      'Bengaluru drivers felt a step-change in mid-2024 when Karnataka raised petrol sales tax to 29.84% (diesel 21.17%), moving the city from the cheaper half of southern metros to within a few rupees of Mumbai. Before the hike, Whitefield commuters paid meaningfully less than Mumbai; after it, the gap narrowed to ₹2–4/L on petrol. Delhi\'s 19.40% VAT now sits a full ten percentage points below Karnataka\'s — that single policy decision is most of the ₹7–9/L Delhi–Bengaluru spread.',
      'Supply is not the problem. The Mangalore refinery feeds Devanagonthi and other Bengaluru terminals efficiently, so freight is short and stable. The price is tax, almost all the way down: a high ad valorem rate on a base that already includes excise and dealer commission means every crude uptick lands harder here than in Chennai, where Tamil Nadu\'s 13% + ₹11.52/L structure is flatter.',
      'Local tactics help at the margin. Hosur across the Tamil Nadu border is sometimes ₹1–3/L cheaper and worth it for Electronic City commuters who cross anyway — but a dedicated trip rarely pays. With Outer Ring Road congestion pinning real-world mileage to 10–12 km/L, a Silk Board regular saves more by shifting one day a week to the metro than by chasing pumps. Check the 30-day high/low on this page before a tankful; in a flat month, timing does not matter.',
    ],
  },
  hyderabad: {
    heading: 'Hyderabad and India\'s highest petrol VAT: 35.20%',
    paragraphs: [
      'Telangana charges 35.20% VAT on petrol and 27% on diesel — the highest rates in the country — which is why Hyderabad routinely tops southern price charts above Bengaluru and Chennai. To put it in perspective, Delhi\'s 19.40% is barely more than half Telangana\'s rate. On a ₹62 dealer price, that 16-point gap alone adds roughly ₹10/L before a single drop of freight. Andhra Pradesh (31% + ₹5/L extras) is the only neighbour in the same league.',
      'The city is supplied from Malkapur and Hyderabad terminals fed from Paradip and Vizag refineries — competent logistics, but no tax advantage to offset them. Diesel drivers get a slightly better deal in relative terms since 27%, while still high, is closer to the national pack; the petrol–diesel spread in Hyderabad runs wider than in most metros, which keeps diesel attractive for high-mileage Innova and taxi operators.',
      'For HITEC City commuters, the math is stark: 1,500 km a month at 13 km/L is 115 litres, so every rupee of VAT is ₹115 a month. There is no cheap neighbouring state within practical reach — the Karnataka and AP borders are hours away — so the levers are carpooling on the ORR, CNG where available, and watching this page\'s trend chart. In rising months, filling before the 6 AM revision cycle compounds matters; in flat months, it does not.',
    ],
  },
  chennai: {
    heading: 'Chennai\'s flat-tax model: 13% + ₹11.52 per litre',
    paragraphs: [
      'Tamil Nadu taxes fuel differently from most states: 13% VAT plus a flat ₹11.52 per litre on petrol (11% + ₹9.62/L on diesel) instead of a single high percentage. That structure makes Chennai prices unusually stable — when crude dips, the ₹11.52 floor stops the pump price from following it down; when crude spikes, the low 13% rate stops it from exploding. The result is a mid-table metro: dearer than Delhi\'s 19.40% regime most days, cheaper than Bengaluru\'s 29.84% and Hyderabad\'s 35.20%.',
      'Supply is local and short. Chennai\'s Manali refinery plus Nagapattinam capacity feed Ennore terminals with minimal freight, and Puducherry\'s low-tax enclave (16.98% VAT) sits just down the coast as a standing reminder of how much of Chennai\'s price is tax. Puducherry pumps undercut Chennai by ₹4–6/L, which is why ECR weekend traffic includes deliberate fuel stops.',
      'For OMR IT-corridor drivers, the practical read: track the flat component, not just the percentage. A crude crash will not cut Chennai prices as fast as Delhi\'s, so there is little point delaying a fill-up waiting for relief that the floor will absorb. The bigger win is beating Guindy–Sholinganallur congestion — real-world mileage swings of 3–4 km/L matter more here than day-to-day pump variation.',
    ],
  },
  kolkata: {
    heading: 'Why Kolkata petrol tracks Mumbai, not Delhi',
    paragraphs: [
      'Kolkata surprises first-time visitors: petrol here costs closer to Mumbai than to Delhi, often ₹8–11/L above the capital. The cause is West Bengal\'s stack — 25% (or ₹13.12/L, whichever is higher) plus a ₹1,000/KL cess with 20% additional irrecoverable tax. The Haldia refinery is practically next door and Budge Budge terminals keep freight short, so almost the entire premium over Delhi is the state\'s tax design, not distance.',
      'The "whichever is higher" floor matters more than it looks. When crude softens and the dealer price falls, the ₹13.12/L minimum keeps Kolkata\'s tax take high while Delhi\'s pure-percentage 19.40% VAT falls with the base. That is why Kolkata prices feel sticky on the way down and springy on the way up — the floor ratchets.',
      'Daily life reflects it: Howrah–Salt Lake bus and taxi operators watch diesel (17% slab) even more closely than petrol, since their margins live in the diesel gap. Private drivers have no useful border option — Jharkhand (22% + cess) and Odisha (28%) are no cheaper — so the playbook is maintenance and moderation. A correctly inflated set of tyres and a light right foot on EM Bypass traffic save more in a month than any pump choice inside the city.',
    ],
  },
  pune: {
    heading: 'Pune pays Mumbai\'s tax without Mumbai\'s terminals',
    paragraphs: [
      'Pune falls under Maharashtra\'s "rest of state" slab — the same 25% VAT + ₹5.12/L additional tax on petrol (21% on diesel) as Mumbai — but without Mumbai\'s Trombay-adjacent terminal advantage. Fuel typically travels from Mumbai-area installations or via Pune terminals with extra handling, so Pune prints a few paise to a rupee above Mumbai most days and ₹8–10/L above Delhi. The tax code treats the two cities identically; logistics separates them slightly.',
      'That makes Pune one of the clearest demonstrations that depot distance is real but secondary. The ₹5.12/L flat surcharge plus 25% VAT explains nearly the whole Delhi gap; freight explains the Mumbai–Pune sliver. Hinjewadi–Hadapsar commuters crossing 40+ km a day feel both layers: state tax sets the level, and their own distance sets the bill.',
      'There is modest relief nearby. Hill-station weekend runs toward Mahabaleshwar or Lonavala will not find cheaper fuel — same slab throughout Maharashtra — so tank up in the city. The effective savings are in carpooling the expressway corridor and using the calculator below: at 15 km/L, a 50 km daily round trip at Pune prices costs roughly ₹10,000–11,000 a month in fuel alone, which is the number to beat with shared rides.',
    ],
  },
  ahmedabad: {
    heading: 'Ahmedabad: refinery next door, modest tax',
    paragraphs: [
      'Ahmedabad is one of the best-placed big cities for fuel in India. Gujarat charges 13.7% VAT + 4% cess on petrol (14.9% + 4% on diesel) — roughly half Maharashtra\'s burden — and the Koyali refinery outside Vadodara plus Jamnagar capacity keep freight minimal. The result is a consistent ₹6–9/L discount to Mumbai and a price that tracks Delhi within a few rupees, occasionally undercutting the capital on diesel.',
      'The cess structure is worth understanding: the 4% applies on town rate plus VAT, so it compounds slightly, but from such a low base the effect is small. Compare Telangana\'s 35.20% or Karnataka\'s 29.84% and Gujarat\'s restraint is obvious — a deliberate policy that keeps logistics costs down for the state\'s manufacturing belt.',
      'For SG Highway and SP Ring Road commuters, Ahmedabad fuel economics favour distance: the per-litre price is low enough that driving a little further to a trusted, non-adulterated pump beats hunting paise. Textile and pharma fleet operators running the Ahmedabad–Mumbai corridor plan fills on the Gujarat side as routine — the Maharashtra border is one of the few places in India where which side you fill on moves the needle by ₹5+/L.',
    ],
  },
  jaipur: {
    heading: 'Jaipur: Rajasthan\'s 29.04% petrol VAT bites',
    paragraphs: [
      'Rajasthan taxes petrol at 29.04% VAT + ₹1,500/KL road cess — nearly ten points above Delhi\'s 19.40% — which is why Jaipur consistently ranks among the North\'s dearest fills. Diesel is far kinder at 17.30% + ₹1,750/KL, so the city\'s petrol–diesel spread runs wide and diesel SUVs remain economically rational here long after other metros tilted toward petrol.',
      'Supply comes from Panipat and Mathura refineries into Jaipur and Jodhpur terminals — reasonable distances, no extreme freight. The price is policy: on identical base fuel, Jaipur\'s VAT layer adds roughly ₹6–7/L more than Delhi\'s. Ajmer Road and Tonk Road commuters feel it directly, since Jaipur\'s sprawl forces long daily distances at exactly the moment per-litre prices are high.',
      'Tourism adds a wrinkle: outstation cabs running Jaipur–Agra–Delhi triangle routes quote fuel escalations explicitly, because the Rajasthan–UP–Delhi tax gradient moves under them. Private drivers cannot arbitrage — Delhi is 280 km away — so the wins are tyre pressure, AC discipline in May–June heat, and combining Malviya Nagar–C-Scheme errands into single outings rather than daily hops.',
    ],
  },
  surat: {
    heading: 'Surat: Gujarat\'s tax edge on full display',
    paragraphs: [
      'Surat might be the city where Gujarat\'s fuel-tax restraint pays off most visibly. At 13.7% VAT + 4% cess on petrol, Surat undercuts Mumbai — barely 280 km south — by ₹7–9/L on a typical day, despite similar coastal logistics from Hazira terminals. Textile traders who drive the Surat–Mumbai corridor know the drill: fill in Surat, run to Mumbai, refill on return.',
      'Hazira\'s proximity means freight is among the lowest in the country, and the city\'s diamond-textile economy runs large diesel fleets that benefit from Gujarat\'s 14.9% + 4% diesel slab — far below Maharashtra\'s 21% or Karnataka\'s 21.17%. When Mumbai transporters quote Surat rates, part of the edge is literally the fuel in the tank.',
      'For local drivers on Vesu–Adajan–Katargam loops, the price level makes CNG conversion math unusually close: with petrol already cheap by national standards, the CNG payback stretches longer than in Mumbai or Hyderabad. Use the calculator below with Surat\'s live price to test your own running before committing to a kit.',
    ],
  },
  lucknow: {
    heading: 'Lucknow tracks Delhi thanks to Mathura refinery',
    paragraphs: [
      'Uttar Pradesh taxes petrol at 19.36% or ₹14.85/L, whichever is higher (diesel 17.08% or ₹10.41/L) — a hybrid that lands very close to Delhi\'s 19.40% in practice. Add the Mathura refinery roughly in the middle of the state feeding Lucknow and Kanpur terminals, and Lucknow petrol usually prints within ₹1–2/L of Delhi, far below Jaipur or Patna.',
      'The "whichever is higher" floor is the detail to watch. In soft-crude months the ₹14.85/L minimum binds and Lucknow stops tracking Delhi down; in firm months the percentage binds and the two cities move together. Either way, Gomti Nagar–Hazratganj commuters face one of the fairest per-litre prices in the Hindi belt.',
      'No border play is needed — Barabanki, Sitapur and Unnao share the slab — so savings come from behaviour. At 12 km/L in old-city congestion versus 16 km/L on Shaheed Path runs, the same 800 km month varies by 17 litres, or roughly ₹1,650. That dwarfs any pump spread inside Lucknow.',
    ],
  },
  kanpur: {
    heading: 'Kanpur: same UP slab as Lucknow, heavier engines',
    paragraphs: [
      'Kanpur shares Uttar Pradesh\'s 19.36%-or-₹14.85/L petrol slab and Mathura-fed supply with Lucknow, so pump prices are near-identical between the two cities — usually within paise. What differs is the vehicle mix: Kanpur\'s industrial belt runs older two-wheelers and diesel loaders whose real-world mileage is lower, so the same per-litre price produces a bigger monthly bill than in Lucknow\'s service-economy traffic.',
      'Leather, textile and logistics clusters around Panki and Fazalganj mean diesel matters disproportionately here. UP\'s 17.08%-or-₹10.41/L diesel slab is moderate by national standards — well below Bihar\'s surcharged 16.37%+30% or Jharkhand\'s 22% — which is one reason Kanpur\'s freight economy keeps moving even when petrol pinches private wallets.',
      'Practical advice is unglamorous but effective: Kanpur\'s heat and dust punish clogged air filters, and a choked filter can cost 1–2 km/L. For a 1,000 km month that is 5–8 litres saved by a ₹300 filter change — a better return than any fuel-hunting strategy on GT Road.',
    ],
  },
  nagpur: {
    heading: 'Nagpur: Maharashtra tax, central-India freight',
    paragraphs: [
      'Nagpur pays the full Maharashtra stack — 25% VAT + ₹5.12/L on petrol, 21% on diesel — while sitting 800+ km from Mumbai\'s terminal belt. Paradip and Mumbai pipelines plus local terminals keep supply reliable but not cheap to move, so Nagpur typically prints at or slightly above Mumbai and ₹8–11/L above Delhi. It is the textbook case of high tax amplified by distance.',
      'Vidarbha\'s orange-belt logistics run on diesel, and 21% diesel VAT stings fleet operators running the Nagpur–Hyderabad and Nagpur–Raipur corridors. Crossing into Chhattisgarh (24% + ₹2/L petrol, 23% + ₹1/L diesel) rarely helps on petrol but can shave diesel bills; crossing into MP (29% + extras) never helps. Operators plan fills accordingly.',
      'For Wardha Road and Hingna commuters, the winter-summer mileage swing matters: dense winter fog traffic versus 47°C summer AC load can shift real-world figures by 15%. Logging mileage seasonally with the calculator below gives a truer budget than any single fill-up comparison.',
    ],
  },
  indore: {
    heading: 'Indore: Bina refinery nearby, 29% VAT anyway',
    paragraphs: [
      'Madhya Pradesh built the Bina refinery partly to shorten supply lines into Indore and Bhopal — and it worked on freight. What it did not change is tax: 29% VAT + ₹2.50/L + 1% cess on petrol keeps Indore among central India\'s dearest fills, roughly ₹7–9/L above Delhi on petrol. Diesel at 19% + ₹1.50/L + 1% is relatively less punishing, which is why Indore\'s logistics fleets skew diesel.',
      'Vijay Nagar–Rajwada commuters face a double hit of high per-litre prices and a sprawling city that demands distance. At 13 km/L, a 1,200 km month is 92 litres — every rupee of VAT is nearly ₹100 a month. The Gujarat border is too far for fuel runs, and Maharashtra is worse, so there is no arbitrage to exploit.',
      'The local edge is food logistics: Indore\'s famed late-night food runs are short hops where a cold engine drinks disproportionately. Combining Sarafa–Chappan outings into single trips, and keeping short-hop two-wheeler use on efficient 100–125cc machines, cuts more fuel than any pump choice on AB Road.',
    ],
  },
  thane: {
    heading: 'Thane: Mumbai\'s tax belt, Mumbai\'s prices',
    paragraphs: [
      'Thane sits inside Maharashtra\'s Mumbai–Thane–Navi Mumbai tax belt, so it pays the exact Mumbai stack: 25% VAT + ₹5.12/L additional tax on petrol, 21% on diesel. Terminal access via Trombay is excellent — freight is minimal — but the surcharge erases that advantage. Thane–Mumbai pump spreads are usually paise, while Thane–Delhi runs ₹8–10/L on petrol.',
      'Ghodbunder Road\'s endless construction traffic is the real fuel story here. Real-world mileage in Thane\'s stop-crawl peaks can drop to 9–11 km/L against 15+ on free-flowing Eastern Express Highway stretches — a bigger swing than any inter-pump difference in the city. Mumbra–Borivali commuters should budget on worst-case mileage, not brochure figures.',
      'Vapi across the Gujarat border (13.7% + 4%) is the classic tanker-driver fill-up point on the Mumbai–Ahmedabad highway, but for Thane car owners the 150 km detour never pays. The winning move is time-shifting: a 7 AM Ghodbunder run versus 10 AM can save 20 minutes of idling, worth more than a year of pump hunting.',
    ],
  },
  bhopal: {
    heading: 'Bhopal: same 29% VAT as Indore, steadier traffic',
    paragraphs: [
      'Bhopal shares Madhya Pradesh\'s 29% + ₹2.50/L + 1% cess petrol slab and Bina-fed supply with Indore, so the two cities track within paise most days — both ₹7–9/L above Delhi on petrol. Diesel at 19% + ₹1.50/L + 1% is the milder of the two fuels here, sustaining the city\'s large government and university diesel fleets.',
      'Where Bhopal differs is driving conditions. Wider roads and less brutal congestion than Indore mean real-world mileage holds 1–2 km/L higher for the same car — enough to offset small pump differences. MP Nagar–Kolar commuters on 20–25 km round trips do better per kilometre than their Indore counterparts despite identical per-litre prices.',
      'Weekend escapes to Sanchi or Bhimbetka stay inside the same slab, so fill before leaving at a trusted city pump rather than highway outfits. And with Sehore and Vidisha sharing the rate, there is no border tactic — only the calculator below and an honest mileage log.',
    ],
  },
  vizag: {
    heading: 'Vizag: refinery city paying Andhra\'s 31% VAT',
    paragraphs: [
      'Vizag hosts one of India\'s major refineries, yet its pumps charge among the country\'s highest prices — proof that tax beats geography. Andhra Pradesh levies 31% VAT + ₹4/L + ₹1/L road cess on petrol (22.25% + extras on diesel), so Vizag petrol tracks ₹9–11/L above Delhi despite zero refinery-to-city distance. Freight is negligible; the VAT layer is everything.',
      'The port–steel–pharma industrial belt runs on diesel, where the 22.25% slab bites less severely but still exceeds Gujarat\'s 14.9% or Delhi\'s 16.75%. Anakapalli–Gajuwaka truck operators feel the AP–Odisha gradient daily: Odisha\'s 28%/24% is no relief, but Telangana\'s 35.2%/27% next door is worse, making Vizag the least-bad fill-up on several corridors by default.',
      'Beach Road commuters face salt air more than traffic — corrosion-related efficiency losses are a genuine local factor. Keeping underbody and air paths clean, plus combining MVP Colony–Dwaraka Nagar errands, matters more than pump selection inside a single-slab city.',
    ],
  },
  patna: {
    heading: 'Patna: Barauni next door, surcharge on top',
    paragraphs: [
      'Bihar\'s Barauni refinery is practically Patna\'s neighbour, yet the city\'s petrol runs well above Delhi and Lucknow. The reason is the surcharge: 23.58% or ₹16.65/L (whichever is higher) plus a 30% surcharge on VAT for petrol, with a mirrored 16.37%-plus-30% structure on diesel. Few states stack a surcharge on top of VAT, and it shows — Patna routinely prints ₹4–6/L above Lucknow on petrol.',
      'The floor clause bites in soft markets: when dealer prices fall, the ₹16.65/L minimum keeps Patna\'s tax high while percentage-based neighbours slide. Diesel gets marginally better treatment, which matters for the Danapur–Hajipur freight and auto-rickshaw economy that lives on diesel and CNG economics.',
      'Gandhi Setu commuters idling in bridge traffic burn fuel without distance — the worst possible economics at high per-litre prices. Shifting crossing times even 30 minutes outside peak, and maintaining(first) the small two-wheelers that dominate Patna traffic, returns more than any inter-pump comparison on Ashok Rajpath.',
    ],
  },
  vadodara: {
    heading: 'Vadodara: Koyali refinery at the city\'s edge',
    paragraphs: [
      'Few Indian cities are better plumbed for fuel than Vadodara — the Koyali refinery sits at its edge, feeding Gujarat\'s network with near-zero freight. Combined with Gujarat\'s 13.7% + 4% petrol slab, Vadodara petrol is routinely among the cheapest in the western belt, ₹7–9/L below Mumbai and within touching distance of Delhi. Diesel at 14.9% + 4% tells the same story.',
      'The Vadodara–Bharuch–Surat chemical corridor runs massive tanker fleets whose fuel economics depend on this edge. Maharashtra-bound tankers top up in Vadodara as policy; Gujarat-bound ones rarely bother filling across the border. It is one of the few corridors where the "fill before the border" rule is absolute.',
      'Old-city–Gotri–Manjalpur commuters benefit from compact distances — Vadodara\'s real advantage is that high per-litre pain never arrives. The calculator below will show strikingly low monthly totals versus Mumbai counterparts; the surplus is best spent on preventive maintenance, which keeps the city\'s older vehicle parc efficient.',
    ],
  },
  nashik: {
    heading: 'Nashik: Maharashtra slab on a highway corridor',
    paragraphs: [
      'Nashik pays the Maharashtra rest-of-state stack — 25% + ₹5.12/L on petrol, 21% on diesel — with supply routed from Mumbai-area terminals up the ghat. The climb adds small but real freight, so Nashik usually prints a touch above Mumbai and a full ₹8–10/L above Delhi. Onion and grape freight fleets running the Nashik–Mumbai–Gujarat triangle live inside this gradient daily.',
      'The Mumbai–Agra highway (NH-60) through Nashik is a classic fuel-planning road: southbound tankers fill in Gujarat or Nashik-side pumps before descending into the Mumbai belt\'s identical-but-freight-heavier prices, while northbound ones push toward MP\'s even higher 29% slab with full tanks. Private drivers on Shirdi–Trimbakeshwar weekend runs should simply fill in Nashik city.',
      'Kumbh-scale event traffic periodically wrecks local mileage — idling in festival jams at high per-litre prices is the worst combination. Event-season visitors should budget 20% extra fuel over normal highway figures and ignore pump spreads entirely.',
    ],
  },
  agra: {
    heading: 'Agra: Mathura refinery next door, UP\'s fair slab',
    paragraphs: [
      'Agra sits minutes from the Mathura refinery, and Uttar Pradesh\'s 19.36%-or-₹14.85/L petrol slab does the rest — the city tracks Delhi within ₹1–2/L most days, far below Jaipur across the Rajasthan border (29.04%). Yamuna Expressway commuters get the best of both worlds: short freight and a moderate tax that does not punish distance.',
      'Diesel at 17.08% or ₹10.41/L keeps the Agra–Delhi tourist taxi trade viable. Taxis running the Taj–Delhi circuit quote narrow fuel margins precisely because the UP–Delhi gradient is small; the same trip originating in Rajasthan would carry a visible surcharge. Mathura–Agra local operators rarely think about fuel arbitrage at all — the slab is uniform across the belt.',
      'The expressway itself is the efficiency lever: steady 80–100 km/h cruising returns 18–20 km/L for cars that manage 12 in MG Road traffic. At Agra prices, the expressway round trip to Delhi can cost less in fuel than a week of old-city idling — speed discipline beats pump choice here.',
    ],
  },
  coimbatore: {
    heading: 'Coimbatore: Tamil Nadu\'s flat ₹11.52/L shapes prices',
    paragraphs: [
      'Coimbatore pays Tamil Nadu\'s 13% + ₹11.52/L petrol structure (11% + ₹9.62/L diesel) with supply from Chennai/Manali and Kochi-side terminals — moderate freight, distinctive tax. The flat ₹11.52 component means Coimbatore prices move less than Bengaluru\'s 29.84%-driven swings: crude rallies arrive muted, crude crashes arrive late. The city usually sits between Chennai and Bengaluru on petrol.',
      'The textile–engineering SME belt runs diesel gensets and delivery fleets where the 11% + ₹9.62/L diesel slab is genuinely competitive — well below Karnataka\'s 21.17% or Kerala\'s 22.76%+extras. Pollachi–Tiruppur runs stay inside the slab, so operators optimise loads and tyre life rather than fuel stops.',
      'Avinashi Road flyover traffic defines private mileage here: peak-hour crawling versus free-flow night driving can differ by 4 km/L. For a 1,000 km month, that is 20+ litres — roughly ₹2,000 — which no pump spread in the city can match. Time-shift before pump-shop.',
    ],
  },
  kozhikode: {
    heading: 'Kozhikode: Kochi refinery nearby, Kerala cesses on top',
    paragraphs: [
      'Kozhikode is fed from the Kochi refinery via Irumpanam and Feroke terminals — short coastal supply — but Kerala\'s tax stack overwhelms the freight advantage: 30.08% sales tax + ₹1/L + 1% cess + ₹2/L social security cess on petrol. Only Telangana and Andhra Pradesh tax petrol harder. Kozhikode petrol routinely prints ₹10+/L above Delhi and a few rupees above even Bengaluru.',
      'Diesel at 22.76% + extras is similarly stacked, which pinches Malabar\'s fishing, coir and construction fleets. Feroke–Ramanattukara operators compare notes with Mangalore across the Karnataka border (29.84%/21.17%) — neither side offers relief, a reminder that the entire southwest coast is high-tax territory with only Mahe (Puducherry enclave, 16.98%) as a small exception nearby.',
      'Mavoor Road and beach-corridor commuters face humidity-plus-AC loads year-round; AC discipline and clean filters are the local fuel levers. Short hops on scaler two-wheelers dominate — keeping them tuned returns more than any highway fuel strategy.',
    ],
  },
  trivandrum: {
    heading: 'Trivandrum: the capital at the end of the supply line',
    paragraphs: [
      'Trivandrum sits at the far end of Kerala\'s supply chain — Kochi-refined fuel railed and trucked the length of the state — while paying Kerala\'s full 30.08% + ₹3/L-extras stack on petrol. Longest freight plus heaviest cesses makes the capital one of India\'s dearest petrol cities, often the costliest in the south alongside Hyderabad. Delhi\'s 19.40% regime feels like a different country, ₹10–12/L cheaper.',
      'The city\'s geography offers one curiosity: the route north runs through the same slab all the way to Kochi, so there is no cheaper fill-up in any direction until the Tamil Nadu border at Kaliyakkavilai — and even there, Tamil Nadu\'s ₹11.52/L flat component limits the saving. Nagercoil runs are rarely worth it for fuel alone.',
      'Technopark commuters on Kazhakkoottam–Kovalam corridors do long daily distances at high per-litre prices — the worst combination. Carpooling the bypass and using the calculator below to size monthly exposure (a 1,400 km month at 13 km/L exceeds ₹11,000) is the honest starting point; pump choice inside the city is rounding error.',
    ],
  },
  chandigarh: {
    heading: 'Chandigarh: the low-tax island in the North',
    paragraphs: [
      'Chandigarh\'s 15.24% (or ₹12.42/L floor) petrol slab and 6.66% diesel slab make it a low-tax island between Punjab (16.58% + 10% addl.) and Haryana (18.2% + 5% addl.). Ambala and Bhatinda terminals keep freight short, so Chandigarh petrol undercuts Mohali and Panchkula by ₹1–3/L on most days — one of the few city borders in India where the saving is real and immediate.',
      'Diesel is the standout: 6.66% is among the lowest diesel rates anywhere, so Chandigarh diesel tracks far below most state capitals. Taxi operators running Chandigarh–Shimla and Chandigarh–Amritsar routes fill in the UT as policy before climbing into Himachal (13.9% + cess) or Punjab slabs.',
      'Sector-grid driving keeps mileage honest — steady 40–50 km/h flows return good figures — so the city\'s fuel bills are doubly blessed: low per-litre prices and efficient conditions. The only caveat is the per-litre floor: in deep crude dips the ₹12.42/L minimum stops Chandigarh tracking Delhi down fully.',
    ],
  },
  ludhiana: {
    heading: 'Ludhiana: Bhatinda refinery keeps Punjab moving',
    paragraphs: [
      'Punjab\'s Bhatinda refinery plus Jalandhar terminals give Ludhiana short, reliable supply, and the state\'s 16.58% + 10% addl. tax petrol slab (≈₹14.93/L floor) lands mid-pack nationally — well below Rajasthan\'s 29.04% or MP\'s 29%, modestly above Delhi\'s 19.40% in effect. Ludhiana petrol usually prints ₹2–4/L above Delhi, far below Jaipur or Bhopal.',
      'The city\'s hosiery–bicycle–auto-parts economy runs on diesel and CNG logistics where Punjab\'s 13.1% + 10% addl. diesel slab is competitive. GT Road freight operators running Ludhiana–Delhi fill on either side without stress — the gradient is small — but Ludhiana–Srinagar runs top up in Punjab before the J&K MST and hill freight stack up.',
      'Fog-season idling on Ferozepur Road and winter cold-starts punish mileage more than pump spreads. Block-heater discipline for diesel fleets and avoiding pre-dawn idling warm-ups save measurable litres across a Ludhiana winter.',
    ],
  },
  varanasi: {
    heading: 'Varanasi: UP slab, ghat-city driving',
    paragraphs: [
      'Varanasi pays Uttar Pradesh\'s 19.36%-or-₹14.85/L petrol rate with Mathura/Barauni-fed terminals — a fair slab that keeps the city within ₹1–3/L of Delhi and well below Patna across the Bihar border (23.58% + 30% surcharge). Diesel at 17.08% or ₹10.41/L sustains the boat-engine, generator and freight economy without the surcharge pain Bihar imposes.',
      'The old city\'s lanes dictate fuel economics more than the pump board: idling through Godowlia–Dashashwamedh traffic at 8–10 km/L versus 16+ on the ring road and Babatpur airport runs. For priests, guides and hotel operators doing short-hop duties, two-wheeler tuning and trip batching beat any fuel-price timing.',
      'Devotee-season taxi fleets running Varanasi–Ayodhya–Prayagraj stay inside the same UP slab throughout, so quotes stay stable. Cross into Bihar toward Gaya and the surcharge appears — operators fill in UP before eastbound runs as routine.',
    ],
  },
  meerut: {
    heading: 'Meerut: Delhi-adjacent prices on the NCR edge',
    paragraphs: [
      'Meerut\'s UP slab (19.36% or ₹14.85/L petrol) plus proximity to Mathura/Panipat-fed terminals makes it nearly a Delhi-price city — usually within ₹1–2/L of the capital on petrol and similarly close on diesel (17.08% or ₹10.41/L). The Delhi–Meerut Expressway shortened more than travel time: tanker turnaround from terminals improved, steadying supply versus older highway days.',
      'NCR spillover defines demand: Modinagar–Ghaziabad–Delhi daily runners cross the UP–Delhi border without fuel anxiety since both sides tax similarly. Contrast with Gurugram–Jaipur runs where the Rajasthan 29.04% wall appears 100 km out — Meerut drivers never face that cliff in any direction except east toward Bareilly (same slab, no issue).',
      'Sports-goods and manufacturing MSMEs running diesel tempos benefit from the moderate diesel slab. For private drivers, the expressway cruising bonus dominates: 80–100 km/h steady running versus Modi Nagar town traffic is a 5+ km/L swing, worth more monthly than any pump hunt between Meerut and Ghaziabad.',
    ],
  },
  vijayawada: {
    heading: 'Vijayawada: Andhra\'s 31% VAT at a logistics crossroads',
    paragraphs: [
      'Vijayawada sits at Andhra Pradesh\'s road junction but under its heaviest tax: 31% VAT + ₹4/L + ₹1/L cess on petrol. Vizag-refined fuel reaches the city efficiently via Vijayawada terminals, yet the pump price runs ₹9–11/L above Delhi — among the highest for a non-metro. Diesel at 22.25% + extras is less extreme but still above most neighbours.',
      'The city\'s trucking economy — the Deccan-to-coast transshipment point — plans around the AP–Telangana wall: Telangana\'s 35.20% is worse, so Vijayawada is the "cheap" side of that border, while the Tamil Nadu side (13% + ₹11.52/L) can undercut both on certain base-price days. Fleet fuel cards record which side of each border the fill happened on; private drivers just notice everything is expensive.',
      'Benz Circle–Eluru Road congestion plus hot May–June AC loads set private mileage. At these per-litre levels, a 1,000 km month at 12 km/L costs roughly ₹8,800+ — the calculator below makes the carpool case better than any lecture.',
    ],
  },
  guwahati: {
    heading: 'Guwahati: refinery city with a "whichever is higher" floor',
    paragraphs: [
      'Guwahati refines its own fuel — Numaligarh, Bongaigaon and Guwahati units surround the city — yet Assam\'s 24.77%-or-₹18.80/L petrol structure (22.19%-or-₹14.60/L diesel) keeps prices mid-high nationally. The floor is the story: at ₹18.80/L minimum petrol tax, Guwahati cannot follow crude down the way Delhi\'s pure 19.40% does. Refinery proximity saves freight; the tax floor takes it back.',
      'As the Northeast\'s distribution hub, Guwahati sets the base every other NE capital marks up from. Shillong (Meghalaya 13.5%/5%) undercuts it on diesel; Imphal (25% + long haul) exceeds it on petrol. GS Road–Dispur commuters live with Brahmaputra humidity and bridge-bottleneck idling that trims 1–2 km/L off brochure figures.',
      'Monsoon flooding and winter fog both punish mileage more than pump variation. Guwahati drivers do best treating the 30-day trend on this page as a timing tool in volatile months and ignoring it in flat ones — then spending the real effort on monsoon tyre and brake maintenance that keeps wet-road efficiency from collapsing.',
    ],
  },
};
