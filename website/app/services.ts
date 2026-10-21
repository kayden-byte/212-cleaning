export type CleaningService = { slug: string; title: string; headline: string; description: string; tasks: string[]; floorTypes?: string[]; };
export const services: CleaningService[] = [
  {
    "slug": "commercial-cleaning",
    "title": "Commercial Cleaning",
    "headline": "Routine care. A better first impression.",
    "description": "Cleaning plans for offices, commercial buildings, and managed facilities.",
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
    "description": "Deep cleaning and ongoing care for commercial carpeting.",
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
    "slug": "floor-care",
    "title": "Floor Cleaning & Maintenance",
    "headline": "Put your best floor forward.",
    "description": "Hard floor care planned around the surface and how your space is used.",
    "tasks": [
      "Concrete floor cleaning",
      "Floor scrubbing",
      "Floor waxing and buffing",
      "Carpet shampooing and extraction",
      "Floor restoration",
      "Floor stripping and sealing",
      "Tile and grout cleaning",
      "Specialty stone cleaning",
      "Italian marble polishing"
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
      "Italian marble polishing",
      "Review existing finishes and surface condition",
      "Agree on appropriate care and maintenance"
    ]
  }
];
