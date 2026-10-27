export const regions=[{slug:"manhattan",name:"Manhattan"},{slug:"brooklyn",name:"Brooklyn"},{slug:"queens",name:"Queens"},{slug:"bronx",name:"The Bronx"},{slug:"long-island",name:"Long Island"},{slug:"new-jersey",name:"New Jersey"}];
export const queensNeighborhoods=[{"name":"Astoria","slug":"astoria"},{"name":"Astoria Heights","slug":"astoria-heights"},{"name":"Auburndale","slug":"auburndale"},{"name":"Baisley Park","slug":"baisley-park"},{"name":"Bayside","slug":"bayside"},{"name":"Bay Terrace","slug":"bay-terrace"},{"name":"Bayswater","slug":"bayswater"},{"name":"Beechhurst","slug":"beechhurst"},{"name":"Belle Harbor","slug":"belle-harbor"},{"name":"Bellerose","slug":"bellerose"},{"name":"Breezy Point","slug":"breezy-point"},{"name":"Briarwood","slug":"briarwood"},{"name":"Broad Channel","slug":"broad-channel"},{"name":"Brookville","slug":"brookville"},{"name":"Cambria Heights","slug":"cambria-heights"},{"name":"Clearview","slug":"clearview"},{"name":"College Point","slug":"college-point"},{"name":"Corona","slug":"corona"},{"name":"Ditmars","slug":"ditmars"},{"name":"Douglaston","slug":"douglaston"},{"name":"Downtown Flushing","slug":"downtown-flushing"},{"name":"East Elmhurst","slug":"east-elmhurst"},{"name":"East Flushing","slug":"east-flushing"},{"name":"Edgemere","slug":"edgemere"},{"name":"Elmhurst","slug":"elmhurst"},{"name":"Far Rockaway","slug":"far-rockaway"},{"name":"Floral Park","slug":"floral-park"},{"name":"Flushing","slug":"flushing"},{"name":"Forest Hills","slug":"forest-hills"},{"name":"Fresh Meadows","slug":"fresh-meadows"},{"name":"Garden Bay","slug":"garden-bay"},{"name":"Glen Oaks","slug":"glen-oaks"},{"name":"Glendale","slug":"glendale"},{"name":"Hammels","slug":"hammels"},{"name":"Hollis","slug":"hollis"},{"name":"Hollis Hills","slug":"hollis-hills"},{"name":"Holliswood","slug":"holliswood"},{"name":"Howard Beach","slug":"howard-beach"},{"name":"Jackson Heights","slug":"jackson-heights"},{"name":"Jamaica","slug":"jamaica"},{"name":"Jamaica Estates","slug":"jamaica-estates"},{"name":"Jamaica Hills","slug":"jamaica-hills"},{"name":"Kew Gardens","slug":"kew-gardens"},{"name":"Kew Gardens Hills","slug":"kew-gardens-hills"},{"name":"Laurelton","slug":"laurelton"},{"name":"Linden Hill","slug":"linden-hill"},{"name":"Little Neck","slug":"little-neck"},{"name":"Long Island City","slug":"long-island-city"},{"name":"Malba","slug":"malba"},{"name":"Maspeth","slug":"maspeth"},{"name":"Middle Village","slug":"middle-village"},{"name":"Murray Hill","slug":"murray-hill"},{"name":"Neponsit","slug":"neponsit"},{"name":"New Hyde Park","slug":"new-hyde-park"},{"name":"North Corona","slug":"north-corona"},{"name":"Oakland Gardens","slug":"oakland-gardens"},{"name":"Old Astoria","slug":"old-astoria"},{"name":"Ozone Park","slug":"ozone-park"},{"name":"Pomonok","slug":"pomonok"},{"name":"Queensboro Hill","slug":"queensboro-hill"},{"name":"Queensbridge","slug":"queensbridge"},{"name":"Queens Village","slug":"queens-village"},{"name":"Ravenswood","slug":"ravenswood"},{"name":"Rego Park","slug":"rego-park"},{"name":"Richmond Hill","slug":"richmond-hill"},{"name":"Ridgewood","slug":"ridgewood"},{"name":"Rochdale Village","slug":"rochdale-village"},{"name":"Rockaway Beach","slug":"rockaway-beach"},{"name":"Rockaway Park","slug":"rockaway-park"},{"name":"Rosedale","slug":"rosedale"},{"name":"Roxbury","slug":"roxbury"},{"name":"Seaside","slug":"seaside"},{"name":"South Jamaica","slug":"south-jamaica"},{"name":"South Ozone Park","slug":"south-ozone-park"},{"name":"Springfield Gardens","slug":"springfield-gardens"},{"name":"St. Albans","slug":"st-albans"},{"name":"Steinway","slug":"steinway"},{"name":"Sunnyside","slug":"sunnyside"},{"name":"Utopia","slug":"utopia"},{"name":"Whitestone","slug":"whitestone"},{"name":"Willets Point","slug":"willets-point"},{"name":"Woodhaven","slug":"woodhaven"},{"name":"Woodside","slug":"woodside"}];

