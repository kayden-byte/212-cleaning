export type CleaningService = { slug: string; title: string; headline: string; description: string; tasks: string[]; floorTypes?: string[]; };
export const services: CleaningService[] = [
  {
    "slug": "commercial-carpet-cleaning",
    "title": "Carpet Cleaning",
    "headline": "Freshen up your busiest spaces.",
    "description": "Residential and commercial carpet cleaning, carpet shampooing, and extraction, with care planned around high-traffic areas and your property schedule.",
    "tasks": [
      "Carpet condition assessment",
      "Carpet shampooing and extraction",
      "High-traffic areas",
      "Spot treatment discussed during assessment",
      "A maintenance schedule for your facility"
    ]
  },
  {
    "slug": "carpet-tile-cleaning",
    "title": "Carpet Tile Cleaning",
    "headline": "Care for every square.",
    "description": "Cleaning and maintenance for modular carpet tile systems.",
    "tasks": [
      "Review tile condition and materials",
      "Address high-traffic zones",
      "Discuss spot cleaning needs",
      "Plan ongoing maintenance"
    ]
  },
  {
    "slug": "vct-floor-cleaning",
    "title": "VCT Floor Cleaning",
    "headline": "VCT floor cleaning and finish maintenance",
    "description": "Cleaning and maintenance for vinyl composition tile, including stripping, sealing, waxing, and buffing where suitable.",
    "tasks": [
      "Review VCT flooring and existing finish",
      "Discuss floor scrubbing and buildup",
      "Assess stripping, sealing, waxing, and buffing needs",
      "Plan access and ongoing VCT maintenance"
    ]
  },
  {
    "slug": "lvt-floor-cleaning",
    "title": "LVT Floor Cleaning",
    "headline": "Luxury vinyl floor cleaning for commercial spaces",
    "description": "Cleaning and ongoing care for luxury vinyl tile and luxury vinyl plank flooring, matched to the surface and its finish.",
    "tasks": [
      "Review luxury vinyl tile or plank material",
      "Assess high-traffic areas and surface buildup",
      "Select cleaning methods suited to the finish",
      "Discuss ongoing luxury vinyl maintenance"
    ]
  },
  {
    "slug": "tile-and-grout-cleaning",
    "title": "Tile & Grout Cleaning",
    "headline": "Care for hard tile and grout.",
    "description": "Residential and commercial tile and grout cleaning for homes, offices, restrooms, entrances, and shared spaces.",
    "tasks": [
      "Review hard-tile material and grout condition",
      "Discuss buildup and problem grout lines",
      "Agree on appropriate tile and grout cleaning methods",
      "Plan access and ongoing floor maintenance"
    ],
    "floorTypes": [
      "Hard tile",
      "Grout lines"
    ]
  },
  {
    "slug": "stone-cleaning",
    "title": "Stone Cleaning & Polishing",
    "headline": "Special care for stone surfaces.",
    "description": "Cleaning and polishing for residential and commercial stone floors, with treatments selected after assessing the material and finish.",
    "tasks": [
      "Specialty stone cleaning",
      "Marble polishing",
      "Review existing finishes and surface condition",
      "Agree on appropriate care and maintenance"
    ]
  },
  {
    "slug": "concrete-floor-cleaning",
    "title": "Concrete Floor Cleaning",
    "headline": "Concrete floor cleaning planned around the surface",
    "description": "Concrete floor cleaning for residential and commercial properties, with methods chosen after reviewing surface condition and existing coatings.",
    "tasks": [
      "Review concrete floor condition and coatings",
      "Discuss buildup, marks, and high-traffic zones",
      "Agree on suitable concrete cleaning methods",
      "Plan access and routine concrete floor care"
    ]
  },
  {
    "slug": "floor-care",
    "title": "Floor Cleaning & Maintenance",
    "headline": "Put your best floor forward.",
    "description": "Residential and commercial floor cleaning and maintenance, including VCT care, stripping and sealing, waxing and buffing, concrete cleaning, and tile and grout care.",
    "tasks": [
      "Concrete floor cleaning",
      "Floor scrubbing",
      "Floor waxing and buffing",
      "Carpet shampooing and extraction",
      "Floor restoration",
      "Floor stripping and sealing",
      "Tile and grout cleaning",
      "Specialty stone cleaning",
      "Marble polishing"
    ],
    "floorTypes": [
      "Carpet",
      "Carpet tile",
      "VCT (vinyl composition tile)",
      "LVT / luxury vinyl",
      "Tile and grout",
      "Stone",
      "Concrete"
    ]
  },
  {
    "slug": "post-construction-cleaning",
    "title": "Post-Construction Cleaning",
    "headline": "The final step before opening day.",
    "description": "Detailed cleaning for homes and commercial spaces after construction or renovation.",
    "tasks": [
      "Construction dust cleanup",
      "Interior surface detailing",
      "Floor cleaning",
      "Final presentation cleaning"
    ]
  }
];
