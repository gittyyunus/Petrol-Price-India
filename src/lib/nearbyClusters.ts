// Curated geographic clusters of genuine satellite and neighboring cities.
// Used to display real nearby comparisons on city pages without hallucinating
// distant towns hundreds of kilometers away.

export const NEARBY_CLUSTERS: Record<string, string[]> = {
  // Mumbai Metropolitan Region (MMR) & Pune Corridor
  mumbai: ['thane', 'navi-mumbai', 'alibag', 'pune', 'pimpri'],
  thane: ['mumbai', 'navi-mumbai', 'alibag', 'pune'],
  'navi-mumbai': ['mumbai', 'thane', 'alibag', 'pune'],
  pune: ['pimpri', 'satara', 'ahmednagar', 'mumbai', 'navi-mumbai'],
  pimpri: ['pune', 'navi-mumbai', 'mumbai', 'satara'],
  nashik: ['ahmednagar', 'dhule', 'thane', 'jalgaon'],
  nagpur: ['wardha', 'bhandara', 'amravati', 'chandrapur'],
  aurangabad: ['jalna', 'ahmednagar', 'beed', 'nashik'],
  kolhapur: ['sangli', 'satara', 'ratnagiri'],

  // Delhi NCR
  delhi: ['noida', 'gurgaon', 'ghaziabad', 'faridabad', 'greater-noida'],
  noida: ['delhi', 'ghaziabad', 'greater-noida', 'faridabad', 'gurgaon'],
  gurgaon: ['delhi', 'faridabad', 'noida', 'rewari', 'jhajjar'],
  ghaziabad: ['delhi', 'noida', 'greater-noida', 'meerut', 'faridabad'],
  faridabad: ['delhi', 'gurgaon', 'noida', 'palwal'],
  'greater-noida': ['noida', 'delhi', 'ghaziabad', 'bulandshahr'],

  // Karnataka
  bengaluru: ['ramanagara', 'chikkaballapura', 'kolar', 'tumakuru', 'mandya', 'mysore'],
  mysore: ['mandya', 'chamarajanagar', 'hassan', 'bengaluru'],
  mangalore: ['udupi', 'hassan', 'chickmagaluru'],

  // Tamil Nadu
  chennai: ['thiruvallur', 'kanchipuram', 'vellore'],
  kanchipuram: ['chennai', 'thiruvallur', 'vellore'],
  coimbatore: ['tiruppur', 'erode', 'salem', 'ooty'],
  madurai: ['dindigul', 'virudhunagar', 'sivaganga', 'theni'],
  tiruchirappalli: ['thanjavur', 'pudukkottai', 'perambalur', 'karur'],

  // Telangana & Andhra Pradesh
  hyderabad: ['sangareddy', 'mahabubnagar', 'nalgonda', 'warangal'],
  vizag: ['vizianagaram', 'srikakulam', 'kakinada'],

  // West Bengal
  kolkata: ['howrah', 'hooghly', 'barasat', 'alipore'],
  howrah: ['kolkata', 'hooghly', 'medinipur', 'tamluk'],

  // Gujarat
  ahmedabad: ['gandhinagar', 'kheda', 'anand', 'vadodara'],
  gandhinagar: ['ahmedabad', 'mehsana', 'kheda', 'himmatnagar'],
  vadodara: ['anand', 'kheda', 'bharuch', 'ahmedabad'],
  surat: ['navsari', 'bharuch'],

  // Rajasthan
  jaipur: ['dausa', 'alwar', 'ajmer', 'sikar', 'tonk'],
  ajmer: ['jaipur', 'bhilwara', 'tonk', 'nagaur'],
  jodhpur: ['pali', 'nagaur', 'barmer', 'bikaner'],

  // Uttar Pradesh
  lucknow: ['unnao', 'barabanki', 'kanpur', 'raebareli', 'sitapur'],
  kanpur: ['unnao', 'lucknow', 'fatehpur', 'auraiya'],
  varanasi: ['chandauli', 'mirzapur', 'ghazipur', 'jaunpur'],
  agra: ['mathura', 'firozabad', 'aligarh'],

  // Chandigarh & Punjab
  chandigarh: ['mohali', 'panchkula', 'ambala'],
  ludhiana: ['jalandhar', 'moga', 'patiala', 'amritsar'],
  amritsar: ['gurdaspur', 'tarn-taran-sahib', 'jalandhar', 'kapurthala'],
  jalandhar: ['amritsar', 'ludhiana', 'kapurthala', 'hoshiarpur'],

  // Kerala
  trivandrum: ['kollam', 'alappuzha', 'pathanamthitta'],
  kozhikode: ['malappuram', 'kannur', 'palakkad'],
  thrissur: ['palakkad', 'malappuram', 'kottayam', 'alappuzha'],

  // Madhya Pradesh
  indore: ['dewas', 'dhar', 'bhopal'],
  bhopal: ['raisen', 'sehore', 'hoshangabad', 'indore']
};