export type LocalArea = { name: string; slug: string };
export const neighborhoodsByRegion: Record<string, LocalArea[]> = {
...{
  "manhattan": [
    {
      "name": "Battery Park City",
      "slug": "battery-park-city"
    },
    {
      "name": "Carnegie Hill",
      "slug": "carnegie-hill"
    },
    {
      "name": "Central Harlem",
      "slug": "central-harlem"
    },
    {
      "name": "Chelsea",
      "slug": "chelsea"
    },
    {
      "name": "Chinatown",
      "slug": "chinatown"
    },
    {
      "name": "Civic Center",
      "slug": "civic-center"
    },
    {
      "name": "East Harlem",
      "slug": "east-harlem"
    },
    {
      "name": "East Village",
      "slug": "east-village"
    },
    {
      "name": "Financial District",
      "slug": "financial-district"
    },
    {
      "name": "Flatiron District",
      "slug": "flatiron-district"
    },
    {
      "name": "Garment District",
      "slug": "garment-district"
    },
    {
      "name": "Gramercy",
      "slug": "gramercy"
    },
    {
      "name": "Greenwich Village",
      "slug": "greenwich-village"
    },
    {
      "name": "Hamilton Heights",
      "slug": "hamilton-heights"
    },
    {
      "name": "Harlem",
      "slug": "harlem"
    },
    {
      "name": "Hell's Kitchen",
      "slug": "hells-kitchen"
    },
    {
      "name": "Hudson Heights",
      "slug": "hudson-heights"
    },
    {
      "name": "Hudson Yards",
      "slug": "hudson-yards"
    },
    {
      "name": "Inwood",
      "slug": "inwood"
    },
    {
      "name": "Kips Bay",
      "slug": "kips-bay"
    },
    {
      "name": "Lenox Hill",
      "slug": "lenox-hill"
    },
    {
      "name": "Lincoln Square",
      "slug": "lincoln-square"
    },
    {
      "name": "Little Italy",
      "slug": "little-italy"
    },
    {
      "name": "Lower East Side",
      "slug": "lower-east-side"
    },
    {
      "name": "Manhattan Valley",
      "slug": "manhattan-valley"
    },
    {
      "name": "Manhattanville",
      "slug": "manhattanville"
    },
    {
      "name": "Marble Hill",
      "slug": "marble-hill"
    },
    {
      "name": "Midtown",
      "slug": "midtown"
    },
    {
      "name": "Midtown East",
      "slug": "midtown-east"
    },
    {
      "name": "Midtown West",
      "slug": "midtown-west"
    },
    {
      "name": "Morningside Heights",
      "slug": "morningside-heights"
    },
    {
      "name": "Murray Hill",
      "slug": "murray-hill"
    },
    {
      "name": "NoHo",
      "slug": "noho"
    },
    {
      "name": "Nolita",
      "slug": "nolita"
    },
    {
      "name": "NoMad",
      "slug": "nomad"
    },
    {
      "name": "Roosevelt Island",
      "slug": "roosevelt-island"
    },
    {
      "name": "SoHo",
      "slug": "soho"
    },
    {
      "name": "South Street Seaport",
      "slug": "south-street-seaport"
    },
    {
      "name": "Sugar Hill",
      "slug": "sugar-hill"
    },
    {
      "name": "Sutton Place",
      "slug": "sutton-place"
    },
    {
      "name": "Tribeca",
      "slug": "tribeca"
    },
    {
      "name": "Tudor City",
      "slug": "tudor-city"
    },
    {
      "name": "Turtle Bay",
      "slug": "turtle-bay"
    },
    {
      "name": "Two Bridges",
      "slug": "two-bridges"
    },
    {
      "name": "Union Square",
      "slug": "union-square"
    },
    {
      "name": "Upper East Side",
      "slug": "upper-east-side"
    },
    {
      "name": "Upper West Side",
      "slug": "upper-west-side"
    },
    {
      "name": "Washington Heights",
      "slug": "washington-heights"
    },
    {
      "name": "West Village",
      "slug": "west-village"
    },
    {
      "name": "Yorkville",
      "slug": "yorkville"
    }
  ],
  "brooklyn": [
    {
      "name": "Bath Beach",
      "slug": "bath-beach"
    },
    {
      "name": "Bay Ridge",
      "slug": "bay-ridge"
    },
    {
      "name": "Bedford-Stuyvesant",
      "slug": "bedford-stuyvesant"
    },
    {
      "name": "Bensonhurst",
      "slug": "bensonhurst"
    },
    {
      "name": "Bergen Beach",
      "slug": "bergen-beach"
    },
    {
      "name": "Boerum Hill",
      "slug": "boerum-hill"
    },
    {
      "name": "Borough Park",
      "slug": "borough-park"
    },
    {
      "name": "Brighton Beach",
      "slug": "brighton-beach"
    },
    {
      "name": "Brooklyn Heights",
      "slug": "brooklyn-heights"
    },
    {
      "name": "Brownsville",
      "slug": "brownsville"
    },
    {
      "name": "Bushwick",
      "slug": "bushwick"
    },
    {
      "name": "Canarsie",
      "slug": "canarsie"
    },
    {
      "name": "Carroll Gardens",
      "slug": "carroll-gardens"
    },
    {
      "name": "City Line",
      "slug": "city-line"
    },
    {
      "name": "Clinton Hill",
      "slug": "clinton-hill"
    },
    {
      "name": "Cobble Hill",
      "slug": "cobble-hill"
    },
    {
      "name": "Columbia Street Waterfront District",
      "slug": "columbia-street-waterfront-district"
    },
    {
      "name": "Coney Island",
      "slug": "coney-island"
    },
    {
      "name": "Crown Heights",
      "slug": "crown-heights"
    },
    {
      "name": "Cypress Hills",
      "slug": "cypress-hills"
    },
    {
      "name": "Ditmas Park",
      "slug": "ditmas-park"
    },
    {
      "name": "Downtown Brooklyn",
      "slug": "downtown-brooklyn"
    },
    {
      "name": "DUMBO",
      "slug": "dumbo"
    },
    {
      "name": "Dyker Heights",
      "slug": "dyker-heights"
    },
    {
      "name": "East Flatbush",
      "slug": "east-flatbush"
    },
    {
      "name": "East New York",
      "slug": "east-new-york"
    },
    {
      "name": "East Williamsburg",
      "slug": "east-williamsburg"
    },
    {
      "name": "Flatbush",
      "slug": "flatbush"
    },
    {
      "name": "Flatlands",
      "slug": "flatlands"
    },
    {
      "name": "Fort Greene",
      "slug": "fort-greene"
    },
    {
      "name": "Fort Hamilton",
      "slug": "fort-hamilton"
    },
    {
      "name": "Gerritsen Beach",
      "slug": "gerritsen-beach"
    },
    {
      "name": "Gowanus",
      "slug": "gowanus"
    },
    {
      "name": "Gravesend",
      "slug": "gravesend"
    },
    {
      "name": "Greenpoint",
      "slug": "greenpoint"
    },
    {
      "name": "Greenwood Heights",
      "slug": "greenwood-heights"
    },
    {
      "name": "Homecrest",
      "slug": "homecrest"
    },
    {
      "name": "Kensington",
      "slug": "kensington"
    },
    {
      "name": "Madison",
      "slug": "madison"
    },
    {
      "name": "Manhattan Beach",
      "slug": "manhattan-beach"
    },
    {
      "name": "Mapleton",
      "slug": "mapleton"
    },
    {
      "name": "Marine Park",
      "slug": "marine-park"
    },
    {
      "name": "Midwood",
      "slug": "midwood"
    },
    {
      "name": "Mill Basin",
      "slug": "mill-basin"
    },
    {
      "name": "New Lots",
      "slug": "new-lots"
    },
    {
      "name": "Ocean Hill",
      "slug": "ocean-hill"
    },
    {
      "name": "Park Slope",
      "slug": "park-slope"
    },
    {
      "name": "Prospect Heights",
      "slug": "prospect-heights"
    },
    {
      "name": "Prospect Lefferts Gardens",
      "slug": "prospect-lefferts-gardens"
    },
    {
      "name": "Red Hook",
      "slug": "red-hook"
    },
    {
      "name": "Sea Gate",
      "slug": "sea-gate"
    },
    {
      "name": "Sheepshead Bay",
      "slug": "sheepshead-bay"
    },
    {
      "name": "South Slope",
      "slug": "south-slope"
    },
    {
      "name": "Starrett City",
      "slug": "starrett-city"
    },
    {
      "name": "Sunset Park",
      "slug": "sunset-park"
    },
    {
      "name": "Williamsburg",
      "slug": "williamsburg"
    },
    {
      "name": "Windsor Terrace",
      "slug": "windsor-terrace"
    }
  ],
  "bronx": [
    {
      "name": "Allerton",
      "slug": "allerton"
    },
    {
      "name": "Bathgate",
      "slug": "bathgate"
    },
    {
      "name": "Baychester",
      "slug": "baychester"
    },
    {
      "name": "Bedford Park",
      "slug": "bedford-park"
    },
    {
      "name": "Belmont",
      "slug": "belmont"
    },
    {
      "name": "Bronxdale",
      "slug": "bronxdale"
    },
    {
      "name": "Castle Hill",
      "slug": "castle-hill"
    },
    {
      "name": "City Island",
      "slug": "city-island"
    },
    {
      "name": "Claremont",
      "slug": "claremont"
    },
    {
      "name": "Clason Point",
      "slug": "clason-point"
    },
    {
      "name": "Co-op City",
      "slug": "co-op-city"
    },
    {
      "name": "Concourse",
      "slug": "concourse"
    },
    {
      "name": "Concourse Village",
      "slug": "concourse-village"
    },
    {
      "name": "Country Club",
      "slug": "country-club"
    },
    {
      "name": "Crotona Park East",
      "slug": "crotona-park-east"
    },
    {
      "name": "East Tremont",
      "slug": "east-tremont"
    },
    {
      "name": "Eastchester",
      "slug": "eastchester"
    },
    {
      "name": "Edenwald",
      "slug": "edenwald"
    },
    {
      "name": "Fieldston",
      "slug": "fieldston"
    },
    {
      "name": "Fordham",
      "slug": "fordham"
    },
    {
      "name": "Highbridge",
      "slug": "highbridge"
    },
    {
      "name": "Hunts Point",
      "slug": "hunts-point"
    },
    {
      "name": "Kingsbridge",
      "slug": "kingsbridge"
    },
    {
      "name": "Kingsbridge Heights",
      "slug": "kingsbridge-heights"
    },
    {
      "name": "Laconia",
      "slug": "laconia"
    },
    {
      "name": "Locust Point",
      "slug": "locust-point"
    },
    {
      "name": "Longwood",
      "slug": "longwood"
    },
    {
      "name": "Melrose",
      "slug": "melrose"
    },
    {
      "name": "Morris Heights",
      "slug": "morris-heights"
    },
    {
      "name": "Morris Park",
      "slug": "morris-park"
    },
    {
      "name": "Morrisania",
      "slug": "morrisania"
    },
    {
      "name": "Mott Haven",
      "slug": "mott-haven"
    },
    {
      "name": "Mount Eden",
      "slug": "mount-eden"
    },
    {
      "name": "Norwood",
      "slug": "norwood"
    },
    {
      "name": "Olinville",
      "slug": "olinville"
    },
    {
      "name": "Parkchester",
      "slug": "parkchester"
    },
    {
      "name": "Pelham Bay",
      "slug": "pelham-bay"
    },
    {
      "name": "Pelham Gardens",
      "slug": "pelham-gardens"
    },
    {
      "name": "Pelham Parkway",
      "slug": "pelham-parkway"
    },
    {
      "name": "Port Morris",
      "slug": "port-morris"
    },
    {
      "name": "Riverdale",
      "slug": "riverdale"
    },
    {
      "name": "Schuylerville",
      "slug": "schuylerville"
    },
    {
      "name": "Silver Beach",
      "slug": "silver-beach"
    },
    {
      "name": "Soundview",
      "slug": "soundview"
    },
    {
      "name": "Spuyten Duyvil",
      "slug": "spuyten-duyvil"
    },
    {
      "name": "Throgs Neck",
      "slug": "throgs-neck"
    },
    {
      "name": "Tremont",
      "slug": "tremont"
    },
    {
      "name": "Unionport",
      "slug": "unionport"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Van Cortlandt Village",
      "slug": "van-cortlandt-village"
    },
    {
      "name": "Van Nest",
      "slug": "van-nest"
    },
    {
      "name": "Wakefield",
      "slug": "wakefield"
    },
    {
      "name": "West Farms",
      "slug": "west-farms"
    },
    {
      "name": "Westchester Square",
      "slug": "westchester-square"
    },
    {
      "name": "Williamsbridge",
      "slug": "williamsbridge"
    },
    {
      "name": "Woodlawn",
      "slug": "woodlawn"
    }
  ],
  "long-island": [
    {
      "name": "Albertson",
      "slug": "albertson"
    },
    {
      "name": "Amagansett",
      "slug": "amagansett"
    },
    {
      "name": "Amityville",
      "slug": "amityville"
    },
    {
      "name": "Aquebogue",
      "slug": "aquebogue"
    },
    {
      "name": "Atlantic Beach",
      "slug": "atlantic-beach"
    },
    {
      "name": "Babylon",
      "slug": "babylon"
    },
    {
      "name": "Baldwin",
      "slug": "baldwin"
    },
    {
      "name": "Bay Shore",
      "slug": "bay-shore"
    },
    {
      "name": "Bayville",
      "slug": "bayville"
    },
    {
      "name": "Bellerose",
      "slug": "bellerose"
    },
    {
      "name": "Bellmore",
      "slug": "bellmore"
    },
    {
      "name": "Bellport",
      "slug": "bellport"
    },
    {
      "name": "Bethpage",
      "slug": "bethpage"
    },
    {
      "name": "Bohemia",
      "slug": "bohemia"
    },
    {
      "name": "Brentwood",
      "slug": "brentwood"
    },
    {
      "name": "Bridgehampton",
      "slug": "bridgehampton"
    },
    {
      "name": "Brightwaters",
      "slug": "brightwaters"
    },
    {
      "name": "Brookhaven",
      "slug": "brookhaven"
    },
    {
      "name": "Brookville",
      "slug": "brookville"
    },
    {
      "name": "Calverton",
      "slug": "calverton"
    },
    {
      "name": "Carle Place",
      "slug": "carle-place"
    },
    {
      "name": "Cedarhurst",
      "slug": "cedarhurst"
    },
    {
      "name": "Centereach",
      "slug": "centereach"
    },
    {
      "name": "Centerport",
      "slug": "centerport"
    },
    {
      "name": "Central Islip",
      "slug": "central-islip"
    },
    {
      "name": "Cold Spring Harbor",
      "slug": "cold-spring-harbor"
    },
    {
      "name": "Commack",
      "slug": "commack"
    },
    {
      "name": "Copiague",
      "slug": "copiague"
    },
    {
      "name": "Coram",
      "slug": "coram"
    },
    {
      "name": "Cutchogue",
      "slug": "cutchogue"
    },
    {
      "name": "Deer Park",
      "slug": "deer-park"
    },
    {
      "name": "Dix Hills",
      "slug": "dix-hills"
    },
    {
      "name": "East Hampton",
      "slug": "east-hampton"
    },
    {
      "name": "East Islip",
      "slug": "east-islip"
    },
    {
      "name": "East Meadow",
      "slug": "east-meadow"
    },
    {
      "name": "East Northport",
      "slug": "east-northport"
    },
    {
      "name": "East Patchogue",
      "slug": "east-patchogue"
    },
    {
      "name": "East Quogue",
      "slug": "east-quogue"
    },
    {
      "name": "East Rockaway",
      "slug": "east-rockaway"
    },
    {
      "name": "East Setauket",
      "slug": "east-setauket"
    },
    {
      "name": "East Williston",
      "slug": "east-williston"
    },
    {
      "name": "Elmont",
      "slug": "elmont"
    },
    {
      "name": "Farmingdale",
      "slug": "farmingdale"
    },
    {
      "name": "Farmingville",
      "slug": "farmingville"
    },
    {
      "name": "Floral Park",
      "slug": "floral-park"
    },
    {
      "name": "Franklin Square",
      "slug": "franklin-square"
    },
    {
      "name": "Freeport",
      "slug": "freeport"
    },
    {
      "name": "Garden City",
      "slug": "garden-city"
    },
    {
      "name": "Glen Cove",
      "slug": "glen-cove"
    },
    {
      "name": "Glen Head",
      "slug": "glen-head"
    },
    {
      "name": "Great Neck",
      "slug": "great-neck"
    },
    {
      "name": "Greenlawn",
      "slug": "greenlawn"
    },
    {
      "name": "Greenport",
      "slug": "greenport"
    },
    {
      "name": "Hampton Bays",
      "slug": "hampton-bays"
    },
    {
      "name": "Hauppauge",
      "slug": "hauppauge"
    },
    {
      "name": "Hempstead",
      "slug": "hempstead"
    },
    {
      "name": "Hewlett",
      "slug": "hewlett"
    },
    {
      "name": "Hicksville",
      "slug": "hicksville"
    },
    {
      "name": "Holbrook",
      "slug": "holbrook"
    },
    {
      "name": "Holtsville",
      "slug": "holtsville"
    },
    {
      "name": "Huntington",
      "slug": "huntington"
    },
    {
      "name": "Huntington Station",
      "slug": "huntington-station"
    },
    {
      "name": "Inwood",
      "slug": "inwood"
    },
    {
      "name": "Island Park",
      "slug": "island-park"
    },
    {
      "name": "Islip",
      "slug": "islip"
    },
    {
      "name": "Islip Terrace",
      "slug": "islip-terrace"
    },
    {
      "name": "Jamesport",
      "slug": "jamesport"
    },
    {
      "name": "Jericho",
      "slug": "jericho"
    },
    {
      "name": "Lawrence",
      "slug": "lawrence"
    },
    {
      "name": "Levittown",
      "slug": "levittown"
    },
    {
      "name": "Lido Beach",
      "slug": "lido-beach"
    },
    {
      "name": "Lindenhurst",
      "slug": "lindenhurst"
    },
    {
      "name": "Lloyd Harbor",
      "slug": "lloyd-harbor"
    },
    {
      "name": "Locust Valley",
      "slug": "locust-valley"
    },
    {
      "name": "Long Beach",
      "slug": "long-beach"
    },
    {
      "name": "Lynbrook",
      "slug": "lynbrook"
    },
    {
      "name": "Malverne",
      "slug": "malverne"
    },
    {
      "name": "Manhasset",
      "slug": "manhasset"
    },
    {
      "name": "Manorville",
      "slug": "manorville"
    },
    {
      "name": "Massapequa",
      "slug": "massapequa"
    },
    {
      "name": "Massapequa Park",
      "slug": "massapequa-park"
    },
    {
      "name": "Mastic",
      "slug": "mastic"
    },
    {
      "name": "Mastic Beach",
      "slug": "mastic-beach"
    },
    {
      "name": "Mattituck",
      "slug": "mattituck"
    },
    {
      "name": "Medford",
      "slug": "medford"
    },
    {
      "name": "Melville",
      "slug": "melville"
    },
    {
      "name": "Merrick",
      "slug": "merrick"
    },
    {
      "name": "Middle Island",
      "slug": "middle-island"
    },
    {
      "name": "Miller Place",
      "slug": "miller-place"
    },
    {
      "name": "Mineola",
      "slug": "mineola"
    },
    {
      "name": "Montauk",
      "slug": "montauk"
    },
    {
      "name": "Mount Sinai",
      "slug": "mount-sinai"
    },
    {
      "name": "Nesconset",
      "slug": "nesconset"
    },
    {
      "name": "New Cassel",
      "slug": "new-cassel"
    },
    {
      "name": "New Hyde Park",
      "slug": "new-hyde-park"
    },
    {
      "name": "North Babylon",
      "slug": "north-babylon"
    },
    {
      "name": "North Hempstead",
      "slug": "north-hempstead"
    },
    {
      "name": "Northport",
      "slug": "northport"
    },
    {
      "name": "Oakdale",
      "slug": "oakdale"
    },
    {
      "name": "Oceanside",
      "slug": "oceanside"
    },
    {
      "name": "Old Bethpage",
      "slug": "old-bethpage"
    },
    {
      "name": "Old Brookville",
      "slug": "old-brookville"
    },
    {
      "name": "Orient",
      "slug": "orient"
    },
    {
      "name": "Oyster Bay",
      "slug": "oyster-bay"
    },
    {
      "name": "Patchogue",
      "slug": "patchogue"
    },
    {
      "name": "Plainview",
      "slug": "plainview"
    },
    {
      "name": "Point Lookout",
      "slug": "point-lookout"
    },
    {
      "name": "Port Jefferson",
      "slug": "port-jefferson"
    },
    {
      "name": "Port Jefferson Station",
      "slug": "port-jefferson-station"
    },
    {
      "name": "Port Washington",
      "slug": "port-washington"
    },
    {
      "name": "Quogue",
      "slug": "quogue"
    },
    {
      "name": "Ridge",
      "slug": "ridge"
    },
    {
      "name": "Riverhead",
      "slug": "riverhead"
    },
    {
      "name": "Rockville Centre",
      "slug": "rockville-centre"
    },
    {
      "name": "Rocky Point",
      "slug": "rocky-point"
    },
    {
      "name": "Ronkonkoma",
      "slug": "ronkonkoma"
    },
    {
      "name": "Roosevelt",
      "slug": "roosevelt"
    },
    {
      "name": "Roslyn",
      "slug": "roslyn"
    },
    {
      "name": "Roslyn Heights",
      "slug": "roslyn-heights"
    },
    {
      "name": "Sag Harbor",
      "slug": "sag-harbor"
    },
    {
      "name": "Sagaponack",
      "slug": "sagaponack"
    },
    {
      "name": "Sayville",
      "slug": "sayville"
    },
    {
      "name": "Sea Cliff",
      "slug": "sea-cliff"
    },
    {
      "name": "Seaford",
      "slug": "seaford"
    },
    {
      "name": "Selden",
      "slug": "selden"
    },
    {
      "name": "Setauket",
      "slug": "setauket"
    },
    {
      "name": "Shelter Island",
      "slug": "shelter-island"
    },
    {
      "name": "Shirley",
      "slug": "shirley"
    },
    {
      "name": "Smithtown",
      "slug": "smithtown"
    },
    {
      "name": "Sound Beach",
      "slug": "sound-beach"
    },
    {
      "name": "South Huntington",
      "slug": "south-huntington"
    },
    {
      "name": "Southampton",
      "slug": "southampton"
    },
    {
      "name": "Southold",
      "slug": "southold"
    },
    {
      "name": "Springs",
      "slug": "springs"
    },
    {
      "name": "St. James",
      "slug": "st-james"
    },
    {
      "name": "Stony Brook",
      "slug": "stony-brook"
    },
    {
      "name": "Syosset",
      "slug": "syosset"
    },
    {
      "name": "Uniondale",
      "slug": "uniondale"
    },
    {
      "name": "Upper Brookville",
      "slug": "upper-brookville"
    },
    {
      "name": "Valley Stream",
      "slug": "valley-stream"
    },
    {
      "name": "Wading River",
      "slug": "wading-river"
    },
    {
      "name": "Wainscott",
      "slug": "wainscott"
    },
    {
      "name": "Wantagh",
      "slug": "wantagh"
    },
    {
      "name": "Water Mill",
      "slug": "water-mill"
    },
    {
      "name": "West Babylon",
      "slug": "west-babylon"
    },
    {
      "name": "West Hempstead",
      "slug": "west-hempstead"
    },
    {
      "name": "West Islip",
      "slug": "west-islip"
    },
    {
      "name": "West Sayville",
      "slug": "west-sayville"
    },
    {
      "name": "Westbury",
      "slug": "westbury"
    },
    {
      "name": "Westhampton",
      "slug": "westhampton"
    },
    {
      "name": "Westhampton Beach",
      "slug": "westhampton-beach"
    },
    {
      "name": "Williston Park",
      "slug": "williston-park"
    },
    {
      "name": "Woodbury",
      "slug": "woodbury"
    },
    {
      "name": "Woodmere",
      "slug": "woodmere"
    },
    {
      "name": "Yaphank",
      "slug": "yaphank"
    }
  ]
},
"new-jersey": [
  {
    "name": "Bayonne",
    "slug": "bayonne"
  },
  {
    "name": "Belleville",
    "slug": "belleville"
  },
  {
    "name": "Bergenfield",
    "slug": "bergenfield"
  },
  {
    "name": "Bloomfield",
    "slug": "bloomfield"
  },
  {
    "name": "Clifton",
    "slug": "clifton"
  },
  {
    "name": "Cranford",
    "slug": "cranford"
  },
  {
    "name": "East Orange",
    "slug": "east-orange"
  },
  {
    "name": "Edgewater",
    "slug": "edgewater"
  },
  {
    "name": "Edison",
    "slug": "edison"
  },
  {
    "name": "Elizabeth",
    "slug": "elizabeth"
  },
  {
    "name": "Englewood",
    "slug": "englewood"
  },
  {
    "name": "Fair Lawn",
    "slug": "fair-lawn"
  },
  {
    "name": "Fort Lee",
    "slug": "fort-lee"
  },
  {
    "name": "Garfield",
    "slug": "garfield"
  },
  {
    "name": "Hackensack",
    "slug": "hackensack"
  },
  {
    "name": "Harrison",
    "slug": "harrison"
  },
  {
    "name": "Hoboken",
    "slug": "hoboken"
  },
  {
    "name": "Irvington",
    "slug": "irvington"
  },
  {
    "name": "Jersey City",
    "slug": "jersey-city"
  },
  {
    "name": "Kearny",
    "slug": "kearny"
  },
  {
    "name": "Linden",
    "slug": "linden"
  },
  {
    "name": "Livingston",
    "slug": "livingston"
  },
  {
    "name": "Lodi",
    "slug": "lodi"
  },
  {
    "name": "Lyndhurst",
    "slug": "lyndhurst"
  },
  {
    "name": "Montclair",
    "slug": "montclair"
  },
  {
    "name": "Morristown",
    "slug": "morristown"
  },
  {
    "name": "New Brunswick",
    "slug": "new-brunswick"
  },
  {
    "name": "Newark",
    "slug": "newark"
  },
  {
    "name": "North Bergen",
    "slug": "north-bergen"
  },
  {
    "name": "Nutley",
    "slug": "nutley"
  },
  {
    "name": "Orange",
    "slug": "orange"
  },
  {
    "name": "Paramus",
    "slug": "paramus"
  },
  {
    "name": "Parsippany-Troy Hills",
    "slug": "parsippany-troy-hills"
  },
  {
    "name": "Passaic",
    "slug": "passaic"
  },
  {
    "name": "Paterson",
    "slug": "paterson"
  },
  {
    "name": "Perth Amboy",
    "slug": "perth-amboy"
  },
  {
    "name": "Plainfield",
    "slug": "plainfield"
  },
  {
    "name": "Rahway",
    "slug": "rahway"
  },
  {
    "name": "Ridgefield",
    "slug": "ridgefield"
  },
  {
    "name": "Ridgewood",
    "slug": "ridgewood"
  },
  {
    "name": "Rutherford",
    "slug": "rutherford"
  },
  {
    "name": "Secaucus",
    "slug": "secaucus"
  },
  {
    "name": "South Orange",
    "slug": "south-orange"
  },
  {
    "name": "Summit",
    "slug": "summit"
  },
  {
    "name": "Teaneck",
    "slug": "teaneck"
  },
  {
    "name": "Tenafly",
    "slug": "tenafly"
  },
  {
    "name": "Union City",
    "slug": "union-city"
  },
  {
    "name": "Union Township",
    "slug": "union-township"
  },
  {
    "name": "Weehawken",
    "slug": "weehawken"
  },
  {
    "name": "West New York",
    "slug": "west-new-york"
  },
  {
    "name": "West Orange",
    "slug": "west-orange"
  },
  {
    "name": "Westfield",
    "slug": "westfield"
  },
  {
    "name": "Woodbridge Township",
    "slug": "woodbridge-township"
  }
],
queens: queensNeighborhoods,
};
