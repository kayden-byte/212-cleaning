export type CleaningService = { slug: string; title: string; headline: string; description: string; tasks: string[]; floorTypes?: string[]; };
export const services: CleaningService[] = [
  {
    "slug": "commercial-cleaning",
    "title": "Commercial Cleaning",
    "headline": "Routine care. A better first impression.",
    "description": "Commercial cleaning for offices, restrooms, break areas, and managed facilities, with a scope and schedule planned around your property.",
    "tasks": [
      "Accessible surfaces and shared spaces",
      "Restrooms and break areas",
      "Vacuuming and floor cleaning",
      "Trash and recycling collection"
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
    "description": "Detailed cleaning for commercial spaces after construction or renovation.",
    "tasks": [
      "Construction dust cleanup",
      "Interior surface detailing",
      "Floor cleaning",
      "Final presentation cleaning"
    ]
  },
  {
    "slug": "commercial-carpet-cleaning",
    "title": "Commercial Carpet Cleaning",
    "headline": "Freshen up your busiest spaces.",
    "description": "Commercial carpet cleaning, carpet shampooing, and extraction, with care planned around high-traffic areas and your property schedule.",
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
    "title": "Commercial Carpet Tile Cleaning",
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
    "slug": "floor-care",
    "title": "Floor Cleaning & Maintenance",
    "headline": "Put your best floor forward.",
    "description": "Commercial floor cleaning and maintenance, including VCT care, stripping and sealing, waxing and buffing, concrete cleaning, and tile and grout care.",
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
    "slug": "stone-cleaning",
    "title": "Stone Cleaning & Polishing",
    "headline": "Special care for stone surfaces.",
    "description": "Cleaning and polishing for commercial stone floors, with treatments selected after assessing the material and finish.",
    "tasks": [
      "Specialty stone cleaning",
      "Marble polishing",
      "Review existing finishes and surface condition",
      "Agree on appropriate care and maintenance"
    ]
  },
  {
    "slug": "tile-and-grout-cleaning",
    "title": "Commercial Tile & Grout Cleaning",
    "headline": "Care for hard tile and grout.",
    "description": "Commercial tile and grout cleaning for offices, restrooms, entrances, and shared spaces.",
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
  }
];
