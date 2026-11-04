export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconType: 'residential' | 'commercial' | 'industrial' | 'pergola';
  image: string;
  tagline: string;
  details: string;
}

export interface TechItem {
  id: string;
  name: string;
  subtitle?: string;
  image: string;
  bullets: string[];
  details: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  badgeColor: string;
  location: string;
  image: string;
  capacity: string;
  savings: string;
  unitsMonthly: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Solar',
    description: 'Save on your home electricity bills.',
    iconType: 'residential',
    image: '/assets/solar_v2/service_residential.png',
    tagline: 'Clean power for your family home',
    details: 'Custom grid-tied and hybrid rooftop solar systems engineered for Indian homes. Cut your monthly electricity expenses by up to 80% while enjoying 25 years of guaranteed panel performance.'
  },
  {
    id: 'commercial',
    title: 'Commercial Solar',
    description: 'Power your business with clean energy.',
    iconType: 'commercial',
    image: '/assets/solar_v2/service_commercial.png',
    tagline: 'High ROI solar for commercial complexes',
    details: 'Reduce operating overheads for office buildings, hospitals, and educational institutes with accelerated depreciation benefits and reliable daytime energy generation.'
  },
  {
    id: 'industrial',
    title: 'Industrial Solar',
    description: 'Large scale solutions for industries.',
    iconType: 'industrial',
    image: '/assets/solar_v2/service_industrial.png',
    tagline: 'Heavy-duty industrial rooftop arrays',
    details: 'Engineered for factories, manufacturing plants, and warehouses requiring high MW-scale capacity. Built to withstand extreme weather with remote monitoring & smart inverters.'
  },
  {
    id: 'pergola',
    title: 'Rooftop Pergolas',
    description: 'Premium solar pergolas for homes & offices.',
    iconType: 'pergola',
    image: '/assets/solar_v2/service_pergola.png',
    tagline: 'Elevated lifestyle rooftop structures',
    details: 'Architectural 8.5+ feet elevated rooftop pergolas that give you complete usable terrace space underneath while protecting your roof from heat and rain leaks.'
  }
];

export const techItems: TechItem[] = [
  {
    id: 'panels',
    name: 'Solar Panels',
    image: '/assets/solar_v2/tech_panels.png',
    bullets: [
      'High efficiency & long life',
      'Top global brands',
      '25+ years performance',
      '5-12 years warranty'
    ],
    details: 'Tier-1 Mono PERC & TOPCon bifacial solar modules with 22%+ module efficiency and 25-30 year power generation warranty.'
  },
  {
    id: 'inverters',
    name: 'Inverters',
    image: '/assets/solar_v2/tech_inverter.png',
    bullets: [
      'Reliable & smart inverters',
      'High conversion efficiency',
      'Remote monitoring',
      '5-10 years warranty'
    ],
    details: 'Smart on-grid and hybrid inverters with WiFi tracking, 98.6% peak efficiency, and IP65 weatherproof casing.'
  },
  {
    id: 'mounting',
    name: 'Mounting Structure',
    image: '/assets/solar_v2/tech_mounting.png',
    bullets: [
      'Strong & weather resistant',
      'Galvanized steel / aluminium',
      'Custom design',
      'Long life performance'
    ],
    details: 'Hot-dip galvanized steel and anodized aluminium structures designed to withstand wind gusts up to 160 km/h.'
  },
  {
    id: 'ev',
    name: 'EV Chargers',
    image: '/assets/solar_v2/tech_ev.png',
    bullets: [
      'Power your electric vehicle',
      'Fast & safe charging',
      'Smart charging options',
      'For home & commercial'
    ],
    details: 'Fast Level-2 AC home and commercial EV charging stations powered directly by clean solar power.'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'washim-5kw',
    title: '5 kW Solar System',
    type: 'Residential',
    badgeColor: 'bg-[#0284C7]',
    location: 'Washim, Maharashtra',
    image: '/assets/solar_v2/project_residential.png',
    capacity: '5 kWp On-Grid',
    savings: '₹ 5,200 / month',
    unitsMonthly: '650 kWh'
  },
  {
    id: 'pusad-50kw',
    title: '50 kW Solar Plant',
    type: 'Commercial',
    badgeColor: 'bg-[#2563EB]',
    location: 'Pusad, Maharashtra',
    image: '/assets/solar_v2/project_commercial.png',
    capacity: '50 kWp Commercial',
    savings: '₹ 48,000 / month',
    unitsMonthly: '6,200 kWh'
  },
  {
    id: 'hingoli-250kw',
    title: '250 kW Rooftop Solar',
    type: 'Industrial',
    badgeColor: 'bg-[#1E3A8A]',
    location: 'Hingoli, Maharashtra',
    image: '/assets/solar_v2/project_industrial.png',
    capacity: '250 kWp Industrial',
    savings: '₹ 2,40,000 / month',
    unitsMonthly: '31,000 kWh'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'rahul',
    quote: 'Excellent service and professional team. My electricity bill reduced by 70% within 2 months!',
    author: 'Rahul Deshmukh',
    role: 'Homeowner, Washim',
    avatar: '/assets/solar_v2/avatar_rahul.png',
    rating: 5
  },
  {
    id: 'sneha',
    quote: 'Very good installation and support. Highly recommended for commercial projects.',
    author: 'Sneha Patil',
    role: 'Business Owner, Pusad',
    avatar: '/assets/solar_v2/avatar_sneha.png',
    rating: 5
  },
  {
    id: 'amit',
    quote: 'Best solar company in the region. Quality work and great after-sales service.',
    author: 'Amit Jadhav',
    role: 'Industrial Client, Hingoli',
    avatar: '/assets/solar_v2/avatar_amit.png',
    rating: 5
  }
];

export const faqData: FAQItem[] = [
  {
    question: 'What is the cost of a solar system?',
    answer: 'The cost varies based on capacity (typically 1 kW to 10 kW for homes) and structure type. With the central PM Surya Ghar Muft Bijli Yojana subsidy of up to ₹78,000, residential rooftop solar becomes very affordable with a payback period of only 3 to 4 years.'
  },
  {
    question: 'How much can I save on electricity bills?',
    answer: 'Most customers experience a 70% to 90% reduction in their monthly electricity bills. For example, a 3 kW system generates about 360-400 units per month, saving approx ₹3,000 - ₹4,000 monthly.'
  },
  {
    question: 'Is subsidy available for solar installation?',
    answer: 'Yes! Under the PM Surya Ghar scheme, ₹30,000 is provided for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above. R. S. Bhandari handles complete application and document submission on your behalf.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Physical rooftop installation takes just 2 to 3 days. DISCOM net-metering approval, meter replacement, and subsidy disbursement typically take 2 to 4 weeks, fully managed by our team.'
  },
  {
    question: 'What is the warranty on solar panels?',
    answer: 'Our Tier-1 solar modules come with a 25-year linear power generation warranty and 10 to 12 years of comprehensive product warranty. Inverters carry 5 to 10 years of warranty.'
  }
];
