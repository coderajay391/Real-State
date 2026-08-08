/* ==========================================================================
   Modern Real Estate Website - Properties Dataset
   Central Data Source for Properties & Agents
   ========================================================================== */

export const propertiesData = [
  {
    id: 1,
    title: "Grand Azure Sunset Villa",
    type: "Villa",
    status: "For Sale",
    price: "$2,850,000",
    priceValue: 2850000,
    address: "742 Evergreen Terrace, Beverly Hills",
    city: "Los Angeles",
    bedrooms: 5,
    bathrooms: 6,
    area: 5800,
    builtYear: 2023,
    garage: 3,
    featured: true,
    latest: true,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An extraordinary modern architectural masterpiece situated in prestigious Beverly Hills. Featuring panoramic ocean-to-city views, an infinity swimming pool, glass walls, motorized solar shades, custom Italian cabinetry, and a temperature-controlled wine room. Designed for ultimate luxury living.",
    amenities: [
      "Infinity Pool", "Smart Home Automation", "Private Gym", "24/7 Security",
      "Wine Cellar", "Home Theater", "EV Charging Station", "Landscaped Garden"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "Beverly Hills High School (0.8 miles)",
      hospitals: "Cedars-Sinai Medical Center (1.5 miles)",
      shopping: "Rodeo Drive Shopping Center (1.0 miles)",
      airport: "Los Angeles International Airport (14 miles)"
    },
    agent: {
      id: 101,
      name: "Sophia Martinez",
      role: "Luxury Property Specialist",
      phone: "+1 (310) 892-3341",
      email: "sophia.m@realestate.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      experience: "8+ Years",
      rating: 4.9,
      propertiesCount: 24
    }
  },
  {
    id: 2,
    title: "Skyline Glass Penthouse",
    type: "Apartment",
    status: "For Sale",
    price: "$1,950,000",
    priceValue: 1950000,
    address: "100 West 57th Street, Midtown",
    city: "New York",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3200,
    builtYear: 2022,
    garage: 2,
    featured: true,
    latest: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Breathtaking full-floor penthouse offering 360-degree skyline views of Manhattan and Central Park. Features soaring 12ft ceilings, floor-to-ceiling soundproof triple-pane windows, state-of-the-art chef's kitchen, and a private elevator foyer.",
    amenities: [
      "Concierge Service", "Rooftop Terrace", "Private Elevator", "Valet Parking",
      "Fitness Center", "Sauna & Spa", "Pet Spa", "Storage Unit"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "St. Bernard's School (0.5 miles)",
      hospitals: "NewYork-Presbyterian Hospital (1.2 miles)",
      shopping: "Fifth Avenue Shops (0.3 miles)",
      airport: "LaGuardia Airport (9 miles)"
    },
    agent: {
      id: 102,
      name: "Marcus Vance",
      role: "Senior Real Estate Broker",
      phone: "+1 (212) 555-0192",
      email: "marcus.vance@realestate.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      experience: "12+ Years",
      rating: 5.0,
      propertiesCount: 42
    }
  },
  {
    id: 3,
    title: "Pacific Horizon Waterfront Estate",
    type: "Luxury Home",
    status: "For Sale",
    price: "$4,500,000",
    priceValue: 4500000,
    address: "2480 Ocean Drive, Malibu",
    city: "Los Angeles",
    bedrooms: 6,
    bathrooms: 7,
    area: 7200,
    builtYear: 2024,
    garage: 4,
    featured: true,
    latest: false,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Direct beachfront modern compound in Malibu. Floor-to-ceiling glass doors slide seamlessly into walls to blend indoor and outdoor living with ocean waves crashing below. Features private stairs down to sandy beach, outdoor kitchen, fire pits, and guest guesthouse.",
    amenities: [
      "Direct Beach Access", "Heated Pool & Spa", "Guest House", "Outdoor Kitchen",
      "Solar Power", "Smart Security", "Steam Room", "Wine Room"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "Malibu High School (1.1 miles)",
      hospitals: "UCLA Health Malibu (2.0 miles)",
      shopping: "Malibu Country Mart (1.4 miles)",
      airport: "LAX Airport (22 miles)"
    },
    agent: {
      id: 101,
      name: "Sophia Martinez",
      role: "Luxury Property Specialist",
      phone: "+1 (310) 892-3341",
      email: "sophia.m@realestate.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      experience: "8+ Years",
      rating: 4.9,
      propertiesCount: 24
    }
  },
  {
    id: 4,
    title: "Apex Innovation Tech Office HQ",
    type: "Office",
    status: "For Rent",
    price: "$18,500/mo",
    priceValue: 18500,
    address: "450 Mission Street, SoMa",
    city: "San Francisco",
    bedrooms: 0,
    bathrooms: 4,
    area: 6500,
    builtYear: 2021,
    garage: 10,
    featured: false,
    latest: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Plug-and-play modern corporate tech workspace in the heart of SoMa, San Francisco. Open-plan design, soundproof conference pods, executive boardrooms, commercial coffee bar, fiber internet wiring, and rooftop deck.",
    amenities: [
      "High-Speed Fiber", "Conference Rooms", "24/7 Access", "Security Patrol",
      "Keycard Entry", "Cafe Kitchenette", "EV Parking", "Bike Storage"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "San Francisco University (2.1 miles)",
      hospitals: "UCSF Medical Center (1.8 miles)",
      shopping: "Westfield SF Center (0.4 miles)",
      airport: "SFO Airport (13 miles)"
    },
    agent: {
      id: 103,
      name: "David Chen",
      role: "Commercial & Office Advisory",
      phone: "+1 (415) 882-9901",
      email: "david.c@realestate.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      experience: "10+ Years",
      rating: 4.8,
      propertiesCount: 18
    }
  },
  {
    id: 5,
    title: "Serene Alpine Mountain Chalet",
    type: "Villa",
    status: "For Sale",
    price: "$1,680,000",
    priceValue: 1680000,
    address: "312 Pines Trail, Aspen",
    city: "Denver",
    bedrooms: 4,
    bathrooms: 4,
    area: 4100,
    builtYear: 2021,
    garage: 2,
    featured: true,
    latest: false,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Rustic luxury mountain retreat with ski-in/ski-out access in Aspen. Exposed cedar beams, stone wood-burning hearth, outdoor cedar hot tub, custom boot warmer room, and floor-to-ceiling windows overlooking snow-capped peaks.",
    amenities: [
      "Ski-in / Ski-out", "Cedar Hot Tub", "Wood Hearth", "Heated Floors",
      "Game Room", "Boot Warmer Locker", "Mountain Views", "Garage Storage"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "Aspen Middle School (1.5 miles)",
      hospitals: "Aspen Valley Hospital (2.3 miles)",
      shopping: "Aspen Town Plaza (1.0 miles)",
      airport: "Aspen-Pitkin County Airport (5 miles)"
    },
    agent: {
      id: 104,
      name: "Elena Rostova",
      role: "Resort & Mountain Property Lead",
      phone: "+1 (970) 412-8822",
      email: "elena.r@realestate.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      experience: "7+ Years",
      rating: 4.9,
      propertiesCount: 15
    }
  },
  {
    id: 6,
    title: "Urban Loft in Arts District",
    type: "Apartment",
    status: "For Rent",
    price: "$4,200/mo",
    priceValue: 4200,
    address: "820 East 3rd St, Arts District",
    city: "Los Angeles",
    bedrooms: 2,
    bathrooms: 2,
    area: 1850,
    builtYear: 2020,
    garage: 1,
    featured: false,
    latest: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Industrial chic loft with exposed brick, soaring timber ceilings, polished concrete floors, and designer stainless steel island kitchen. Situated steps from top cafes, galleries, and dining in Downtown LA.",
    amenities: [
      "Exposed Brick", "Polished Concrete", "In-Unit Laundry", "Rooftop Pool",
      "Dog Park", "Gated Parking", "EV Chargers", "Balcony"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "Metropolitan High School (0.6 miles)",
      hospitals: "Good Samaritan Hospital (1.9 miles)",
      shopping: "Little Tokyo Galleria (0.5 miles)",
      airport: "LAX Airport (16 miles)"
    },
    agent: {
      id: 102,
      name: "Marcus Vance",
      role: "Senior Real Estate Broker",
      phone: "+1 (212) 555-0192",
      email: "marcus.vance@realestate.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      experience: "12+ Years",
      rating: 5.0,
      propertiesCount: 42
    }
  },
  {
    id: 7,
    title: "Metropolitan Retail Center",
    type: "Commercial",
    status: "For Sale",
    price: "$3,400,000",
    priceValue: 3400000,
    address: "1200 Brickell Avenue, Financial District",
    city: "Miami",
    bedrooms: 0,
    bathrooms: 6,
    area: 8900,
    builtYear: 2022,
    garage: 15,
    featured: false,
    latest: true,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Prime commercial retail investment opportunity located in Miami's bustling Brickell district. Currently fully leased with triple-net (NNN) tenants including gourmet dining and boutique fitness.",
    amenities: [
      "Prime Street Frontage", "High Foot Traffic", "Valet Parking Structure",
      "Loading Dock", "Security System", "Commercial Kitchen Hookups"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "Miami Senior High (1.8 miles)",
      hospitals: "Mercy Hospital (2.0 miles)",
      shopping: "Brickell City Centre (0.2 miles)",
      airport: "Miami International Airport (7 miles)"
    },
    agent: {
      id: 103,
      name: "David Chen",
      role: "Commercial & Office Advisory",
      phone: "+1 (415) 882-9901",
      email: "david.c@realestate.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      experience: "10+ Years",
      rating: 4.8,
      propertiesCount: 18
    }
  },
  {
    id: 8,
    title: "Oak Ridge Scenic Development Parcel",
    type: "Land",
    status: "For Sale",
    price: "$890,000",
    priceValue: 890000,
    address: "Lot 14 Whispering Pines Rd",
    city: "Austin",
    bedrooms: 0,
    bathrooms: 0,
    area: 125000, // ~2.8 acres
    builtYear: 2025,
    garage: 0,
    featured: false,
    latest: false,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "2.8 acres of pristine buildable hill country land in West Austin. Utilities already connected at property line, approved residential architectural permits for modern estate villa. Breathtaking sunset topography views.",
    amenities: [
      "Utilities Ready", "Topography Survey Done", "Gated Entry Option",
      "Oak Trees Native", "Paved Road Access", "No HOA Restriction"
    ],
    floorPlanImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    nearby: {
      schools: "Eanes ISD Schools (1.2 miles)",
      hospitals: "St. David's Medical (3.5 miles)",
      shopping: "Barton Creek Square (2.8 miles)",
      airport: "Austin-Bergstrom Airport (18 miles)"
    },
    agent: {
      id: 104,
      name: "Elena Rostova",
      role: "Resort & Mountain Property Lead",
      phone: "+1 (970) 412-8822",
      email: "elena.r@realestate.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      experience: "7+ Years",
      rating: 4.9,
      propertiesCount: 15
    }
  }
];

