export const AGENTS = [
  {
    id: 'agent-1',
    name: 'Elena Vance',
    title: 'Senior Luxury Real Estate Advisor',
    specialty: 'Luxury Waterfront & Penthouses',
    experience: '12 Years',
    phone: '+1 (555) 234-8901',
    email: 'elena.vance@primeestates.com',
    license: 'CA-DRE #01928471',
    rating: 4.96,
    reviewsCount: 142,
    salesVolume: '$185M+',
    activeListingsCount: 8,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    bio: 'Elena Vance is an esteemed luxury real estate consultant with over a decade of distinguished experience guiding high-net-worth clients, entrepreneurs, and discerning buyers across coastal California and premier metropolitan areas. She is renowned for discreet negotiations and record-breaking architectural acquisitions.',
    languages: ['English', 'Spanish', 'French'],
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    awards: ['Top Producer 2024 - 2025', 'Platinum Circle Excellence Award', 'Presidential Elite Realtor']
  },
  {
    id: 'agent-2',
    name: 'Marcus Sterling',
    title: 'Executive Vice President of Sales',
    specialty: 'Architectural Modern & Modern Mansions',
    experience: '15 Years',
    phone: '+1 (555) 876-5432',
    email: 'marcus.sterling@primeestates.com',
    license: 'NY-RE #40291845',
    rating: 4.98,
    reviewsCount: 198,
    salesVolume: '$240M+',
    activeListingsCount: 11,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    bio: 'Specializing in trophy residential assets and prime architectural residences, Marcus has forged an impeccable reputation for analytical market foresight, confidential advisory, and bespoke client services across Manhattan and the West Coast.',
    languages: ['English', 'German'],
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    awards: ['Icon Award - $200M+ Milestone', 'Who\'s Who in Luxury Real Estate', 'Wall Street Real Estate Leaders']
  },
  {
    id: 'agent-3',
    name: 'Sophia Chen',
    title: 'Residential & Investment Specialist',
    specialty: 'Modern Condominiums & New Developments',
    experience: '8 Years',
    phone: '+1 (555) 432-1098',
    email: 'sophia.chen@primeestates.com',
    license: 'FL-RE #32091482',
    rating: 4.92,
    reviewsCount: 89,
    salesVolume: '$95M+',
    activeListingsCount: 6,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    bio: 'Sophia blends analytical market acumen with an exceptional eye for interior potential. She assists both first-time luxury homebuyers and seasoned international investors seeking strong yield appreciation in vibrant coastal developments.',
    languages: ['English', 'Mandarin', 'Cantonese'],
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    awards: ['Rising Star Award 2023', 'Top 40 Under 40 Realtors']
  },
  {
    id: 'agent-4',
    name: 'David Reynolds',
    title: 'Historic Estates & Equestrian Specialist',
    specialty: 'Ranch Estates, Suburban Mansions & Land',
    experience: '18 Years',
    phone: '+1 (555) 654-3210',
    email: 'david.reynolds@primeestates.com',
    license: 'TX-TREC #04821903',
    rating: 4.95,
    reviewsCount: 164,
    salesVolume: '$210M+',
    activeListingsCount: 7,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    bio: 'With deep roots in Texas and the Southwest, David brings comprehensive knowledge of expansive ranch properties, private retreats, and historic landmark properties with custom zoning and land management expertise.',
    languages: ['English'],
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    awards: ['Heritage Realtor of the Year', 'Hall of Fame Realtor']
  }
];

