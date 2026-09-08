// State-level fuel tax + supply data.
//
// Source: PPAC "VAT/Sales Tax/GST Rates" statement (as provided by OMCs,
// refreshed Sep 2026). Short display strings — see the linked PPAC page for
// the full legal wording ("whichever is higher" clauses etc.).
// Depot column = the refinery / terminal that typically feeds the state.

export type StateFuelInfo = {
  state: string;
  vatPetrol: string;
  vatDiesel: string;
  depot: string;
  driver: string;
};

export const STATE_FUEL_DATA: Record<string, StateFuelInfo> = {
  'andaman-and-nicobar-islands': {
    state: 'Andaman and Nicobar Islands',
    vatPetrol: '1% VAT',
    vatDiesel: '1% VAT',
    depot: 'Port Blair terminal (shipped from mainland refineries)',
    driver:
      'Virtually no state tax — the 1% VAT is the lowest in India — so pump prices stay low despite long sea freight from the mainland.',
  },
  'andhra-pradesh': {
    state: 'Andhra Pradesh',
    vatPetrol: '31% VAT + ₹4/L + ₹1/L road cess',
    vatDiesel: '22.25% VAT + ₹4/L + ₹1/L road cess',
    depot: 'Visakhapatnam (Vizag) refinery + Vijayawada terminals',
    driver:
      'One of the heaviest petrol tax stacks in India. The 31% VAT plus flat ₹5/L in extras compounds on base + excise, which is why AP cities sit near the top of every ranking.',
  },
  'arunachal-pradesh': {
    state: 'Arunachal Pradesh',
    vatPetrol: '14.5% VAT',
    vatDiesel: '7% VAT',
    depot: 'Numaligarh refinery (Assam) via North Lakhimpur depots',
    driver:
      'Low VAT keeps prices modest, but long hill-road hauls from Assam add freight that partly offsets the tax advantage.',
  },
  assam: {
    state: 'Assam',
    vatPetrol: '24.77% or ₹18.80/L, whichever is higher',
    vatDiesel: '22.19% or ₹14.60/L, whichever is higher',
    depot: 'Numaligarh, Bongaigaon and Guwahati refineries',
    driver:
      'Refining happens in-state, so freight is short — but the "whichever is higher" floor means tax stays high even when crude dips.',
  },
  bihar: {
    state: 'Bihar',
    vatPetrol: '23.58% or ₹16.65/L + 30% surcharge',
    vatDiesel: '16.37% or ₹12.33/L + 30% surcharge',
    depot: 'Barauni refinery + Patna terminals',
    driver:
      'Barauni refinery is next door, yet the 30% surcharge on VAT pushes Patna prices well above neighbours like Lucknow.',
  },
  chandigarh: {
    state: 'Chandigarh',
    vatPetrol: '15.24% or ₹12.42/L + ₹10/KL cess',
    vatDiesel: '6.66% or ₹5.07/L + ₹10/KL cess',
    depot: 'Ambala / Bhatinda terminals (Punjab–Haryana belt)',
    driver:
      'A low-tax UT island inside a higher-tax region — Chandigarh pumps routinely undercut Mohali and Panchkula by a few rupees.',
  },
  chhattisgarh: {
    state: 'Chhattisgarh',
    vatPetrol: '24% VAT + ₹2/L',
    vatDiesel: '23% VAT + ₹1/L',
    depot: 'Korba / Raipur terminals fed from Paradip and Mumbai pipelines',
    driver:
      'Petrol and diesel VAT are almost identical here, so the petrol–diesel gap is narrower than in most states.',
  },
  'dadra-and-nagar-haveli': {
    state: 'Dadra and Nagar Haveli',
    vatPetrol: '12.75% VAT',
    vatDiesel: '13.5% VAT',
    depot: 'Hazira / Surat terminals (Gujarat belt)',
    driver:
      'Low UT rates next to higher-tax Maharashtra and Gujarat — border-town pumps here are classic fill-up stops for Silvassa commuters.',
  },
  'daman-and-diu': {
    state: 'Daman and Diu',
    vatPetrol: '12.75% VAT',
    vatDiesel: '13.5% VAT',
    depot: 'Hazira / Surat terminals (Gujarat belt)',
    driver:
      'Same low UT slab as Dadra and Nagar Haveli, fed cheaply from nearby Gujarat terminals — among the cheapest fuel on the west coast.',
  },
  delhi: {
    state: 'Delhi',
    vatPetrol: '19.40% VAT',
    vatDiesel: '16.75% VAT + ₹250/KL air ambience charge',
    depot: 'Panipat refinery + Tikrikalan / Bijwasan terminals',
    driver:
      'The metro benchmark for cheap fuel: moderate 19.4% VAT plus short-haul supply from Panipat keeps Delhi ₹8–10/L below Mumbai most days.',
  },
  goa: {
    state: 'Goa',
    vatPetrol: '21.5% VAT + 0.5% green cess',
    vatDiesel: '17.5% VAT + 0.5% green cess',
    depot: 'Vasco / Zuari terminals fed from Mangalore refinery',
    driver:
      'Mid-range VAT and short coastal supply chain — Goa usually undercuts Karnataka and Maharashtra despite its tourist-season demand spikes.',
  },
  gujarat: {
    state: 'Gujarat',
    vatPetrol: '13.7% VAT + 4% cess',
    vatDiesel: '14.9% VAT + 4% cess',
    depot: 'Koyali (Vadodara), Jamnagar and Hazira refineries',
    driver:
      'Refining giant with modest taxes — Jamnagar and Koyali supply keeps freight tiny, so Ahmedabad and Surat sit well below Mumbai.',
  },
  haryana: {
    state: 'Haryana',
    vatPetrol: '18.20% or ₹14.50/L + 5% addl. tax',
    vatDiesel: '16% or ₹11.86/L + 5% addl. tax',
    depot: 'Panipat refinery + Ambala / Rewari terminals',
    driver:
      'Panipat refinery is in-state, so freight is minimal — but the per-litre floor means Gurugram rarely matches Delhi across the border.',
  },
  'himachal-pradesh': {
    state: 'Himachal Pradesh',
    vatPetrol: '17.5% or ₹13.50/L + ₹0.60/L cess',
    vatDiesel: '13.90% or ₹10.40/L + ₹0.60/L cess',
    depot: 'Ambala / Bhatinda terminals, trucked uphill',
    driver:
      'Reasonable VAT, punishing terrain — hill freight from the plains adds more to Shimla prices than the tax itself.',
  },
  'jammu-and-kashmir': {
    state: 'Jammu and Kashmir',
    vatPetrol: '24% MST + ₹2/L cess (₹3.50/L rebate)',
    vatDiesel: '16% MST + ₹1/L cess (₹2.50/L rebate)',
    depot: 'Jalandhar / Bhatinda terminals via Lakhanpur',
    driver:
      'High headline MST softened by per-litre rebates. Winter road closures can still swing Jammu vs Srinagar spreads by ₹1–2/L.',
  },
  jharkhand: {
    state: 'Jharkhand',
    vatPetrol: '22% or ₹17/L + ₹1/L cess',
    vatDiesel: '22% or ₹12.50/L + ₹1/L cess',
    depot: 'Barauni refinery + Ranchi / Bokaro depots',
    driver:
      'Flat 22% on both fuels with a high per-litre floor — Ranchi diesel runs noticeably dearer than in neighbouring Odisha or Bengal.',
  },
  karnataka: {
    state: 'Karnataka',
    vatPetrol: '29.84% sales tax',
    vatDiesel: '21.17% sales tax',
    depot: 'Mangalore refinery + Bengaluru (Devanagonthi) terminals',
    driver:
      'Nearly 30% on petrol since the 2024 hike — Bengaluru closed most of its gap with Mumbai overnight and now tracks ₹7–9/L above Delhi.',
  },
  kerala: {
    state: 'Kerala',
    vatPetrol: '30.08% + ₹1/L + 1% cess + ₹2/L SSC',
    vatDiesel: '22.76% + ₹1/L + 1% cess + ₹2/L SSC',
    depot: 'Kochi refinery + Irumpanam / Feroke terminals',
    driver:
      'Kochi refinery is local, but the stacked cesses (₹3/L+ before VAT) make Kerala one of the three costliest states for petrol.',
  },
  'madhya-pradesh': {
    state: 'Madhya Pradesh',
    vatPetrol: '29% VAT + ₹2.50/L + 1% cess',
    vatDiesel: '19% VAT + ₹1.50/L + 1% cess',
    depot: 'Bina refinery + Indore / Bhopal terminals',
    driver:
      'Bina refinery shortened freight, but 29% + extras keeps Bhopal and Indore petrol among central India\'s dearest.',
  },
  maharashtra: {
    state: 'Maharashtra',
    vatPetrol: '25% VAT + ₹5.12/L additional tax',
    vatDiesel: '21% VAT',
    depot: 'Mumbai + Nagpur / Pune terminals; Uran–Trombay belt',
    driver:
      'The famous Mumbai premium: 25% VAT plus a flat ₹5.12/L surcharge no other metro pays. That surcharge alone is half the Delhi gap.',
  },
  manipur: {
    state: 'Manipur',
    vatPetrol: '25% VAT',
    vatDiesel: '13.5% VAT',
    depot: 'Numaligarh refinery via Dimapur, trucked over NH-2',
    driver:
      'Steep petrol VAT plus the longest overland haul in the Northeast — Imphal prices swing hard whenever highway movement stalls.',
  },
  meghalaya: {
    state: 'Meghalaya',
    vatPetrol: '13.5% or ₹13.50/L + pollution surcharge',
    vatDiesel: '5% or ₹9.50/L + pollution surcharge',
    depot: 'Guwahati refinery, short hop to Shillong',
    driver:
      'Among India\'s lowest diesel taxes — Shillong diesel regularly undercuts Guwahati despite the border in between.',
  },
  mizoram: {
    state: 'Mizoram',
    vatPetrol: '18% + ₹2,000/KL infra + ₹2,000/KL road cess',
    vatDiesel: '10% + ₹2,000/KL infra + ₹2,000/KL road cess',
    depot: 'Assam refineries via Silchar, long hill haul',
    driver:
      'Modest VAT but twin ₹2/L cesses plus Aizawl\'s remoteness — freight matters more here than tax.',
  },
  nagaland: {
    state: 'Nagaland',
    vatPetrol: '21.75% or ₹16.94/L, whichever is higher',
    vatDiesel: '17.20% or ₹12.83/L, whichever is higher',
    depot: 'Numaligarh refinery via Dimapur depot',
    driver:
      'Dimapur depot is close, but the high per-litre floor keeps Kohima prices sticky even when crude softens.',
  },
  odisha: {
    state: 'Odisha',
    vatPetrol: '28% VAT',
    vatDiesel: '24% VAT',
    depot: 'Paradip refinery + Sambalpur / Jatni terminals',
    driver:
      'Paradip refinery next door, yet a flat 28% VAT erases the freight advantage — Bhubaneswar tracks closer to Kolkata than to Vizag.',
  },
  pondicherry: {
    state: 'Pondicherry (legacy slug)',
    vatPetrol: '16.98% VAT',
    vatDiesel: '11.22% VAT',
    depot: 'Chennai (Ennore) terminals',
    driver: 'Legacy slug — redirected to Puducherry. Same low-tax profile as below.',
  },
  puducherry: {
    state: 'Puducherry',
    vatPetrol: '16.98% VAT',
    vatDiesel: '11.22% VAT',
    depot: 'Chennai (Ennore) terminals, short coastal run',
    driver:
      'A low-tax enclave inside high-tax Tamil Nadu — Puducherry pumps undercut Chennai by ₹4–6/L, so border hopping is routine.',
  },
  punjab: {
    state: 'Punjab',
    vatPetrol: '16.58% VAT + 10% addl. tax (≈₹14.93/L floor) + cesses',
    vatDiesel: '13.1% VAT + 10% addl. tax (≈₹10.94/L floor) + cesses',
    depot: 'Bhatinda refinery + Jalandhar terminals',
    driver:
      'Bhatinda refinery plus moderate VAT keeps Ludhiana and Amritsar cheaper than most neighbours — until the per-litre floor binds.',
  },
  rajasthan: {
    state: 'Rajasthan',
    vatPetrol: '29.04% VAT + ₹1,500/KL road cess',
    vatDiesel: '17.30% VAT + ₹1,750/KL road cess',
    depot: 'Panipat / Mathura refineries + Jaipur / Jodhpur terminals',
    driver:
      'Nearly 29% on petrol makes Jaipur one of the North\'s dearest fills; diesel is far kinder at 17.3%.',
  },
  sikkim: {
    state: 'Sikkim',
    vatPetrol: '22% VAT + ₹4,000/KL cess',
    vatDiesel: '12% VAT + ₹3,500/KL cess',
    depot: 'Siliguri terminal, trucked up NH-10',
    driver:
      'Low diesel VAT is the story here — Gangtok diesel runs far cheaper than petrol, and landslides move prices more than taxes do.',
  },
  'tamil-nadu': {
    state: 'Tamil Nadu',
    vatPetrol: '13% + ₹11.52/L',
    vatDiesel: '11% + ₹9.62/L',
    depot: 'Chennai (Manali) + Nagapattinam refineries',
    driver:
      'Low percentage, big flat chunk: ₹11.52/L on petrol means Chennai prices barely budge when crude dips — the floor dominates.',
  },
  telangana: {
    state: 'Telangana',
    vatPetrol: '35.20% VAT',
    vatDiesel: '27% VAT',
    depot: 'Malkapur / Hyderabad terminals fed from Paradip and Vizag',
    driver:
      'India\'s highest petrol VAT at 35.2% — Hyderabad routinely tops the southern charts, above even Bengaluru and Chennai.',
  },
  tripura: {
    state: 'Tripura',
    vatPetrol: '17.50% VAT + 3% road cess',
    vatDiesel: '10% VAT + 3% road cess',
    depot: 'Guwahati / Silchar corridor into Agartala',
    driver:
      'Modest taxes, awkward geography — Agartala freight via the Chicken\'s Neck adds more than the VAT does.',
  },
  'uttar-pradesh': {
    state: 'Uttar Pradesh',
    vatPetrol: '19.36% or ₹14.85/L, whichever is higher',
    vatDiesel: '17.08% or ₹10.41/L, whichever is higher',
    depot: 'Mathura refinery + Lucknow / Kanpur terminals',
    driver:
      'Mathura refinery in the middle of the state plus mid-range VAT — Lucknow tracks Delhi closely, usually ₹1–2/L apart.',
  },
  uttarakhand: {
    state: 'Uttarakhand',
    vatPetrol: '16.97% or ₹13.14/L, whichever is greater',
    vatDiesel: '17.15% or ₹10.41/L, whichever is greater',
    depot: 'Panipat / Mathura fed terminals at Haridwar / Haldwani',
    driver:
      'Similar slabs to UP with plains-to-hills freight — Dehradun runs a rupee or two above Delhi on most days.',
  },
  'west-bengal': {
    state: 'West Bengal',
    vatPetrol: '25% or ₹13.12/L + ₹1,000/KL cess (+20% addl. tax)',
    vatDiesel: '17% or ₹7.70/L + ₹1,000/KL cess (+20% addl. tax)',
    depot: 'Haldia refinery + Kolkata (Budge Budge) terminals',
    driver:
      'Haldia refinery next door can\'t beat the tax stack: 25% with a high floor plus a 20% additional levy keeps Kolkata near Mumbai levels.',
  },
};

// Why Mumbai consistently prints ₹8–10/L above Delhi for the same fuel.
export const MUMBAI_DELHI_EXPLAINER: string[] = [
  'Mumbai and Delhi buy the same base fuel from the same oil companies — the gap is almost entirely tax. Delhi charges 19.40% VAT on petrol; Maharashtra charges 25% VAT plus a flat ₹5.12 per litre additional tax that Delhi simply does not have. On a typical dealer price of around ₹60–65 a litre, that combination alone explains roughly ₹7–8 of the difference.',
  'The rest is logistics and arithmetic. VAT is ad valorem — it applies on top of base price plus central excise plus dealer commission — so every rupee of base cost gets amplified more in Mumbai than in Delhi. Delhi also sits close to the Panipat refinery with short pipeline-fed supply, while Mumbai depends on longer coastal and in-state movement that adds a small freight edge to Delhi.',
];