export const categoriesData = [
  { id: "Apartments", name: "Apartments", icon: "fa-building", count: "120+ Listings", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" },
  { id: "Villas", name: "Villas", icon: "fa-house-chimney-window", count: "85+ Listings", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80" },
  { id: "Commercial", name: "Commercial", icon: "fa-store", count: "45+ Listings", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
  { id: "Office", name: "Office Spaces", icon: "fa-briefcase", count: "60+ Listings", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
  { id: "Land", name: "Land & Plots", icon: "fa-vector-square", count: "30+ Listings", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" },
  { id: "Luxury Homes", name: "Luxury Homes", icon: "fa-gem", count: "95+ Listings", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" }
];

export const agentsData = [
  {
    id: 101,
    name: "Sophia Martinez",
    role: "Luxury Property Specialist",
    phone: "+1 (310) 892-3341",
    email: "sophia.m@realestate.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    experience: "8+ Years",
    rating: 4.9,
    propertiesCount: 24,
    bio: "Sophia specializes in high-end waterfront estates and luxury penthouses across Beverly Hills and Malibu. She has over $150M+ in career sales volume."
  },
  {
    id: 102,
    name: "Marcus Vance",
    role: "Senior Real Estate Broker",
    phone: "+1 (212) 555-0192",
    email: "marcus.vance@realestate.com",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    experience: "12+ Years",
    rating: 5.0,
    propertiesCount: 42,
    bio: "Marcus is a veteran broker with deep roots in New York and Los Angeles residential markets. Recognized as Top Producer for 5 consecutive years."
  },
  {
    id: 103,
    name: "David Chen",
    role: "Commercial & Office Advisory",
    phone: "+1 (415) 882-9901",
    email: "david.c@realestate.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    experience: "10+ Years",
    rating: 4.8,
    propertiesCount: 18,
    bio: "David advises tech startups and institutional investors on corporate campus leases, retail centers, and high-yield commercial assets."
  },
  {
    id: 104,
    name: "Elena Rostova",
    role: "Resort & Mountain Property Lead",
    phone: "+1 (970) 412-8822",
    email: "elena.r@realestate.com",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    experience: "7+ Years",
    rating: 4.9,
    propertiesCount: 15,
    bio: "Elena specializes in luxury chalets, vacation homes, and land parcels across Colorado, Utah, and Texas hill country."
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah & Robert Jenkins",
    role: "Villa Buyers in Beverly Hills",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "The team made finding our dream home in Beverly Hills an absolute breeze. Sophia listened to every detail we wanted and delivered a property that surpassed all expectations!"
  },
  {
    id: 2,
    name: "Michael Chang",
    role: "Tech CEO & Commercial Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Securing 6,500 sq ft of prime SoMa office space within 2 weeks was incredible. Professionalism, transparent negotiation, and unmatched market insight!"
  },
  {
    id: 3,
    name: "Amanda Thorne",
    role: "Penthouse Owner in Manhattan",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Marcus Vance guided us through the complex NYC penthouse market with extreme care. We closed smoothly and could not be happier with our Central Park views."
  }
];