export const PROPERTIES = [
  {
    id: 'prop-1',
    title: 'The Azure Horizon Villa',
    tagline: 'Panoramic Pacific Ocean views with seamless indoor-outdoor living',
    type: 'Villa',
    status: 'For Sale',
    price: 4850000,
    priceFormatted: '$4,850,000',
    address: '2840 Pacific Coast Highway',
    city: 'Malibu',
    state: 'CA',
    zip: '90265',
    beds: 5,
    baths: 6,
    sqft: 6400,
    lotSize: '0.85 Acres',
    yearBuilt: 2022,
    garage: 3,
    featured: true,
    agentId: 'agent-1',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Commanding unmatched panoramic vistas of the Pacific Ocean, The Azure Horizon Villa represents the pinnacle of contemporary coastal luxury. Floor-to-ceiling motorized Fleetwood glass pocket doors create effortless transition from the Italian marble great room to an infinity-edge heated pool and cantilevered deck.\n\nCrafted with hand-honed European oak flooring, custom Dada Molteni kitchen cabinetry, Sub-Zero & Wolf gourmet appliances, and an automated Lutron lighting and Sonos acoustic environment. The master suite features dual spa bathrooms, steam showers, and a private wraparound sunset balcony.',
    highlights: [
      'Infinity edge saltwater heated pool with Baja tanning shelf',
      'Temperature-controlled 650-bottle sommelier wine cellar',
      'Private 10-seat Dolby Atmos acoustic screening room',
      'Integrated solar battery storage and smart Lutron automation',
      'Gated private motor court with 3-car subterranean garage',
      'Direct private trail access down to secluded beach cove'
    ],
    amenities: [
      'Swimming Pool',
      'Ocean View',
      'Smart Home',
      'Wine Cellar',
      'Home Theater',
      'Garage Parking',
      'Central AC',
      'Fireplace',
      'Security System',
      'Gym'
    ],
    propertyTax: 24500,
    hoaFee: 450,
    walkScore: 68,
    transitScore: 54
  },
  {
    id: 'prop-2',
    title: 'The Skyview Glass Penthouse',
    tagline: 'Ultra-luxury duplex penthouse soaring above Central Park',
    type: 'Penthouse',
    status: 'For Sale',
    price: 8900000,
    priceFormatted: '$8,900,000',
    address: '432 Park Avenue, Penthouse 72B',
    city: 'New York',
    state: 'NY',
    zip: '10022',
    beds: 4,
    baths: 5,
    sqft: 5200,
    lotSize: 'N/A',
    yearBuilt: 2021,
    garage: 2,
    featured: true,
    agentId: 'agent-2',
    images: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched over 800 feet above the Manhattan skyline, this architectural masterpiece captures breathtaking 360-degree views stretching across Central Park, the Hudson River, and the East River.\n\nBoasting 14-foot ceiling heights, private key-locked elevator access, solid chevron white oak floors, and a sweeping sculptural bronze staircase. The chef’s kitchen is furnished with Calacatta Gold marble waterfall islands, dual Miele dishwashers, and Gaggenau induction suites. Residents benefit from 24/7 white-glove concierge, private chauffeur service, private dining room, and an indoor 75-foot lap pool.',
    highlights: [
      'Private key-locked high-speed elevator opening to private gallery',
      '1,200 sq.ft. private wraparound terrace facing Central Park',
      'Custom Boffi designer kitchen with marble waterfall island',
      'White-glove 24-hour doorman, concierge, and valet parking',
      'Building wellness sanctuary: sauna, steam room & 75-ft pool'
    ],
    amenities: [
      'City View',
      'Balcony',
      'Concierge',
      'Elevator',
      'Gym',
      'Central AC',
      'Smart Home',
      'Security System',
      'Hardwood Floors'
    ],
    propertyTax: 42000,
    hoaFee: 3100,
    walkScore: 99,
    transitScore: 100
  },
  {
    id: 'prop-3',
    title: 'The Palms Modern Villa',
    tagline: 'Private sanctuary with lush tropical landscape and lap pool',
    type: 'Villa',
    status: 'For Sale',
    price: 3650000,
    priceFormatted: '$3,650,000',
    address: '420 Venetian Way',
    city: 'Miami',
    state: 'FL',
    zip: '33139',
    beds: 4,
    baths: 4.5,
    sqft: 4800,
    lotSize: '0.45 Acres',
    yearBuilt: 2023,
    garage: 2,
    featured: true,
    agentId: 'agent-3',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Infused with warm minimalism and Miami tropical serenity, this brand-new architectural residence on the Venetian Islands offers tranquil indoor-outdoor lifestyle with direct water breezes.\n\nExpansive open-concept living quarters feature floor-to-ceiling hurricane impact glass, terrazzo flooring, custom Italian kitchen, and an exterior summer kitchen with wood-fired pizza oven and gas grill. The lushly landscaped grounds feature mature palms, heated plunge pool, and outdoor rain showers.',
    highlights: [
      'Private heated saltwater lap pool and sun lounge deck',
      'Full outdoor summer kitchen with Lynx barbecue and wood oven',
      'Smart home climate, security, and multi-zone sound control',
      'Hurricane impact-rated floor-to-ceiling glass systems',
      'Gated security perimeter with camera surveillance'
    ],
    amenities: [
      'Swimming Pool',
      'Garden',
      'Smart Home',
      'Outdoor Kitchen',
      'Garage Parking',
      'Security System',
      'Central AC'
    ],
    propertyTax: 19800,
    hoaFee: 220,
    walkScore: 84,
    transitScore: 68
  },
  {
    id: 'prop-4',
    title: 'The Highland Forest Modernist Estate',
    tagline: 'Secluded architectural masterpiece nestled in private wooded grounds',
    type: 'House',
    status: 'For Sale',
    price: 2790000,
    priceFormatted: '$2,790,000',
    address: '1420 Barton Creek Boulevard',
    city: 'Austin',
    state: 'TX',
    zip: '78735',
    beds: 5,
    baths: 5,
    sqft: 5800,
    lotSize: '1.4 Acres',
    yearBuilt: 2022,
    garage: 3,
    featured: true,
    agentId: 'agent-4',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set on nearly 1.5 secluded acres in the prestigious Barton Creek enclave, this modern architectural sanctuary balances raw limestone, blackened steel, and warm cedar elements.\n\nThe residence showcases 22-foot soaring beamed ceilings, bespoke double fireplace, dedicated home office with private entrance, and a state-of-the-art gym. Outside, the zero-edge pool gazes onto protected greenbelt forest.',
    highlights: [
      'Private 1.4-acre lot bordering protected Hill Country preserve',
      'Custom black steel architectural fireplace in great room',
      'Spacious home office and separate executive conference studio',
      'Three-car garage with dual Level-2 EV charging stations',
      'Negative-edge swimming pool overlooking scenic rolling hills'
    ],
    amenities: [
      'Swimming Pool',
      'EV Charger',
      'Home Office',
      'Fireplace',
      'Gym',
      'Garage Parking',
      'Central AC',
      'Garden'
    ],
    propertyTax: 21500,
    hoaFee: 180,
    walkScore: 42,
    transitScore: 30
  },
  {
    id: 'prop-5',
    title: 'The Tribeca Loft Residence',
    tagline: 'Historic cast-iron loft with soaring ceilings and artistic elegance',
    type: 'Apartment',
    status: 'For Rent',
    price: 14500,
    priceFormatted: '$14,500 / mo',
    address: '88 Franklin Street, 4th Floor',
    city: 'New York',
    state: 'NY',
    zip: '10013',
    beds: 3,
    baths: 2.5,
    sqft: 2900,
    lotSize: 'N/A',
    yearBuilt: 2019,
    garage: 0,
    featured: false,
    agentId: 'agent-2',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An authentic Tribeca architectural loft in an iconic 19th-century cast-iron building. Retaining preserved Corinthian cast-iron columns, exposed brick walls, and oversized South-facing sash windows that flood the wide-open living hall with natural sunlight.\n\nEquipped with a custom Poliform kitchen, honed granite worktops, custom walk-in dressing suites, and in-unit washer/dryer. Building amenities include a keyed elevator, package room, and private storage room.',
    highlights: [
      '13-foot authentic beamed timber and tin ceilings',
      'Original exposed brickwork and restored cast-iron columns',
      'Keyed elevator opening directly into the private loft foyer',
      'Primary retreat with freestanding soaking tub & dual rain showers'
    ],
    amenities: [
      'Elevator',
      'Hardwood Floors',
      'Central AC',
      'Security System',
      'Dishwasher',
      'Pet Friendly'
    ],
    propertyTax: 0,
    hoaFee: 0,
    walkScore: 98,
    transitScore: 100
  },
  {
    id: 'prop-6',
    title: 'Beverly Hills Contemporary Oasis',
    tagline: 'Modern marvel with screening room, wine gallery, and infinity pool',
    type: 'Villa',
    status: 'For Sale',
    price: 6490000,
    priceFormatted: '$6,490,000',
    address: '9120 Loma Vista Drive',
    city: 'Beverly Hills',
    state: 'CA',
    zip: '90210',
    beds: 6,
    baths: 7,
    sqft: 7200,
    lotSize: '0.6 Acres',
    yearBuilt: 2023,
    garage: 3,
    featured: true,
    agentId: 'agent-1',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A striking statement of contemporary architecture in the prestigious Trousdale Estates. Featuring organic warm stone textures, museum-grade art walls, automated glass walls, and a dramatic cantilevered master suite.\n\nStep outdoors into a zero-edge reflection pool, sunken fire lounge, and curated drought-tolerant botanical gardens with mature olive trees and skyline views over Los Angeles.',
    highlights: [
      'Trousdale Estates coveted location with complete privacy',
      'Sunken outdoor conversation lounge with fire pit',
      'Museum-grade wall lighting and climate precision control',
      'Chef and secondary prep kitchen with walk-in pantry'
    ],
    amenities: [
      'Swimming Pool',
      'Fireplace',
      'Smart Home',
      'Wine Cellar',
      'Home Theater',
      'Gym',
      'Garage Parking',
      'Security System'
    ],
    propertyTax: 32000,
    hoaFee: 320,
    walkScore: 60,
    transitScore: 48
  },
  {
    id: 'prop-7',
    title: 'Emerald Bay Luxury Beachside Townhouse',
    tagline: 'Step directly onto golden sands with breathtaking ocean panoramas',
    type: 'Townhouse',
    status: 'For Sale',
    price: 2450000,
    priceFormatted: '$2,450,000',
    address: '310 Ocean Boulevard',
    city: 'San Diego',
    state: 'CA',
    zip: '92109',
    beds: 3,
    baths: 3.5,
    sqft: 2850,
    lotSize: 'N/A',
    yearBuilt: 2021,
    garage: 2,
    featured: false,
    agentId: 'agent-1',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Direct beachfront living in Pacific Beach with your own private rooftop terrace and outdoor jacuzzi. Watch dolphins frolic in the surf from your breakfast nook or unwind as the sun dips below the Pacific.\n\nFeatures private 2-car garage with surfboard racks, private elevator across all 3 levels, and smart security integration.',
    highlights: [
      'Rooftop entertainment deck with private spa and gas fire lounge',
      'Internal private glass elevator serving all three levels',
      'Direct private boardwalk access steps from sandy beach'
    ],
    amenities: [
      'Ocean View',
      'Balcony',
      'Elevator',
      'Garage Parking',
      'Central AC',
      'Fireplace'
    ],
    propertyTax: 16500,
    hoaFee: 380,
    walkScore: 92,
    transitScore: 62
  },
  {
    id: 'prop-8',
    title: 'The Brickell Bayfront Condominium',
    tagline: 'High-floor corner residence overlooking Biscayne Bay',
    type: 'Apartment',
    status: 'For Rent',
    price: 8800,
    priceFormatted: '$8,800 / mo',
    address: '1421 Brickell Avenue, Unit 4502',
    city: 'Miami',
    state: 'FL',
    zip: '33131',
    beds: 2,
    baths: 2.5,
    sqft: 1850,
    lotSize: 'N/A',
    yearBuilt: 2022,
    garage: 1,
    featured: false,
    agentId: 'agent-3',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Immerse yourself in Miami’s vibrant financial district with turquoise bay and skyline vistas. Corner layout with wraparound deep terrace, high-end Italian finishes, quartz countertops, and smart shades.\n\nFive-star tower amenities include a rooftop infinity pool, full-service spa, Equinox-grade fitness center, and marina slips.',
    highlights: [
      'Expansive 400 sq.ft. corner terrace with Biscayne Bay outlook',
      'Tower amenities: 3 pools, private cinema room & fitness club',
      'Valet parking and 24/7 security concierge'
    ],
    amenities: [
      'Ocean View',
      'Swimming Pool',
      'Gym',
      'Concierge',
      'Balcony',
      'Elevator',
      'Central AC'
    ],
    propertyTax: 0,
    hoaFee: 0,
    walkScore: 95,
    transitScore: 82
  },
  {
    id: 'prop-9',
    title: 'Pine Ridge Contemporary Craftsman',
    tagline: 'Modern warmth and luxury nestled in tranquil Seattle woods',
    type: 'House',
    status: 'For Sale',
    price: 1890000,
    priceFormatted: '$1,890,000',
    address: '710 Magnolia Boulevard',
    city: 'Seattle',
    state: 'WA',
    zip: '98199',
    beds: 4,
    baths: 3.5,
    sqft: 3600,
    lotSize: '0.35 Acres',
    yearBuilt: 2021,
    garage: 2,
    featured: false,
    agentId: 'agent-4',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Nestled in Seattle’s picturesque Magnolia neighborhood, this custom residence blends Pacific Northwest organic cedar with Scandinavian crisp design. Bright airy interiors, radiant heated floors, and a private rear garden oasis.\n\nWalkable to Discovery Park and Magnolia Village shopping.',
    highlights: [
      'Hydronic radiant heated white oak floors throughout',
      'Chef kitchen with dual convection ovens and walk-in pantry',
      'Landscaped private courtyard with covered heated cedar patio'
    ],
    amenities: [
      'Garden',
      'Fireplace',
      'Garage Parking',
      'EV Charger',
      'Central AC',
      'Hardwood Floors'
    ],
    propertyTax: 14200,
    hoaFee: 0,
    walkScore: 78,
    transitScore: 65
  },
  {
    id: 'prop-10',
    title: 'The Bel Air Grand Manor',
    tagline: 'Unparalleled privacy, sprawling lawns, and classic modern grandeur',
    type: 'Villa',
    status: 'For Sale',
    price: 11500000,
    priceFormatted: '$11,500,000',
    address: '10450 Bellagio Road',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90077',
    beds: 7,
    baths: 9,
    sqft: 9800,
    lotSize: '1.2 Acres',
    yearBuilt: 2023,
    garage: 4,
    featured: true,
    agentId: 'agent-1',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set behind double security gates in prime Lower Bel Air, this estate represents the epitome of world-class living. Features tennis court, subterranean wellness center, sauna, cold plunge, wine tasting pavilion, and championship-size pool.',
    highlights: [
      'Championship regulation tennis court with lights',
      'Subterranean wellness spa: Finnish sauna, cold plunge & steam room',
      'Two-story library with custom bronze spiral staircase'
    ],
    amenities: [
      'Swimming Pool',
      'Gym',
      'Wine Cellar',
      'Home Theater',
      'Smart Home',
      'Fireplace',
      'Garage Parking',
      'Security System'
    ],
    propertyTax: 56000,
    hoaFee: 500,
    walkScore: 35,
    transitScore: 20
  },
  {
    id: 'prop-11',
    title: 'The SoHo Designer Studio & Loft',
    tagline: 'Turnkey luxury pied-à-terre with custom Italian millwork',
    type: 'Studio',
    status: 'For Rent',
    price: 6200,
    priceFormatted: '$6,200 / mo',
    address: '450 Broome Street, 3B',
    city: 'New York',
    state: 'NY',
    zip: '10013',
    beds: 1,
    baths: 1,
    sqft: 950,
    lotSize: 'N/A',
    yearBuilt: 2020,
    garage: 0,
    featured: false,
    agentId: 'agent-2',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An exquisitely curated designer loft in central SoHo. Floor-to-ceiling custom walnut storage, hidden workspace, Murphy bed system by Clei, and designer bathroom with Dornbracht matte black fixtures.',
    highlights: [
      'Bespoke Clei architectural transforming millwork',
      'Motorized acoustic black-out shades',
      'Steps to top dining, designer boutiques, and cultural spots'
    ],
    amenities: [
      'Elevator',
      'Hardwood Floors',
      'Central AC',
      'Security System',
      'City View'
    ],
    propertyTax: 0,
    hoaFee: 0,
    walkScore: 100,
    transitScore: 100
  },
  {
    id: 'prop-12',
    title: 'Sonoma Valley Vineyard Residence',
    tagline: 'Private modern ranch surrounded by 4 acres of Pinot Noir vines',
    type: 'House',
    status: 'For Sale',
    price: 3950000,
    priceFormatted: '$3,950,000',
    address: '5820 Warm Springs Road',
    city: 'Sonoma',
    state: 'CA',
    zip: '95476',
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    lotSize: '4.2 Acres',
    yearBuilt: 2022,
    garage: 3,
    featured: true,
    agentId: 'agent-4',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Immerse yourself in world-class wine country living. Featuring private producing vineyard, temperature controlled barrel storage, modern barn architecture with 20-foot glass walls, and bocce court.',
    highlights: [
      'Active producing Pinot Noir vineyard with vineyard management contract',
      'Private wine tasting lounge with panoramic vineyard views',
      'Heated pool, covered outdoor kitchen, and bocce ball court'
    ],
    amenities: [
      'Swimming Pool',
      'Garden',
      'Wine Cellar',
      'Fireplace',
      'Garage Parking',
      'EV Charger',
      'Central AC'
    ],
    propertyTax: 27500,
    hoaFee: 0,
    walkScore: 25,
    transitScore: 15
  }
];

