import { Airport } from "../types";

const AIRPORTS: Airport[] = [
  // -------------------------------------------------------------------------
  // EUROPE
  // -------------------------------------------------------------------------

  // Portugal
  { iata: "LIS", city: "Lisbon", name: "Humberto Delgado Airport", country: "Portugal" },
  { iata: "OPO", city: "Porto", name: "Francisco Sa Carneiro Airport", country: "Portugal" },
  { iata: "FAO", city: "Faro", name: "Faro Airport", country: "Portugal" },
  { iata: "FNC", city: "Funchal", name: "Madeira Airport", country: "Portugal" },
  { iata: "PDL", city: "Ponta Delgada", name: "Joao Paulo II Airport", country: "Portugal" },

  // Spain
  { iata: "MAD", city: "Madrid", name: "Adolfo Suarez Madrid-Barajas Airport", country: "Spain" },
  { iata: "BCN", city: "Barcelona", name: "Barcelona-El Prat Airport", country: "Spain" },
  { iata: "PMI", city: "Palma de Mallorca", name: "Palma de Mallorca Airport", country: "Spain" },
  { iata: "AGP", city: "Malaga", name: "Malaga-Costa del Sol Airport", country: "Spain" },
  { iata: "ALC", city: "Alicante", name: "Alicante-Elche Airport", country: "Spain" },
  { iata: "TFS", city: "Tenerife", name: "Tenerife South Airport", country: "Spain" },
  { iata: "LPA", city: "Gran Canaria", name: "Gran Canaria Airport", country: "Spain" },
  { iata: "IBZ", city: "Ibiza", name: "Ibiza Airport", country: "Spain" },
  { iata: "VLC", city: "Valencia", name: "Valencia Airport", country: "Spain" },
  { iata: "SVQ", city: "Seville", name: "Seville Airport", country: "Spain" },
  { iata: "BIO", city: "Bilbao", name: "Bilbao Airport", country: "Spain" },

  // France
  { iata: "CDG", city: "Paris", name: "Charles de Gaulle Airport", country: "France" },
  { iata: "ORY", city: "Paris", name: "Orly Airport", country: "France" },
  { iata: "NCE", city: "Nice", name: "Nice Cote d'Azur Airport", country: "France" },
  { iata: "LYS", city: "Lyon", name: "Lyon-Saint Exupery Airport", country: "France" },
  { iata: "MRS", city: "Marseille", name: "Marseille Provence Airport", country: "France" },
  { iata: "TLS", city: "Toulouse", name: "Toulouse-Blagnac Airport", country: "France" },
  { iata: "BOD", city: "Bordeaux", name: "Bordeaux-Merignac Airport", country: "France" },
  { iata: "NTE", city: "Nantes", name: "Nantes Atlantique Airport", country: "France" },

  // United Kingdom
  { iata: "LHR", city: "London", name: "Heathrow Airport", country: "United Kingdom" },
  { iata: "LGW", city: "London", name: "Gatwick Airport", country: "United Kingdom" },
  { iata: "STN", city: "London", name: "Stansted Airport", country: "United Kingdom" },
  { iata: "LTN", city: "London", name: "Luton Airport", country: "United Kingdom" },
  { iata: "LCY", city: "London", name: "London City Airport", country: "United Kingdom" },
  { iata: "MAN", city: "Manchester", name: "Manchester Airport", country: "United Kingdom" },
  { iata: "EDI", city: "Edinburgh", name: "Edinburgh Airport", country: "United Kingdom" },
  { iata: "BHX", city: "Birmingham", name: "Birmingham Airport", country: "United Kingdom" },
  { iata: "GLA", city: "Glasgow", name: "Glasgow Airport", country: "United Kingdom" },
  { iata: "BRS", city: "Bristol", name: "Bristol Airport", country: "United Kingdom" },
  { iata: "NCL", city: "Newcastle", name: "Newcastle Airport", country: "United Kingdom" },
  { iata: "BFS", city: "Belfast", name: "Belfast International Airport", country: "United Kingdom" },

  // Germany
  { iata: "FRA", city: "Frankfurt", name: "Frankfurt Airport", country: "Germany" },
  { iata: "MUC", city: "Munich", name: "Munich Airport", country: "Germany" },
  { iata: "BER", city: "Berlin", name: "Berlin Brandenburg Airport", country: "Germany" },
  { iata: "HAM", city: "Hamburg", name: "Hamburg Airport", country: "Germany" },
  { iata: "DUS", city: "Dusseldorf", name: "Dusseldorf Airport", country: "Germany" },
  { iata: "CGN", city: "Cologne", name: "Cologne Bonn Airport", country: "Germany" },
  { iata: "STR", city: "Stuttgart", name: "Stuttgart Airport", country: "Germany" },
  { iata: "HAJ", city: "Hanover", name: "Hanover Airport", country: "Germany" },
  { iata: "NUE", city: "Nuremberg", name: "Nuremberg Airport", country: "Germany" },
  { iata: "LEJ", city: "Leipzig", name: "Leipzig/Halle Airport", country: "Germany" },

  // Netherlands
  { iata: "AMS", city: "Amsterdam", name: "Amsterdam Schiphol Airport", country: "Netherlands" },
  { iata: "EIN", city: "Eindhoven", name: "Eindhoven Airport", country: "Netherlands" },

  // Belgium
  { iata: "BRU", city: "Brussels", name: "Brussels Airport", country: "Belgium" },
  { iata: "CRL", city: "Charleroi", name: "Brussels South Charleroi Airport", country: "Belgium" },

  // Luxembourg
  { iata: "LUX", city: "Luxembourg", name: "Luxembourg Airport", country: "Luxembourg" },

  // Ireland
  { iata: "DUB", city: "Dublin", name: "Dublin Airport", country: "Ireland" },
  { iata: "SNN", city: "Shannon", name: "Shannon Airport", country: "Ireland" },
  { iata: "ORK", city: "Cork", name: "Cork Airport", country: "Ireland" },

  // Scandinavia
  { iata: "CPH", city: "Copenhagen", name: "Copenhagen Airport", country: "Denmark" },
  { iata: "AAL", city: "Aalborg", name: "Aalborg Airport", country: "Denmark" },
  { iata: "ARN", city: "Stockholm", name: "Stockholm Arlanda Airport", country: "Sweden" },
  { iata: "GOT", city: "Gothenburg", name: "Gothenburg Landvetter Airport", country: "Sweden" },
  { iata: "OSL", city: "Oslo", name: "Oslo Airport", country: "Norway" },
  { iata: "BGO", city: "Bergen", name: "Bergen Airport", country: "Norway" },
  { iata: "TRD", city: "Trondheim", name: "Trondheim Airport", country: "Norway" },
  { iata: "HEL", city: "Helsinki", name: "Helsinki Airport", country: "Finland" },
  { iata: "KEF", city: "Reykjavik", name: "Keflavik International Airport", country: "Iceland" },

  // Central Europe
  { iata: "VIE", city: "Vienna", name: "Vienna International Airport", country: "Austria" },
  { iata: "SZG", city: "Salzburg", name: "Salzburg Airport", country: "Austria" },
  { iata: "INN", city: "Innsbruck", name: "Innsbruck Airport", country: "Austria" },
  { iata: "ZRH", city: "Zurich", name: "Zurich Airport", country: "Switzerland" },
  { iata: "GVA", city: "Geneva", name: "Geneva Airport", country: "Switzerland" },
  { iata: "BSL", city: "Basel", name: "EuroAirport Basel-Mulhouse-Freiburg", country: "Switzerland" },
  { iata: "PRG", city: "Prague", name: "Vaclav Havel Airport", country: "Czech Republic" },
  { iata: "WAW", city: "Warsaw", name: "Warsaw Chopin Airport", country: "Poland" },
  { iata: "KRK", city: "Krakow", name: "Krakow John Paul II Airport", country: "Poland" },
  { iata: "WRO", city: "Wroclaw", name: "Wroclaw Airport", country: "Poland" },
  { iata: "GDN", city: "Gdansk", name: "Gdansk Lech Walesa Airport", country: "Poland" },
  { iata: "BUD", city: "Budapest", name: "Budapest Ferenc Liszt Airport", country: "Hungary" },
  { iata: "BTS", city: "Bratislava", name: "Bratislava Airport", country: "Slovakia" },

  // Southeastern Europe
  { iata: "OTP", city: "Bucharest", name: "Henri Coanda International Airport", country: "Romania" },
  { iata: "CLJ", city: "Cluj-Napoca", name: "Cluj-Napoca Airport", country: "Romania" },
  { iata: "SOF", city: "Sofia", name: "Sofia Airport", country: "Bulgaria" },
  { iata: "VAR", city: "Varna", name: "Varna Airport", country: "Bulgaria" },
  { iata: "BEG", city: "Belgrade", name: "Belgrade Nikola Tesla Airport", country: "Serbia" },
  { iata: "ZAG", city: "Zagreb", name: "Franjo Tudman Airport", country: "Croatia" },
  { iata: "SPU", city: "Split", name: "Split Airport", country: "Croatia" },
  { iata: "DBV", city: "Dubrovnik", name: "Dubrovnik Airport", country: "Croatia" },
  { iata: "LJU", city: "Ljubljana", name: "Ljubljana Joze Pucnik Airport", country: "Slovenia" },
  { iata: "TIA", city: "Tirana", name: "Tirana International Airport", country: "Albania" },
  { iata: "SKP", city: "Skopje", name: "Skopje International Airport", country: "North Macedonia" },
  { iata: "SJJ", city: "Sarajevo", name: "Sarajevo International Airport", country: "Bosnia and Herzegovina" },
  { iata: "TGD", city: "Podgorica", name: "Podgorica Airport", country: "Montenegro" },

  // Italy (additional)
  { iata: "FCO", city: "Rome", name: "Leonardo da Vinci International Airport", country: "Italy" },
  { iata: "MXP", city: "Milan", name: "Milan Malpensa Airport", country: "Italy" },
  { iata: "LIN", city: "Milan", name: "Milan Linate Airport", country: "Italy" },
  { iata: "NAP", city: "Naples", name: "Naples International Airport", country: "Italy" },
  { iata: "VCE", city: "Venice", name: "Venice Marco Polo Airport", country: "Italy" },
  { iata: "BLQ", city: "Bologna", name: "Bologna Guglielmo Marconi Airport", country: "Italy" },
  { iata: "FLR", city: "Florence", name: "Florence Airport", country: "Italy" },
  { iata: "PSA", city: "Pisa", name: "Pisa International Airport", country: "Italy" },
  { iata: "CTA", city: "Catania", name: "Catania-Fontanarossa Airport", country: "Italy" },
  { iata: "PMO", city: "Palermo", name: "Palermo Airport", country: "Italy" },
  { iata: "CAG", city: "Cagliari", name: "Cagliari Elmas Airport", country: "Italy" },
  { iata: "TRN", city: "Turin", name: "Turin Airport", country: "Italy" },

  // Greece (additional)
  { iata: "ATH", city: "Athens", name: "Athens International Airport", country: "Greece" },
  { iata: "SKG", city: "Thessaloniki", name: "Thessaloniki Airport", country: "Greece" },
  { iata: "HER", city: "Heraklion", name: "Heraklion International Airport", country: "Greece" },
  { iata: "RHO", city: "Rhodes", name: "Rhodes International Airport", country: "Greece" },
  { iata: "CFU", city: "Corfu", name: "Corfu International Airport", country: "Greece" },
  { iata: "JMK", city: "Mykonos", name: "Mykonos Airport", country: "Greece" },
  { iata: "JTR", city: "Santorini", name: "Santorini Airport", country: "Greece" },

  // Turkey (additional)
  { iata: "IST", city: "Istanbul", name: "Istanbul Airport", country: "Turkey" },
  { iata: "SAW", city: "Istanbul", name: "Sabiha Gokcen Airport", country: "Turkey" },
  { iata: "ESB", city: "Ankara", name: "Esenboga International Airport", country: "Turkey" },
  { iata: "AYT", city: "Antalya", name: "Antalya Airport", country: "Turkey" },
  { iata: "ADB", city: "Izmir", name: "Izmir Adnan Menderes Airport", country: "Turkey" },
  { iata: "DLM", city: "Dalaman", name: "Dalaman Airport", country: "Turkey" },
  { iata: "BJV", city: "Bodrum", name: "Milas-Bodrum Airport", country: "Turkey" },

  // Baltics
  { iata: "RIX", city: "Riga", name: "Riga International Airport", country: "Latvia" },
  { iata: "VNO", city: "Vilnius", name: "Vilnius Airport", country: "Lithuania" },
  { iata: "KUN", city: "Kaunas", name: "Kaunas Airport", country: "Lithuania" },
  { iata: "TLL", city: "Tallinn", name: "Tallinn Airport", country: "Estonia" },

  // Cyprus & Malta
  { iata: "LCA", city: "Larnaca", name: "Larnaca International Airport", country: "Cyprus" },
  { iata: "PFO", city: "Paphos", name: "Paphos International Airport", country: "Cyprus" },
  { iata: "MLA", city: "Malta", name: "Malta International Airport", country: "Malta" },

  // Russia
  { iata: "SVO", city: "Moscow", name: "Sheremetyevo International Airport", country: "Russia" },
  { iata: "DME", city: "Moscow", name: "Domodedovo International Airport", country: "Russia" },
  { iata: "LED", city: "Saint Petersburg", name: "Pulkovo Airport", country: "Russia" },

  // -------------------------------------------------------------------------
  // MIDDLE EAST
  // -------------------------------------------------------------------------
  { iata: "DXB", city: "Dubai", name: "Dubai International Airport", country: "United Arab Emirates" },
  { iata: "AUH", city: "Abu Dhabi", name: "Abu Dhabi International Airport", country: "United Arab Emirates" },
  { iata: "SHJ", city: "Sharjah", name: "Sharjah International Airport", country: "United Arab Emirates" },
  { iata: "DOH", city: "Doha", name: "Hamad International Airport", country: "Qatar" },
  { iata: "RUH", city: "Riyadh", name: "King Khalid International Airport", country: "Saudi Arabia" },
  { iata: "JED", city: "Jeddah", name: "King Abdulaziz International Airport", country: "Saudi Arabia" },
  { iata: "DMM", city: "Dammam", name: "King Fahd International Airport", country: "Saudi Arabia" },
  { iata: "MED", city: "Medina", name: "Prince Mohammad bin Abdulaziz Airport", country: "Saudi Arabia" },
  { iata: "BAH", city: "Bahrain", name: "Bahrain International Airport", country: "Bahrain" },
  { iata: "MCT", city: "Muscat", name: "Muscat International Airport", country: "Oman" },
  { iata: "KWI", city: "Kuwait City", name: "Kuwait International Airport", country: "Kuwait" },
  { iata: "AMM", city: "Amman", name: "Queen Alia International Airport", country: "Jordan" },
  { iata: "BEY", city: "Beirut", name: "Rafic Hariri International Airport", country: "Lebanon" },
  { iata: "TLV", city: "Tel Aviv", name: "Ben Gurion International Airport", country: "Israel" },

  // -------------------------------------------------------------------------
  // AFRICA
  // -------------------------------------------------------------------------

  // Southern Africa
  { iata: "JNB", city: "Johannesburg", name: "O.R. Tambo International Airport", country: "South Africa" },
  { iata: "CPT", city: "Cape Town", name: "Cape Town International Airport", country: "South Africa" },
  { iata: "DUR", city: "Durban", name: "King Shaka International Airport", country: "South Africa" },
  { iata: "WDH", city: "Windhoek", name: "Hosea Kutako International Airport", country: "Namibia" },
  { iata: "MRU", city: "Mauritius", name: "Sir Seewoosagur Ramgoolam Airport", country: "Mauritius" },

  // East Africa
  { iata: "NBO", city: "Nairobi", name: "Jomo Kenyatta International Airport", country: "Kenya" },
  { iata: "MBA", city: "Mombasa", name: "Moi International Airport", country: "Kenya" },
  { iata: "ADD", city: "Addis Ababa", name: "Bole International Airport", country: "Ethiopia" },
  { iata: "DAR", city: "Dar es Salaam", name: "Julius Nyerere International Airport", country: "Tanzania" },
  { iata: "ZNZ", city: "Zanzibar", name: "Abeid Amani Karume International Airport", country: "Tanzania" },
  { iata: "JRO", city: "Kilimanjaro", name: "Kilimanjaro International Airport", country: "Tanzania" },
  { iata: "EBB", city: "Entebbe", name: "Entebbe International Airport", country: "Uganda" },
  { iata: "KGL", city: "Kigali", name: "Kigali International Airport", country: "Rwanda" },
  { iata: "SEZ", city: "Mahe", name: "Seychelles International Airport", country: "Seychelles" },

  // North Africa
  { iata: "CAI", city: "Cairo", name: "Cairo International Airport", country: "Egypt" },
  { iata: "HRG", city: "Hurghada", name: "Hurghada International Airport", country: "Egypt" },
  { iata: "SSH", city: "Sharm El Sheikh", name: "Sharm El Sheikh International Airport", country: "Egypt" },
  { iata: "LXR", city: "Luxor", name: "Luxor International Airport", country: "Egypt" },
  { iata: "CMN", city: "Casablanca", name: "Mohammed V International Airport", country: "Morocco" },
  { iata: "RAK", city: "Marrakech", name: "Marrakech Menara Airport", country: "Morocco" },
  { iata: "TNG", city: "Tangier", name: "Tangier Ibn Battouta Airport", country: "Morocco" },
  { iata: "ALG", city: "Algiers", name: "Houari Boumediene Airport", country: "Algeria" },
  { iata: "TUN", city: "Tunis", name: "Tunis-Carthage International Airport", country: "Tunisia" },

  // West Africa
  { iata: "LOS", city: "Lagos", name: "Murtala Muhammed International Airport", country: "Nigeria" },
  { iata: "ABV", city: "Abuja", name: "Nnamdi Azikiwe International Airport", country: "Nigeria" },
  { iata: "ACC", city: "Accra", name: "Kotoka International Airport", country: "Ghana" },
  { iata: "DSS", city: "Dakar", name: "Blaise Diagne International Airport", country: "Senegal" },
  { iata: "ABJ", city: "Abidjan", name: "Felix-Houphouet-Boigny Airport", country: "Ivory Coast" },

  // -------------------------------------------------------------------------
  // NORTH AMERICA
  // -------------------------------------------------------------------------

  // United States — Northeast
  { iata: "JFK", city: "New York", name: "John F. Kennedy International Airport", country: "United States" },
  { iata: "LGA", city: "New York", name: "LaGuardia Airport", country: "United States" },
  { iata: "EWR", city: "Newark", name: "Newark Liberty International Airport", country: "United States" },
  { iata: "BOS", city: "Boston", name: "Logan International Airport", country: "United States" },
  { iata: "PHL", city: "Philadelphia", name: "Philadelphia International Airport", country: "United States" },
  { iata: "IAD", city: "Washington", name: "Washington Dulles International Airport", country: "United States" },
  { iata: "DCA", city: "Washington", name: "Ronald Reagan Washington National Airport", country: "United States" },
  { iata: "BWI", city: "Baltimore", name: "Baltimore/Washington International Airport", country: "United States" },
  { iata: "PIT", city: "Pittsburgh", name: "Pittsburgh International Airport", country: "United States" },
  { iata: "BDL", city: "Hartford", name: "Bradley International Airport", country: "United States" },
  { iata: "PVD", city: "Providence", name: "T.F. Green International Airport", country: "United States" },

  // United States — Southeast
  { iata: "MIA", city: "Miami", name: "Miami International Airport", country: "United States" },
  { iata: "FLL", city: "Fort Lauderdale", name: "Fort Lauderdale-Hollywood International Airport", country: "United States" },
  { iata: "MCO", city: "Orlando", name: "Orlando International Airport", country: "United States" },
  { iata: "TPA", city: "Tampa", name: "Tampa International Airport", country: "United States" },
  { iata: "ATL", city: "Atlanta", name: "Hartsfield-Jackson Atlanta International Airport", country: "United States" },
  { iata: "CLT", city: "Charlotte", name: "Charlotte Douglas International Airport", country: "United States" },
  { iata: "RDU", city: "Raleigh", name: "Raleigh-Durham International Airport", country: "United States" },
  { iata: "BNA", city: "Nashville", name: "Nashville International Airport", country: "United States" },
  { iata: "MSY", city: "New Orleans", name: "Louis Armstrong New Orleans International Airport", country: "United States" },
  { iata: "JAX", city: "Jacksonville", name: "Jacksonville International Airport", country: "United States" },
  { iata: "RIC", city: "Richmond", name: "Richmond International Airport", country: "United States" },
  { iata: "RSW", city: "Fort Myers", name: "Southwest Florida International Airport", country: "United States" },
  { iata: "PBI", city: "West Palm Beach", name: "Palm Beach International Airport", country: "United States" },

  // United States — Midwest
  { iata: "ORD", city: "Chicago", name: "Chicago O'Hare International Airport", country: "United States" },
  { iata: "MDW", city: "Chicago", name: "Chicago Midway International Airport", country: "United States" },
  { iata: "DTW", city: "Detroit", name: "Detroit Metropolitan Wayne County Airport", country: "United States" },
  { iata: "MSP", city: "Minneapolis", name: "Minneapolis-Saint Paul International Airport", country: "United States" },
  { iata: "STL", city: "Saint Louis", name: "St. Louis Lambert International Airport", country: "United States" },
  { iata: "CVG", city: "Cincinnati", name: "Cincinnati/Northern Kentucky International Airport", country: "United States" },
  { iata: "CLE", city: "Cleveland", name: "Cleveland Hopkins International Airport", country: "United States" },
  { iata: "CMH", city: "Columbus", name: "John Glenn Columbus International Airport", country: "United States" },
  { iata: "IND", city: "Indianapolis", name: "Indianapolis International Airport", country: "United States" },
  { iata: "MKE", city: "Milwaukee", name: "Milwaukee Mitchell International Airport", country: "United States" },
  { iata: "MCI", city: "Kansas City", name: "Kansas City International Airport", country: "United States" },

  // United States — South/Central
  { iata: "DFW", city: "Dallas", name: "Dallas/Fort Worth International Airport", country: "United States" },
  { iata: "DAL", city: "Dallas", name: "Dallas Love Field", country: "United States" },
  { iata: "IAH", city: "Houston", name: "George Bush Intercontinental Airport", country: "United States" },
  { iata: "HOU", city: "Houston", name: "William P. Hobby Airport", country: "United States" },
  { iata: "AUS", city: "Austin", name: "Austin-Bergstrom International Airport", country: "United States" },
  { iata: "SAT", city: "San Antonio", name: "San Antonio International Airport", country: "United States" },
  { iata: "OKC", city: "Oklahoma City", name: "Will Rogers World Airport", country: "United States" },
  { iata: "MEM", city: "Memphis", name: "Memphis International Airport", country: "United States" },

  // United States — West
  { iata: "DEN", city: "Denver", name: "Denver International Airport", country: "United States" },
  { iata: "PHX", city: "Phoenix", name: "Phoenix Sky Harbor International Airport", country: "United States" },
  { iata: "LAS", city: "Las Vegas", name: "Harry Reid International Airport", country: "United States" },
  { iata: "SLC", city: "Salt Lake City", name: "Salt Lake City International Airport", country: "United States" },
  { iata: "ABQ", city: "Albuquerque", name: "Albuquerque International Sunport", country: "United States" },
  { iata: "TUS", city: "Tucson", name: "Tucson International Airport", country: "United States" },

  // United States — Pacific
  { iata: "LAX", city: "Los Angeles", name: "Los Angeles International Airport", country: "United States" },
  { iata: "SFO", city: "San Francisco", name: "San Francisco International Airport", country: "United States" },
  { iata: "SJC", city: "San Jose", name: "San Jose International Airport", country: "United States" },
  { iata: "OAK", city: "Oakland", name: "Oakland International Airport", country: "United States" },
  { iata: "SEA", city: "Seattle", name: "Seattle-Tacoma International Airport", country: "United States" },
  { iata: "SAN", city: "San Diego", name: "San Diego International Airport", country: "United States" },
  { iata: "PDX", city: "Portland", name: "Portland International Airport", country: "United States" },
  { iata: "SMF", city: "Sacramento", name: "Sacramento International Airport", country: "United States" },
  { iata: "SNA", city: "Santa Ana", name: "John Wayne Airport", country: "United States" },
  { iata: "BUR", city: "Burbank", name: "Hollywood Burbank Airport", country: "United States" },
  { iata: "ONT", city: "Ontario", name: "Ontario International Airport", country: "United States" },

  // United States — Hawaii & Alaska
  { iata: "HNL", city: "Honolulu", name: "Daniel K. Inouye International Airport", country: "United States" },
  { iata: "OGG", city: "Kahului", name: "Kahului Airport", country: "United States" },
  { iata: "KOA", city: "Kona", name: "Ellison Onizuka Kona International Airport", country: "United States" },
  { iata: "LIH", city: "Lihue", name: "Lihue Airport", country: "United States" },
  { iata: "ANC", city: "Anchorage", name: "Ted Stevens Anchorage International Airport", country: "United States" },

  // Canada
  { iata: "YVR", city: "Vancouver", name: "Vancouver International Airport", country: "Canada" },
  { iata: "YYZ", city: "Toronto", name: "Toronto Pearson International Airport", country: "Canada" },
  { iata: "YUL", city: "Montreal", name: "Montreal-Trudeau International Airport", country: "Canada" },
  { iata: "YOW", city: "Ottawa", name: "Ottawa Macdonald-Cartier International Airport", country: "Canada" },
  { iata: "YYC", city: "Calgary", name: "Calgary International Airport", country: "Canada" },
  { iata: "YEG", city: "Edmonton", name: "Edmonton International Airport", country: "Canada" },
  { iata: "YWG", city: "Winnipeg", name: "Winnipeg James Armstrong Richardson International Airport", country: "Canada" },
  { iata: "YHZ", city: "Halifax", name: "Halifax Stanfield International Airport", country: "Canada" },
  { iata: "YQB", city: "Quebec City", name: "Quebec City Jean Lesage International Airport", country: "Canada" },
  { iata: "YXE", city: "Saskatoon", name: "Saskatoon John G. Diefenbaker International Airport", country: "Canada" },
  { iata: "YQR", city: "Regina", name: "Regina International Airport", country: "Canada" },
  { iata: "YYJ", city: "Victoria", name: "Victoria International Airport", country: "Canada" },
  { iata: "YKF", city: "Kitchener", name: "Region of Waterloo International Airport", country: "Canada" },
  { iata: "YLW", city: "Kelowna", name: "Kelowna International Airport", country: "Canada" },
  { iata: "YSJ", city: "Saint John", name: "Saint John Airport", country: "Canada" },

  // Mexico
  { iata: "MEX", city: "Mexico City", name: "Benito Juarez International Airport", country: "Mexico" },
  { iata: "CUN", city: "Cancun", name: "Cancun International Airport", country: "Mexico" },
  { iata: "GDL", city: "Guadalajara", name: "Guadalajara International Airport", country: "Mexico" },
  { iata: "MTY", city: "Monterrey", name: "Monterrey International Airport", country: "Mexico" },
  { iata: "SJD", city: "San Jose del Cabo", name: "Los Cabos International Airport", country: "Mexico" },
  { iata: "PVR", city: "Puerto Vallarta", name: "Gustavo Diaz Ordaz International Airport", country: "Mexico" },
  { iata: "TIJ", city: "Tijuana", name: "Tijuana International Airport", country: "Mexico" },

  // -------------------------------------------------------------------------
  // CARIBBEAN & CENTRAL AMERICA
  // -------------------------------------------------------------------------
  { iata: "SJU", city: "San Juan", name: "Luis Munoz Marin International Airport", country: "Puerto Rico" },
  { iata: "NAS", city: "Nassau", name: "Lynden Pindling International Airport", country: "Bahamas" },
  { iata: "MBJ", city: "Montego Bay", name: "Sangster International Airport", country: "Jamaica" },
  { iata: "KIN", city: "Kingston", name: "Norman Manley International Airport", country: "Jamaica" },
  { iata: "PUJ", city: "Punta Cana", name: "Punta Cana International Airport", country: "Dominican Republic" },
  { iata: "SDQ", city: "Santo Domingo", name: "Las Americas International Airport", country: "Dominican Republic" },
  { iata: "BGI", city: "Bridgetown", name: "Grantley Adams International Airport", country: "Barbados" },
  { iata: "POS", city: "Port of Spain", name: "Piarco International Airport", country: "Trinidad and Tobago" },
  { iata: "AUA", city: "Oranjestad", name: "Queen Beatrix International Airport", country: "Aruba" },
  { iata: "CUR", city: "Willemstad", name: "Curacao International Airport", country: "Curacao" },
  { iata: "SXM", city: "Philipsburg", name: "Princess Juliana International Airport", country: "Sint Maarten" },
  { iata: "HAV", city: "Havana", name: "Jose Marti International Airport", country: "Cuba" },
  { iata: "PTY", city: "Panama City", name: "Tocumen International Airport", country: "Panama" },
  { iata: "SJO", city: "San Jose", name: "Juan Santamaria International Airport", country: "Costa Rica" },
  { iata: "LIR", city: "Liberia", name: "Daniel Oduber Quiros International Airport", country: "Costa Rica" },
  { iata: "GUA", city: "Guatemala City", name: "La Aurora International Airport", country: "Guatemala" },
  { iata: "SAL", city: "San Salvador", name: "Oscar Arnulfo Romero International Airport", country: "El Salvador" },
  { iata: "BZE", city: "Belize City", name: "Philip S.W. Goldson International Airport", country: "Belize" },

  // -------------------------------------------------------------------------
  // SOUTH AMERICA
  // -------------------------------------------------------------------------

  // Brazil
  { iata: "GRU", city: "Sao Paulo", name: "Sao Paulo-Guarulhos International Airport", country: "Brazil" },
  { iata: "CGH", city: "Sao Paulo", name: "Congonhas Airport", country: "Brazil" },
  { iata: "GIG", city: "Rio de Janeiro", name: "Rio de Janeiro-Galeao International Airport", country: "Brazil" },
  { iata: "SDU", city: "Rio de Janeiro", name: "Santos Dumont Airport", country: "Brazil" },
  { iata: "BSB", city: "Brasilia", name: "Brasilia International Airport", country: "Brazil" },
  { iata: "CNF", city: "Belo Horizonte", name: "Tancredo Neves International Airport", country: "Brazil" },
  { iata: "SSA", city: "Salvador", name: "Deputado Luis Eduardo Magalhaes Airport", country: "Brazil" },
  { iata: "REC", city: "Recife", name: "Recife/Guararapes International Airport", country: "Brazil" },
  { iata: "FOR", city: "Fortaleza", name: "Pinto Martins International Airport", country: "Brazil" },
  { iata: "CWB", city: "Curitiba", name: "Afonso Pena International Airport", country: "Brazil" },
  { iata: "POA", city: "Porto Alegre", name: "Salgado Filho International Airport", country: "Brazil" },
  { iata: "FLN", city: "Florianopolis", name: "Hercilio Luz International Airport", country: "Brazil" },
  { iata: "MAO", city: "Manaus", name: "Eduardo Gomes International Airport", country: "Brazil" },
  { iata: "BEL", city: "Belem", name: "Val de Cans International Airport", country: "Brazil" },

  // Argentina
  { iata: "EZE", city: "Buenos Aires", name: "Ministro Pistarini International Airport", country: "Argentina" },
  { iata: "AEP", city: "Buenos Aires", name: "Aeroparque Jorge Newbery", country: "Argentina" },
  { iata: "COR", city: "Cordoba", name: "Ingeniero Ambrosio Taravella Airport", country: "Argentina" },
  { iata: "MDZ", city: "Mendoza", name: "El Plumerillo Airport", country: "Argentina" },
  { iata: "BRC", city: "Bariloche", name: "Teniente Luis Candelaria Airport", country: "Argentina" },
  { iata: "IGR", city: "Iguazu", name: "Cataratas del Iguazu International Airport", country: "Argentina" },
  { iata: "USH", city: "Ushuaia", name: "Malvinas Argentinas Airport", country: "Argentina" },

  // Chile
  { iata: "SCL", city: "Santiago", name: "Arturo Merino Benitez Airport", country: "Chile" },

  // Colombia
  { iata: "BOG", city: "Bogota", name: "El Dorado International Airport", country: "Colombia" },
  { iata: "MDE", city: "Medellin", name: "Jose Maria Cordova International Airport", country: "Colombia" },
  { iata: "CTG", city: "Cartagena", name: "Rafael Nunez International Airport", country: "Colombia" },
  { iata: "CLO", city: "Cali", name: "Alfonso Bonilla Aragon International Airport", country: "Colombia" },

  // Peru
  { iata: "LIM", city: "Lima", name: "Jorge Chavez International Airport", country: "Peru" },
  { iata: "CUZ", city: "Cusco", name: "Alejandro Velasco Astete International Airport", country: "Peru" },

  // Ecuador
  { iata: "UIO", city: "Quito", name: "Mariscal Sucre International Airport", country: "Ecuador" },
  { iata: "GYE", city: "Guayaquil", name: "Jose Joaquin de Olmedo International Airport", country: "Ecuador" },

  // Other South America
  { iata: "CCS", city: "Caracas", name: "Simon Bolivar International Airport", country: "Venezuela" },
  { iata: "MVD", city: "Montevideo", name: "Carrasco International Airport", country: "Uruguay" },
  { iata: "ASU", city: "Asuncion", name: "Silvio Pettirossi International Airport", country: "Paraguay" },
  { iata: "VVI", city: "Santa Cruz", name: "Viru Viru International Airport", country: "Bolivia" },
  { iata: "LPB", city: "La Paz", name: "El Alto International Airport", country: "Bolivia" },
  { iata: "GEO", city: "Georgetown", name: "Cheddi Jagan International Airport", country: "Guyana" },

  // -------------------------------------------------------------------------
  // ASIA
  // -------------------------------------------------------------------------

  // Japan
  { iata: "NRT", city: "Tokyo", name: "Narita International Airport", country: "Japan" },
  { iata: "HND", city: "Tokyo", name: "Haneda Airport", country: "Japan" },
  { iata: "KIX", city: "Osaka", name: "Kansai International Airport", country: "Japan" },
  { iata: "ITM", city: "Osaka", name: "Osaka Itami Airport", country: "Japan" },
  { iata: "NGO", city: "Nagoya", name: "Chubu Centrair International Airport", country: "Japan" },
  { iata: "CTS", city: "Sapporo", name: "New Chitose Airport", country: "Japan" },
  { iata: "FUK", city: "Fukuoka", name: "Fukuoka Airport", country: "Japan" },
  { iata: "OKA", city: "Okinawa", name: "Naha Airport", country: "Japan" },

  // South Korea
  { iata: "ICN", city: "Seoul", name: "Incheon International Airport", country: "South Korea" },
  { iata: "GMP", city: "Seoul", name: "Gimpo International Airport", country: "South Korea" },
  { iata: "PUS", city: "Busan", name: "Gimhae International Airport", country: "South Korea" },
  { iata: "CJU", city: "Jeju", name: "Jeju International Airport", country: "South Korea" },

  // China
  { iata: "PEK", city: "Beijing", name: "Beijing Capital International Airport", country: "China" },
  { iata: "PKX", city: "Beijing", name: "Beijing Daxing International Airport", country: "China" },
  { iata: "PVG", city: "Shanghai", name: "Shanghai Pudong International Airport", country: "China" },
  { iata: "SHA", city: "Shanghai", name: "Shanghai Hongqiao International Airport", country: "China" },
  { iata: "CAN", city: "Guangzhou", name: "Guangzhou Baiyun International Airport", country: "China" },
  { iata: "SZX", city: "Shenzhen", name: "Shenzhen Bao'an International Airport", country: "China" },
  { iata: "CTU", city: "Chengdu", name: "Chengdu Tianfu International Airport", country: "China" },
  { iata: "CKG", city: "Chongqing", name: "Chongqing Jiangbei International Airport", country: "China" },
  { iata: "XIY", city: "Xi'an", name: "Xi'an Xianyang International Airport", country: "China" },
  { iata: "HGH", city: "Hangzhou", name: "Hangzhou Xiaoshan International Airport", country: "China" },
  { iata: "WUH", city: "Wuhan", name: "Wuhan Tianhe International Airport", country: "China" },
  { iata: "KMG", city: "Kunming", name: "Kunming Changshui International Airport", country: "China" },
  { iata: "NKG", city: "Nanjing", name: "Nanjing Lukou International Airport", country: "China" },
  { iata: "XMN", city: "Xiamen", name: "Xiamen Gaoqi International Airport", country: "China" },

  // Hong Kong, Macau, Taiwan
  { iata: "HKG", city: "Hong Kong", name: "Hong Kong International Airport", country: "Hong Kong" },
  { iata: "MFM", city: "Macau", name: "Macau International Airport", country: "Macau" },
  { iata: "TPE", city: "Taipei", name: "Taiwan Taoyuan International Airport", country: "Taiwan" },
  { iata: "KHH", city: "Kaohsiung", name: "Kaohsiung International Airport", country: "Taiwan" },

  // Southeast Asia
  { iata: "SIN", city: "Singapore", name: "Singapore Changi Airport", country: "Singapore" },
  { iata: "BKK", city: "Bangkok", name: "Suvarnabhumi Airport", country: "Thailand" },
  { iata: "DMK", city: "Bangkok", name: "Don Mueang International Airport", country: "Thailand" },
  { iata: "CNX", city: "Chiang Mai", name: "Chiang Mai International Airport", country: "Thailand" },
  { iata: "HKT", city: "Phuket", name: "Phuket International Airport", country: "Thailand" },
  { iata: "KUL", city: "Kuala Lumpur", name: "Kuala Lumpur International Airport", country: "Malaysia" },
  { iata: "PEN", city: "Penang", name: "Penang International Airport", country: "Malaysia" },
  { iata: "BKI", city: "Kota Kinabalu", name: "Kota Kinabalu International Airport", country: "Malaysia" },
  { iata: "KCH", city: "Kuching", name: "Kuching International Airport", country: "Malaysia" },
  { iata: "CGK", city: "Jakarta", name: "Soekarno-Hatta International Airport", country: "Indonesia" },
  { iata: "DPS", city: "Bali", name: "Ngurah Rai International Airport", country: "Indonesia" },
  { iata: "SUB", city: "Surabaya", name: "Juanda International Airport", country: "Indonesia" },
  { iata: "UPG", city: "Makassar", name: "Sultan Hasanuddin International Airport", country: "Indonesia" },
  { iata: "MNL", city: "Manila", name: "Ninoy Aquino International Airport", country: "Philippines" },
  { iata: "CEB", city: "Cebu", name: "Mactan-Cebu International Airport", country: "Philippines" },
  { iata: "SGN", city: "Ho Chi Minh City", name: "Tan Son Nhat International Airport", country: "Vietnam" },
  { iata: "HAN", city: "Hanoi", name: "Noi Bai International Airport", country: "Vietnam" },
  { iata: "DAD", city: "Da Nang", name: "Da Nang International Airport", country: "Vietnam" },
  { iata: "PNH", city: "Phnom Penh", name: "Phnom Penh International Airport", country: "Cambodia" },
  { iata: "REP", city: "Siem Reap", name: "Siem Reap International Airport", country: "Cambodia" },
  { iata: "RGN", city: "Yangon", name: "Yangon International Airport", country: "Myanmar" },
  { iata: "VTE", city: "Vientiane", name: "Wattay International Airport", country: "Laos" },
  { iata: "BWN", city: "Bandar Seri Begawan", name: "Brunei International Airport", country: "Brunei" },

  // South Asia
  { iata: "DEL", city: "Delhi", name: "Indira Gandhi International Airport", country: "India" },
  { iata: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport", country: "India" },
  { iata: "BLR", city: "Bangalore", name: "Kempegowda International Airport", country: "India" },
  { iata: "MAA", city: "Chennai", name: "Chennai International Airport", country: "India" },
  { iata: "HYD", city: "Hyderabad", name: "Rajiv Gandhi International Airport", country: "India" },
  { iata: "CCU", city: "Kolkata", name: "Netaji Subhas Chandra Bose International Airport", country: "India" },
  { iata: "COK", city: "Kochi", name: "Cochin International Airport", country: "India" },
  { iata: "GOI", city: "Goa", name: "Goa International Airport", country: "India" },
  { iata: "AMD", city: "Ahmedabad", name: "Sardar Vallabhbhai Patel International Airport", country: "India" },
  { iata: "PNQ", city: "Pune", name: "Pune Airport", country: "India" },
  { iata: "CMB", city: "Colombo", name: "Bandaranaike International Airport", country: "Sri Lanka" },
  { iata: "DAC", city: "Dhaka", name: "Hazrat Shahjalal International Airport", country: "Bangladesh" },
  { iata: "KTM", city: "Kathmandu", name: "Tribhuvan International Airport", country: "Nepal" },
  { iata: "MLE", city: "Male", name: "Velana International Airport", country: "Maldives" },
  { iata: "ISB", city: "Islamabad", name: "Islamabad International Airport", country: "Pakistan" },
  { iata: "KHI", city: "Karachi", name: "Jinnah International Airport", country: "Pakistan" },
  { iata: "LHE", city: "Lahore", name: "Allama Iqbal International Airport", country: "Pakistan" },

  // Central Asia & Caucasus
  { iata: "NQZ", city: "Astana", name: "Nursultan Nazarbayev International Airport", country: "Kazakhstan" },
  { iata: "ALA", city: "Almaty", name: "Almaty International Airport", country: "Kazakhstan" },
  { iata: "TAS", city: "Tashkent", name: "Tashkent International Airport", country: "Uzbekistan" },
  { iata: "TBS", city: "Tbilisi", name: "Shota Rustaveli Tbilisi International Airport", country: "Georgia" },
  { iata: "EVN", city: "Yerevan", name: "Zvartnots International Airport", country: "Armenia" },
  { iata: "GYD", city: "Baku", name: "Heydar Aliyev International Airport", country: "Azerbaijan" },

  // -------------------------------------------------------------------------
  // OCEANIA
  // -------------------------------------------------------------------------

  // Australia
  { iata: "SYD", city: "Sydney", name: "Sydney Airport", country: "Australia" },
  { iata: "MEL", city: "Melbourne", name: "Melbourne Airport", country: "Australia" },
  { iata: "BNE", city: "Brisbane", name: "Brisbane Airport", country: "Australia" },
  { iata: "PER", city: "Perth", name: "Perth Airport", country: "Australia" },
  { iata: "ADL", city: "Adelaide", name: "Adelaide Airport", country: "Australia" },
  { iata: "OOL", city: "Gold Coast", name: "Gold Coast Airport", country: "Australia" },
  { iata: "CBR", city: "Canberra", name: "Canberra Airport", country: "Australia" },
  { iata: "CNS", city: "Cairns", name: "Cairns Airport", country: "Australia" },
  { iata: "DRW", city: "Darwin", name: "Darwin International Airport", country: "Australia" },
  { iata: "HBA", city: "Hobart", name: "Hobart International Airport", country: "Australia" },

  // New Zealand
  { iata: "AKL", city: "Auckland", name: "Auckland Airport", country: "New Zealand" },
  { iata: "WLG", city: "Wellington", name: "Wellington Airport", country: "New Zealand" },
  { iata: "CHC", city: "Christchurch", name: "Christchurch Airport", country: "New Zealand" },
  { iata: "ZQN", city: "Queenstown", name: "Queenstown Airport", country: "New Zealand" },

  // Pacific Islands
  { iata: "NAN", city: "Nadi", name: "Nadi International Airport", country: "Fiji" },
  { iata: "PPT", city: "Papeete", name: "Faa'a International Airport", country: "French Polynesia" },
  { iata: "NOU", city: "Noumea", name: "La Tontouta International Airport", country: "New Caledonia" },
  { iata: "APW", city: "Apia", name: "Faleolo International Airport", country: "Samoa" }
];

function normalizeText(input: string): string {
  return input.trim().toLowerCase();
}

export function resolveAirport(input: string): { airport?: Airport; note?: string } {
  const value = normalizeText(input);

  if (!value) {
    return { note: "Airport input was empty." };
  }

  const exactIata = AIRPORTS.find((airport) => airport.iata.toLowerCase() === value);
  if (exactIata) {
    return { airport: exactIata };
  }

  const exactCity = AIRPORTS.find((airport) => normalizeText(airport.city) === value);
  if (exactCity) {
    return { airport: exactCity, note: `Resolved '${input}' to ${exactCity.iata} (${exactCity.city}).` };
  }

  const fuzzyMatches = AIRPORTS.filter((airport) => {
    const city = normalizeText(airport.city);
    const name = normalizeText(airport.name);
    return city.includes(value) || name.includes(value);
  });

  if (fuzzyMatches.length === 0) {
    return { note: `No airport match found for '${input}'.` };
  }

  const airport = fuzzyMatches[0];
  return { airport, note: `Fuzzy matched '${input}' to ${airport.iata} (${airport.city}).` };
}

export function supportedAirportsCount(): number {
  return AIRPORTS.length;
}
