// Hand-written guides for all 36 state/UT pages (keyed by state_slug as
// stored in the DB). Each entry is ~180–240 words of unique copy: the real
// VAT slab, the depot that feeds the state, and why its cities price the way
// they do. Rendered on /{fuel}-price-in-{state} pages.

export type StateSpotlight = {
  heading: string;
  paragraphs: string[];
};

export const STATE_SPOTLIGHTS: Record<string, StateSpotlight> = {
  'andaman-and-nicobar-islands': {
    heading: 'Why fuel is cheap in the Andamans despite the sea distance',
    paragraphs: [
      'The Andamans charge 1% VAT on petrol and diesel — the lowest slab in India — which overwhelms the obvious disadvantage of shipping every litre from mainland refineries to Port Blair. Freight is real, but 1% versus 25–35% elsewhere is a thirty-fold tax advantage no freight bill can erase. Port Blair routinely undercuts mainland metros.',
      'Supply moves by coastal tanker to Port Blair terminal and onward by small vessels and trucks to Havelock, Rangat and Nicobar stations. Inter-island movement, not crude, is the local price variable: outer islands print a rupee or two above Port Blair. There is no intra-state arbitrage to play — just one slab everywhere — so visitors should fill at Port Blair before island-hopping rather than hoping for cheaper pumps elsewhere.',
    ],
  },
  'andhra-pradesh': {
    heading: 'Andhra Pradesh: 31% VAT makes Vizag-refined fuel dear',
    paragraphs: [
      'Andhra Pradesh refines fuel at Vizag and taxes it at 31% VAT + ₹4/L + ₹1/L road cess on petrol (22.25% + extras on diesel) — one of India\'s heaviest stacks. The Vizag refinery-to-Vijayawada run is short and cheap, yet AP cities sit near the top of every national ranking because the tax layer adds roughly ₹10/L more than Delhi\'s 19.40% on the same base.',
      'Within the state, spreads are narrow: Vizag, Vijayawada, Guntur and Tirupati share the slab, differing only by terminal handling. The meaningful borders are external — Telangana\'s 35.20% is worse to the northwest, Tamil Nadu\'s 13% + ₹11.52/L can be kinder to the south. Logistics fleets on the Chennai–Vizag–Hyderabad triangle plan fills accordingly; private drivers should use the city tables on this page and the calculator rather than chasing intra-state spreads that barely exist.',
    ],
  },
  'arunachal-pradesh': {
    heading: 'Arunachal Pradesh: low VAT, long mountain haul',
    paragraphs: [
      'Arunachal charges 14.5% VAT on petrol and just 7% on diesel — among the country\'s lowest — with fuel trucked from Numaligarh refinery in Assam via North Lakhimpur depots. Itanagar and Naharlagun prices therefore stay moderate: the tax advantage survives the hill freight, unlike high-tax hill states where both layers punish.',
      'Road conditions set the real price: monsoon landslides on NH-13 and winter fog can stall tankers for days, producing short local spikes no tax table predicts. Tawang and eastern districts print above Itanagar on freight alone. Drivers should keep tanks half-full in monsoon months and treat the state average on this page as a floor for remote districts, not a promise.',
    ],
  },
  assam: {
    heading: 'Assam refines its own fuel but floors the tax',
    paragraphs: [
      'Assam hosts Numaligarh, Bongaigaon and Guwahati refineries, so freight into Guwahati, Dibrugarh and Silchar is minimal. Prices stay mid-high anyway because of the "24.77% or ₹18.80/L, whichever is higher" petrol structure (22.19% or ₹14.60/L on diesel): the per-litre floor keeps tax high even when crude falls, unlike Delhi\'s pure-percentage 19.40%.',
      'As the Northeast\'s hub, Assam sets the base price its neighbours mark up from — every litre for Nagaland, Manipur and Arunachal rolls through here first. Within the state, spreads follow the rivers and roads: upper-Assam districts near Numaligarh run cheapest, Barak Valley adds freight. Track Guwahati as the anchor and expect +₹1–3/L in remote districts.',
    ],
  },
  bihar: {
    heading: 'Bihar: Barauni refinery next door, 30% surcharge on top',
    paragraphs: [
      'Bihar should be cheap — Barauni refinery sits inside the state feeding Patna terminals directly — but the 30% surcharge on VAT (23.58% or ₹16.65/L on petrol, 16.37% or ₹12.33/L on diesel, plus surcharge) pushes Patna, Gaya and Muzaffarpur well above Lucknow and Ranchi. Few states surcharge their own VAT; Bihar\'s pump gap with UP (19.36% slab) is almost entirely that choice.',
      'The floor clause makes Patna prices sticky downwards: when dealer prices soften, the ₹16.65/L minimum binds and the city stops tracking Delhi down. Border economics are sharp — UP to the west is cheaper, Jharkhand (22% + cess) to the south is comparable — so eastbound operators fill in UP and northbound ones compare Sitamarhi versus Nepal-side realities carefully.',
    ],
  },
  chandigarh: {
    heading: 'Chandigarh: a low-tax UT inside a higher-tax region',
    paragraphs: [
      'Chandigarh taxes petrol at 15.24% (or ₹12.42/L floor) plus a tiny ₹10/KL cess, and diesel at just 6.66% — dramatically below Punjab (16.58% + 10% addl.) and Haryana (18.2% + 5% addl.) surrounding it. Ambala/Bhatinda-fed terminals keep freight short, so the UT undercuts Mohali and Panchkula by ₹1–3/L persistently — genuine, exploitable arbitrage across a municipal border.',
      'Diesel is the standout nationally: 6.66% is among India\'s lowest rates, making Chandigarh a policy fill-up point for taxis running to Shimla (13.9% + cess uphill) and Amritsar. The only catch is the petrol floor — in deep crude dips the ₹12.42/L minimum stops Chandigarh falling as fast as Delhi\'s pure 19.40%.',
    ],
  },
  chhattisgarh: {
    heading: 'Chhattisgarh: petrol and diesel taxed almost alike',
    paragraphs: [
      'Chhattisgarh charges 24% + ₹2/L on petrol and 23% + ₹1/L on diesel — one of India\'s narrowest petrol–diesel tax gaps. Raipur, Bilaspur and Durg therefore show a smaller spread between the fuels than almost anywhere else, which keeps petrol viable for private buyers long after other states pushed them toward diesel or CNG.',
      'Supply runs from Paradip and Mumbai pipeline systems into Korba/Raipur terminals — moderate freight, stable availability. Borders offer little: Odisha (28%/24%) is worse on petrol, MP (29% + extras) worse overall, Jharkhand comparable. The state average on this page is genuinely representative; district spreads rarely exceed a rupee.',
    ],
  },
  'dadra-and-nagar-haveli': {
    heading: 'Dadra and Nagar Haveli: UT rates on the Maharashtra border',
    paragraphs: [
      'The UT taxes petrol at 12.75% and diesel at 13.50% — less than half Maharashtra\'s 25% + ₹5.12/L petrol burden across the border — with Hazira/Surat terminals minutes away keeping freight tiny. Silvassa pumps are classic fill-up stops for Mumbai–Ahmedabad highway traffic precisely because the slab changes at the border post.',
      'Note the inversion: diesel VAT here slightly exceeds petrol VAT, unusual nationally. For most drivers the message is simple — fill inside the UT, especially before entering Maharashtra. District spreads are negligible; the border spread (₹5–7/L vs Maharashtra) is the whole story.',
    ],
  },
  'daman-and-diu': {
    heading: 'Daman and Diu: the west coast\'s cheapest fill-up',
    paragraphs: [
      'Daman and Diu share the 12.75% petrol / 13.50% diesel UT slab with Dadra and Nagar Haveli, fed from the same Hazira/Surat terminal belt. Daman\'s pumps undercut Mumbai by ₹7–9/L and even shade most of Gujarat — among the cheapest coastal fuel in India. Weekend traffic from Vapi and Valsad includes deliberate fuel stops.',
      'Like its sister UT, diesel here is taxed marginally above petrol in percentage terms, but both are low in absolute terms. There is no intra-UT variation worth tracking; watch the Daman–Mumbai and Diu–Rajkot gradients instead, and plan highway fills on the UT side.',
    ],
  },
  delhi: {
    heading: 'Delhi: the metro price anchor at 19.40% VAT',
    paragraphs: [
      'Delhi\'s 19.40% petrol VAT (16.75% + ₹250/KL ambience charge on diesel) plus Panipat-fed pipeline supply makes the capital India\'s metro price anchor — the number Mumbai (25% + ₹5.12/L), Bengaluru (29.84%) and Hyderabad (35.20%) are all measured against. The gap to Mumbai (₹8–10/L on petrol) is almost entirely the ₹5.12/L flat surcharge plus the VAT-rate difference compounding on base + excise.',
      'NCR spreads are tight: Noida\'s UP slab (19.36% or floor) and Gurugram\'s Haryana slab (18.2% + 5%) track Delhi within ₹1–2/L, so cross-border fuel runs are pointless. Delhi\'s real lesson for other states is political economy — the capital has repeatedly chosen to hold VAT down where high-tax states chose revenue, and its pump prices show the result every morning at 6 AM.',
    ],
  },
  goa: {
    heading: 'Goa: mid-range VAT, short coastal supply',
    paragraphs: [
      'Goa charges 21.5% + 0.5% green cess on petrol (17.5% + 0.5% on diesel), fed from Vasco/Zuari terminals linked to the Mangalore refinery. Panaji, Margao and Mapusa therefore sit mid-table nationally — above Delhi\'s 19.40% regime slightly, well below Karnataka\'s 29.84% next door and Maharashtra\'s 25% + ₹5.12/L to the north.',
      'Tourist-season demand spikes strain retail logistics more than price: charter-season queues at coastal pumps, not tax changes, move the experience. The Karnataka border offers no relief (worse slab) and Maharashtra none either — Goa is the cheap side of both its land borders, a rarity worth knowing for Belagavi and Sawantwadi road-trippers.',
    ],
  },
  gujarat: {
    heading: 'Gujarat: the refining giant with restrained taxes',
    paragraphs: [
      'Gujarat pairs India\'s densest refining cluster — Jamnagar (world\'s largest), Koyali outside Vadodara, Hazira — with restrained taxes: 13.7% + 4% cess on petrol, 14.9% + 4% on diesel. Ahmedabad, Surat and Vadodara therefore undercut Mumbai by ₹6–9/L persistently and track Delhi within a few rupees. It is the clearest proof that low VAT plus local refining beats every other combination.',
      'The 4% cess compounds on town rate + VAT, but from so low a base the effect is small. Inter-district spreads are minimal; the action is all at the borders — Maharashtra (25% + ₹5.12/L) to the south and Rajasthan (29.04%) to the north are both far dearer, so Vapi and Palanpur pumps serve steady border-hopping trade.',
    ],
  },
  haryana: {
    heading: 'Haryana: Panipat refinery in-state, Delhi still cheaper',
    paragraphs: [
      'Haryana hosts the Panipat refinery, so Ambala/Rewari-fed freight into Gurugram, Faridabad and Karnal is minimal. Yet the 18.20%-or-₹14.50/L + 5% additional tax petrol structure (16% + 5% on diesel) keeps the state ₹1–3/L above Delhi\'s 19.40% pure VAT — the floor and the additional tax erase the freight edge. Gurugram–Delhi commuters cross the border without fuel motive.',
      'Within Haryana, spreads are narrow; the gradient that matters is north (Punjab 16.58% + 10%, comparable) and south (Rajasthan 29.04%, far worse). Jaipur-bound drivers fill in Haryana — Rewari and Narnaul pumps do brisk border trade — while Chandigarh-bound ones wait for the UT\'s 15.24%/6.66% slabs.',
    ],
  },
  'himachal-pradesh': {
    heading: 'Himachal Pradesh: reasonable tax, punishing terrain',
    paragraphs: [
      'Himachal\'s 17.5%-or-₹13.50/L + ₹0.60/L cess petrol slab (13.90% + cess diesel) is moderate — below Punjab, Haryana and J&K — but every litre climbs from Ambala/Bhatinda terminals by truck over the hills. Shimla, Dharamshala and Mandi therefore print ₹2–4/L above Chandigarh on freight alone, a rare state where logistics outweighs tax.',
      'Winter closes the equation: snow-season supply runs slow, tourist demand spikes, and heating-adjacent diesel use rises. District spreads follow altitude — Keylong and Reckong Peo run above Shimla. Visitors should fill in the plains (Chandigarh/Ambala side) before ascending rather than comparing pumps within the hills.',
    ],
  },
  'jammu-and-kashmir': {
    heading: 'Jammu and Kashmir: high MST softened by rebates',
    paragraphs: [
      'J&K levies 24% MST + ₹2/L employment cess on petrol (16% + ₹1/L on diesel) but rebates ₹3.50/L on petrol and ₹2.50/L on diesel — an unusual design that softens the headline rate. Net prices in Jammu, Srinagar and Anantnag land mid-pack nationally, above Punjab\'s Bhatinda-fed belt but below Himachal\'s hill-freight peaks.',
      'The real variable is the road: Lakhanpur–Jalandhar/Bhatinda supply via the plains runs fine until winter closes or restricts the passes, when Srinagar spreads over Jammu widen ₹1–2/L. District gaps follow the Srinagar–Leh axis most. Summer Amarnath and tourist traffic strains retail throughput rather than price itself.',
    ],
  },
  jharkhand: {
    heading: 'Jharkhand: flat 22% on both fuels with a high floor',
    paragraphs: [
      'Jharkhand taxes petrol and diesel identically at 22% (₹17/L floor petrol, ₹12.50/L diesel, + ₹1/L cess) — unusual symmetry that makes Ranchi diesel notably dearer than in Odisha (24%) or West Bengal (17%) next door. Barauni-fed supply via Ranchi/Bokaro depots is reliable, so the price is policy: the high floor keeps pumps sticky when crude softens.',
      'Borders define strategy: Bihar\'s surcharged slab to the north is worse, Odisha to the south comparable, Bengal to the east kinder on diesel. Dhanbad–Bokaro industrial diesel demand is large enough that fleet buyers track the floor clause — when dealer prices dip, the ₹12.50/L minimum binds and timing fills stops mattering.',
    ],
  },
  karnataka: {
    heading: 'Karnataka: the 2024 hike that closed the gap with Mumbai',
    paragraphs: [
      'Karnataka\'s 29.84% sales tax on petrol (21.17% diesel), raised in mid-2024, moved Bengaluru, Mysuru and Hubballi from the cheaper half of southern cities to within ₹2–4/L of Mumbai. Delhi\'s 19.40% now sits ten points below — most of the ₹7–9/L Delhi–Bengaluru spread is that single hike. Mangalore refinery plus Devanagonthi terminals keep freight short; tax is the entire story.',
      'District spreads are small; the meaningful comparisons cross borders — Hosur (Tamil Nadu 13% + ₹11.52/L) can undercut border districts ₹1–3/L, while Telangana (35.20%) and Maharashtra (25% + ₹5.12/L) are worse. The state average on this page is representative; watch budget-cycle VAT chatter more than pump spreads.',
    ],
  },
  kerala: {
    heading: 'Kerala: Kochi refinery, triple-layer cesses',
    paragraphs: [
      'Kerala refines at Kochi yet pays among India\'s highest prices: 30.08% + ₹1/L + 1% cess + ₹2/L social security cess on petrol (22.76% + extras on diesel). The stacked flat extras (₹3+/L before VAT even applies) plus near-30% ad valorem make Kochi, Kozhikode and Trivandrum ₹10+/L dearer than Delhi on petrol. Only Telangana and AP tax harder.',
      'Freight runs the state\'s length — Kochi to Trivandrum adds measurable cost — so the capital prints above Kochi most days. The sole relief point is Mahe, the Puducherry enclave (16.98%) inside Kannur district, whose pumps undercut neighbours by rupees. Coastal humidity and year-round AC loads trim real-world mileage, compounding the per-litre pain.',
    ],
  },
  'madhya-pradesh': {
    heading: 'Madhya Pradesh: Bina refinery, 29% VAT regardless',
    paragraphs: [
      'MP built Bina refinery to shorten Indore/Bhopal supply — and freight did fall — but the 29% + ₹2.50/L + 1% cess petrol slab (19% + ₹1.50/L + 1% diesel) keeps the state among central India\'s dearest. Bhopal and Indore track ₹7–9/L above Delhi on petrol; Gwalior near the UP border highlights the contrast daily against Mathura-fed UP towns.',
      'Diesel is relatively less punished, sustaining the state\'s trucking corridors (Nagpur–Bhopal–Gwalior–Agra). Borders: Gujarat (13.7% + 4%) to the west is far cheaper, UP (19.36%) to the north cheaper, Maharashtra (25% + ₹5.12/L) comparable-to-worse. Indore–Vadodara operators fill eastbound in Gujarat as policy.',
    ],
  },
  maharashtra: {
    heading: 'Maharashtra: the ₹5.12/L surcharge behind the Mumbai premium',
    paragraphs: [
      'Maharashtra\'s 25% VAT + ₹5.12/L additional tax on petrol (21% on diesel) applies statewide — Mumbai, Thane, Pune, Nagpur alike — and the flat ₹5.12 is the single most famous fuel levy in India. It explains roughly half the ₹8–10/L Mumbai–Delhi petrol gap on its own; the 25%-vs-19.40% VAT difference explains most of the rest. Trombay-area terminals give Mumbai excellent freight, yet it remains India\'s dearest big metro because tax dominates.',
      'Within the state, Mumbai–Pune–Nagpur spreads are freight slivers (a rupee at most). The real gradients are external: Gujarat (13.7% + 4%) undercuts the entire northern border by ₹5–7/L, Telangana (35.20%) exceeds it to the southeast. Vapi and Silvassa border pumps exist because of this slab. Watch state-budget VAT signals — any surcharge move shifts every city in Maharashtra together.',
    ],
  },
  manipur: {
    heading: 'Manipur: 25% VAT at the end of NH-2',
    paragraphs: [
      'Manipur taxes petrol at 25% (diesel 13.5%) with fuel trucked from Numaligarh via Dimapur over NH-2 — the longest, most fragile overland haul in the Northeast. Imphal prices combine steep tax with maximum freight, printing among the region\'s highest on petrol. Diesel\'s kinder 13.5% softens the blow for transport fleets.',
      'Highway status is the price variable: blockades, landslides or convoy rules stall tankers and produce week-long local spikes no 6 AM revision explains. District spreads follow the Dimapur–Imphal–Moreh axis. Keep tanks half-full in monsoon and treat the state average as Imphal\'s number — hill districts run higher.',
    ],
  },
  meghalaya: {
    heading: 'Meghalaya: India\'s cheapest diesel corridor',
    paragraphs: [
      'Meghalaya charges 13.5% (or ₹13.50/L floor) on petrol but just 5% (or ₹9.50/L) on diesel plus a tiny pollution surcharge — among the lowest diesel taxes in India. Guwahati-refined fuel hops quickly to Shillong, so Shillong diesel regularly undercuts Guwahati (22.19% slab) despite the border between them. Truckers on the Guwahati–Shillong–Silchar run fill in Meghalaya as policy.',
      'Petrol is merely moderate, not cheap — the ₹13.50/L floor binds in soft markets. Within the state, Tura (Garo Hills) adds freight over Shillong. Cross-border private drivers from Assam save meaningfully on diesel, marginally on petrol; the Irony of the Northeast is that its cheapest diesel sits minutes from its refining hub.',
    ],
  },
  mizoram: {
    heading: 'Mizoram: twin cesses plus the Aizawl haul',
    paragraphs: [
      'Mizoram\'s 18% petrol / 10% diesel VAT looks modest until the twin cesses — ₹2,000/KL infrastructure plus ₹2,000/KL road maintenance (₹2/L each) — plus the Silchar-to-Aizawl hill haul. Aizawl, Lunglei and Champhai prices are freight-led more than tax-led, a rarity nationally. Assam-refinery proximity on the map misleads; road hours are what count.',
      'Landslide season (May–September) is the pricing season: NH-306 disruptions stall supply and local spreads widen. State-average figures here describe Aizawl; border districts add more. Travellers should enter with full tanks from Silchar rather than comparing pumps inside the state.',
    ],
  },
  nagaland: {
    heading: 'Nagaland: Dimapur depot nearby, high floor anyway',
    paragraphs: [
      'Nagaland\'s Dimapur depot keeps freight short for Kohima and Dimapur, but the 21.75%-or-₹16.94/L petrol structure (17.20%-or-₹12.83/L diesel) imposes a high per-litre floor that keeps prices sticky when crude falls. Delhi-style downside never fully arrives here; the minimum binds first.',
      'Borders: Assam (24.77% slab) to the west is comparable-to-worse on petrol, Manipur (25% + haul) worse to the south. Within Nagaland, Kohima runs above Dimapur on climb freight. Mon–Tuensang districts add more. The state average is a Dimapur-anchored number — read hill districts a rupee or two higher.',
    ],
  },
  odisha: {
    heading: 'Odisha: Paradip refinery, 28% VAT anyway',
    paragraphs: [
      'Odisha refines at Paradip and delivers via Sambalpur/Jatni terminals with short freight — then taxes petrol at a flat 28% (diesel 24%), erasing the entire refinery advantage. Bhubaneswar and Cuttack track closer to Kolkata\'s high-tax levels than to Vizag\'s, despite Paradip being nearer than Haldia is to Kolkata. Policy, not distance, sets the price.',
      'District spreads are modest; the Rourkela–Jharsuguda industrial belt adds small freight over the coastal plain. Meaningful borders: Chhattisgarh (24%/23%) can undercut western districts, Andhra (31%) is worse to the south. Steel-and-mining diesel fleets feel the 24% diesel slab directly — among the higher diesel rates in eastern India.',
    ],
  },
  pondicherry: {
    heading: 'Pondicherry: legacy slug, same low-tax story',
    paragraphs: [
      'Pondicherry is the legacy slug merged into Puducherry — this URL now redirects to the Puducherry page. The tax story is identical: 16.98% petrol / 11.22% diesel VAT with Chennai-fed coastal supply, undercutting Tamil Nadu\'s 13% + ₹11.52/L structure by ₹4–6/L. Old bookmarks and indexed links land here; the live prices live on the Puducherry page.',
    ],
  },
  puducherry: {
    heading: 'Puducherry: the low-tax enclave inside Tamil Nadu',
    paragraphs: [
      'Puducherry charges 16.98% VAT on petrol (11.22% diesel) against Tamil Nadu\'s 13% + ₹11.52/L flat-heavy structure next door — and because the flat ₹11.52 dominates at current bases, the UT undercuts Chennai by ₹4–6/L persistently. Ennore-fed coastal supply keeps freight trivial. Karaikal, Mahe and Yanam share the slab, making Mahe (inside Kerala\'s 30%+ territory) one of India\'s most dramatic border arbitrages.',
      'ECR weekend traffic from Chennai includes deliberate Puducherry fuel stops; Mahe serves the same role for Kannur–Kozhikode drivers. Within the UT, spreads are negligible — the Puducherry–Chennai and Mahe–Kerala gradients are the entire story. Fill before re-entering the high-tax state, every time.',
    ],
  },
  punjab: {
    heading: 'Punjab: Bhatinda refinery plus moderate VAT',
    paragraphs: [
      'Punjab pairs the Bhatinda refinery and Jalandhar terminals with 16.58% + 10% additional tax on petrol (≈₹14.93/L floor plus small cesses) and 13.1% + 10% on diesel — mid-pack nationally, well below Rajasthan\'s 29.04% or Haryana\'s floor-heavy 18.2%+5%. Ludhiana, Amritsar and Jalandhar track ₹2–4/L above Delhi and far below Jaipur.',
      'The per-litre floors (₹14.93 petrol / ₹10.94 diesel) bind in soft-crude months, stopping Punjab tracking Delhi down fully. Borders: Chandigarh UT (15.24%/6.66%) undercuts the cities around it, Himachal adds hill freight north, Haryana is comparable south. Fog-season idling and cold-start losses move winter bills more than pump spreads.',
    ],
  },
  rajasthan: {
    heading: 'Rajasthan: 29.04% petrol VAT in the desert state',
    paragraphs: [
      'Rajasthan taxes petrol at 29.04% + ₹1,500/KL road cess — nearly ten points above Delhi — while diesel sits far kinder at 17.30% + ₹1,750/KL. Jaipur, Jodhpur and Udaipur therefore rank among the North\'s dearest petrol fills with a wide petrol–diesel spread that keeps diesel SUVs rational here. Panipat/Mathura-fed terminals keep freight ordinary; tax is the price.',
      'Border economics dominate: every neighbouring slab — Gujarat (13.7% + 4%), UP (19.36%), Haryana (18.2% + 5%), MP (29% + extras) — is cheaper or comparable on petrol except MP. Abu Road and Bhiwadi border pumps do steady arbitrage trade. Tourist-circuit taxis (Jaipur–Agra–Delhi) price the Rajasthan leg\'s fuel explicitly.',
    ],
  },
  sikkim: {
    heading: 'Sikkim: low diesel VAT at Himalayan altitude',
    paragraphs: [
      'Sikkim charges 22% + ₹4,000/KL cess on petrol but only 12% + ₹3,500/KL on diesel — one of the friendlier diesel slabs in the hills. Gangtok fuel climbs by truck from Siliguri up NH-10, so freight exceeds tax as a variable: landslides and winter road status move prices more than VAT tweaks. Diesel drivers get the better end of both tax and relative Competition.',
      'District spreads follow the ascent — Nathula-side and North Sikkim outlets run above Gangtok. Visitors should fill at Siliguri (West Bengal 25%/17% + cess, but plains freight) before climbing rather than comparing pumps within the state. Monsoon-season travellers should carry margin: a closed NH-10 strains retail availability before it moves price.',
    ],
  },
  'tamil-nadu': {
    heading: 'Tamil Nadu: the flat-₹11.52/L model that stabilises prices',
    paragraphs: [
      'Tamil Nadu\'s 13% + ₹11.52/L petrol formula (11% + ₹9.62/L diesel) behaves unlike percentage-only states: the flat chunk dominates, so Chennai, Coimbatore and Madurai prices move less with crude — dips arrive late, spikes arrive muted. Versus Bengaluru\'s 29.84% the structure is kinder in rallies and stingier in crashes; versus Delhi\'s 19.40% it usually prints a few rupees higher.',
      'Manali/Nagapattinam refining plus Ennore terminals keep freight short statewide; Madurai–Tirunelveli add small southern freight. The live border is Puducherry (16.98%), which undercuts Chennai ₹4–6/L, and Hosur–Bengaluru traffic exploits the Karnataka side both ways depending on the month. District spreads are narrow; the flat-tax arithmetic is the story.',
    ],
  },
  telangana: {
    heading: 'Telangana: India\'s highest petrol VAT at 35.20%',
    paragraphs: [
      'Telangana\'s 35.20% petrol VAT (27% diesel) is the highest in India — above Andhra\'s 31%, Karnataka\'s 29.84% and Maharashtra\'s 25%. Hyderabad, Warangal and Karimnagar therefore top southern charts on petrol almost by definition: on a ₹62 dealer price the VAT layer alone exceeds Delhi\'s by roughly ₹10/L. Malkapur/Hyderabad terminals fed from Paradip and Vizag keep logistics competent but irrelevant against that rate.',
      'Diesel at 27% is similarly chart-topping, narrowing the state\'s petrol–diesel spread versus neighbours. Borders offer no escape — every adjacent slab (AP 31%, Karnataka 29.84%, Maharashtra 25% + ₹5.12/L) is also high; Telangana is simply the highest of a high-tax neighbourhood. Fleet operators crossing the state fill at the edges, not inside.',
    ],
  },
  tripura: {
    heading: 'Tripura: modest tax, awkward geography',
    paragraphs: [
      'Tripura charges 17.50% + 3% road cess on petrol (10% + 3% diesel) — modest by national standards — with fuel entering via the Guwahati/Silchar corridor into Agartala. The Chicken\'s Neck geography means freight contributes more than VAT: Agartala prices track Guwahati plus haulage, printing above the tax table\'s suggestion.',
      'Diesel\'s 10% slab is genuinely low, helping the state\'s goods carriers. Bangladesh-border dynamics matter less for price than road status through Assam — a disrupted corridor stalls supply faster than any tax change. Within Tripura, Agartala is the anchor; Dharmanagar and southern districts add freight rupees.',
    ],
  },
  'uttar-pradesh': {
    heading: 'Uttar Pradesh: Mathura refinery, Delhi-like prices',
    paragraphs: [
      'UP\'s 19.36%-or-₹14.85/L petrol slab (17.08%-or-₹10.41/L diesel) plus the Mathura refinery roughly in the state\'s middle gives Lucknow, Kanpur, Agra and Varanasi Delhi-like prices — usually within ₹1–2/L of the capital and far below Rajasthan (29.04%), Bihar (23.58% + 30% surcharge) and MP (29% + extras). It is the Hindi belt\'s fair-price anchor.',
      'The floor binds in soft months (₹14.85/L minimum), pausing UP\'s downside while Delhi slides — otherwise the two move together. District spreads are small except in Bundelkhand and eastern fringes adding freight. The important borders are all favourable: every direction out of UP except Delhi is same-or-worse, so fill inside the state on long runs.',
    ],
  },
  uttarakhand: {
    heading: 'Uttarakhand: UP-like slabs with hill freight',
    paragraphs: [
      'Uttarakhand\'s 16.97%-or-₹13.14/L petrol and 17.15%-or-₹10.41/L diesel slabs mirror UP, fed from Panipat/Mathura terminals at Haridwar and Haldwani. Dehradun, Haridwar and Haldwani therefore print a rupee or two above Delhi — the plains-to-hills freight, not tax, is the gap. Char Dham season strains retail throughput without changing slabs.',
      'Altitude stratifies the rest: Pithoragarh, Uttarkashi and Chamoli outlets run above Dehradun on climb cost. Delhi–Dehradun highway drivers should fill in the plains (UP/Delhi side) before ascending; within the hills, compare availability more than paise. Winter cold-start losses exceed any intra-state pump spread.',
    ],
  },
  'west-bengal': {
    heading: 'West Bengal: Haldia refinery, 25%-plus stack',
    paragraphs: [
      'West Bengal refines at Haldia with Budge Budge terminals minutes from Kolkata — then applies 25% (or ₹13.12/L floor) + ₹1,000/KL cess with 20% additional irrecoverable tax on petrol (17% + cess on diesel). Kolkata, Howrah and Durgapur consequently price near Mumbai rather than Delhi: ₹8–11/L above the capital on petrol, almost all of it the stacked design including tax-on-tax.',
      'The floor ratchets prices: soft crude stops helping once the ₹13.12/L minimum binds, while rallies pass through fully. District spreads are narrow; the live comparisons are Jharkhand (22% + cess, comparable) and Odisha (28%, worse on petrol). Siliguri corridor traffic fills in the plains before the hills regardless of slab.',
    ],
  },
};