export const CITIES = [
  {
    name: 'New York',
    state: 'NY',
    propertiesCount: '1,420+ Listings',
    avgPrice: '$2.8M',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Los Angeles',
    state: 'CA',
    propertiesCount: '980+ Listings',
    avgPrice: '$3.4M',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Miami',
    state: 'FL',
    propertiesCount: '850+ Listings',
    avgPrice: '$1.9M',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Austin',
    state: 'TX',
    propertiesCount: '620+ Listings',
    avgPrice: '$1.4M',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Seattle',
    state: 'WA',
    propertiesCount: '540+ Listings',
    avgPrice: '$1.6M',
    image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'San Diego',
    state: 'CA',
    propertiesCount: '490+ Listings',
    avgPrice: '$2.1M',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Victoria & Arthur Montgomery',
    role: 'Venture Capital Partner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    property: 'Purchased Villa in Malibu ($4.85M)',
    rating: 5,
    quote: 'Elena and the PrimeEstates team made purchasing our dream coastal sanctuary seamless and discreet. Their knowledge of off-market trophy assets gave us an unmatched advantage.'
  },
  {
    id: 'test-2',
    name: 'Jonathan Reynolds',
    role: 'Tech Executive & Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    property: 'Acquired Penthouse in Manhattan ($8.9M)',
    rating: 5,
    quote: 'Marcus Sterling provided institutional-grade analysis on Manhattan property values. The transaction was effortless from contract review to white-glove closing.'
  },
  {
    id: 'test-3',
    name: 'Camila Rodriguez',
    role: 'Interior Designer & Investor',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    property: 'Sold Venetian Islands Waterfront ($3.6M)',
    rating: 5,
    quote: 'Sophia Chen marketed our home with cinema-grade photography and international exposure. We received multiple offers within 14 days and closed above asking price!'
  }
];

export const FAQS = [
  {
    question: 'How do I schedule a private property viewing?',
    answer: 'You can easily request an in-person or live virtual walk-through directly on any property details page using the "Schedule a Tour" feature. Our dedicated listing agent will confirm your appointment within 2 business hours.'
  },
  {
    question: 'What are the typical closing costs when purchasing a luxury estate?',
    answer: 'Closing costs typically vary between 2% and 5% of the purchase price depending on the state, city transfer taxes, escrow fees, and title insurance. Our mortgage and financial calculator provides an estimated breakdown.'
  },
  {
    question: 'Can PrimeEstates assist international buyers?',
    answer: 'Yes! Over 35% of our clientele resides internationally. Our multilingual advisors coordinate with international tax attorneys, cross-border banking partners, and title firms to ensure frictionless acquisition.'
  },
  {
    question: 'How do I list my property with PrimeEstates?',
    answer: 'You can reach out through our Contact page or click "List Property" in the top navigation. One of our Senior Advisors will provide a confidential comparative market valuation (CMA) and bespoke marketing strategy.'
  },
  {
    question: 'Are all property listings on PrimeEstates verified?',
    answer: 'Every property listed on PrimeEstates undergoes strict title verification, zoning audit, and professional photographic inspection by our advisory committee before being published.'
  }
];
