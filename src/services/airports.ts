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
  { iata: "APW", city: "Apia", name: "Faleolo International Airport", country: "Samoa" },
  { iata: "SUV", city: "Suva", name: "Nausori International Airport", country: "Fiji" },
  { iata: "TBU", city: "Nukualofa", name: "Fua'amotu International Airport", country: "Tonga" },
  { iata: "RAR", city: "Rarotonga", name: "Rarotonga International Airport", country: "Cook Islands" },
  { iata: "POM", city: "Port Moresby", name: "Jacksons International Airport", country: "Papua New Guinea" },
  { iata: "HIR", city: "Honiara", name: "Henderson International Airport", country: "Solomon Islands" },
  { iata: "VLI", city: "Port Vila", name: "Bauerfield International Airport", country: "Vanuatu" },
  { iata: "GUM", city: "Hagatna", name: "Antonio B. Won Pat International Airport", country: "Guam" },

  // -------------------------------------------------------------------------
  // ADDITIONAL EUROPE — Regional & Secondary
  // -------------------------------------------------------------------------

  // UK regional
  { iata: "ABZ", city: "Aberdeen", name: "Aberdeen International Airport", country: "United Kingdom" },
  { iata: "LPL", city: "Liverpool", name: "Liverpool John Lennon Airport", country: "United Kingdom" },
  { iata: "EMA", city: "East Midlands", name: "East Midlands Airport", country: "United Kingdom" },
  { iata: "SOU", city: "Southampton", name: "Southampton Airport", country: "United Kingdom" },
  { iata: "CWL", city: "Cardiff", name: "Cardiff Airport", country: "United Kingdom" },
  { iata: "INV", city: "Inverness", name: "Inverness Airport", country: "United Kingdom" },
  { iata: "LBA", city: "Leeds", name: "Leeds Bradford Airport", country: "United Kingdom" },
  { iata: "DSA", city: "Doncaster", name: "Doncaster Sheffield Airport", country: "United Kingdom" },
  { iata: "JER", city: "Jersey", name: "Jersey Airport", country: "United Kingdom" },

  // Germany regional
  { iata: "BRE", city: "Bremen", name: "Bremen Airport", country: "Germany" },
  { iata: "DTM", city: "Dortmund", name: "Dortmund Airport", country: "Germany" },
  { iata: "FMO", city: "Munster", name: "Munster Osnabruck Airport", country: "Germany" },
  { iata: "PAD", city: "Paderborn", name: "Paderborn Lippstadt Airport", country: "Germany" },
  { iata: "DRS", city: "Dresden", name: "Dresden Airport", country: "Germany" },
  { iata: "FKB", city: "Karlsruhe", name: "Karlsruhe/Baden-Baden Airport", country: "Germany" },

  // France regional
  { iata: "SXB", city: "Strasbourg", name: "Strasbourg Airport", country: "France" },
  { iata: "RNS", city: "Rennes", name: "Rennes Airport", country: "France" },
  { iata: "AJA", city: "Ajaccio", name: "Ajaccio Napoleon Bonaparte Airport", country: "France" },
  { iata: "BIA", city: "Bastia", name: "Bastia-Poretta Airport", country: "France" },
  { iata: "MPL", city: "Montpellier", name: "Montpellier Airport", country: "France" },
  { iata: "BIQ", city: "Biarritz", name: "Biarritz Airport", country: "France" },
  { iata: "LIL", city: "Lille", name: "Lille Airport", country: "France" },
  { iata: "CFE", city: "Clermont-Ferrand", name: "Clermont-Ferrand Auvergne Airport", country: "France" },

  // Spain regional
  { iata: "GRO", city: "Girona", name: "Girona-Costa Brava Airport", country: "Spain" },
  { iata: "SCQ", city: "Santiago de Compostela", name: "Santiago de Compostela Airport", country: "Spain" },
  { iata: "OVD", city: "Asturias", name: "Asturias Airport", country: "Spain" },
  { iata: "ACE", city: "Lanzarote", name: "Lanzarote Airport", country: "Spain" },
  { iata: "FUE", city: "Fuerteventura", name: "Fuerteventura Airport", country: "Spain" },
  { iata: "MAH", city: "Menorca", name: "Menorca Airport", country: "Spain" },
  { iata: "REU", city: "Reus", name: "Reus Airport", country: "Spain" },
  { iata: "ZAZ", city: "Zaragoza", name: "Zaragoza Airport", country: "Spain" },
  { iata: "MJV", city: "Murcia", name: "Region de Murcia Airport", country: "Spain" },

  // Italy regional
  { iata: "BGY", city: "Bergamo", name: "Milan Bergamo Airport", country: "Italy" },
  { iata: "OLB", city: "Olbia", name: "Olbia Costa Smeralda Airport", country: "Italy" },
  { iata: "BRI", city: "Bari", name: "Bari Karol Wojtyla Airport", country: "Italy" },
  { iata: "SUF", city: "Lamezia Terme", name: "Lamezia Terme Airport", country: "Italy" },
  { iata: "TSF", city: "Treviso", name: "Treviso Airport", country: "Italy" },
  { iata: "GOA", city: "Genoa", name: "Genoa Cristoforo Colombo Airport", country: "Italy" },
  { iata: "AHO", city: "Alghero", name: "Alghero-Fertilia Airport", country: "Italy" },
  { iata: "VRN", city: "Verona", name: "Verona Villafranca Airport", country: "Italy" },
  { iata: "TPS", city: "Trapani", name: "Trapani Birgi Airport", country: "Italy" },
  { iata: "CRV", city: "Crotone", name: "Crotone Airport", country: "Italy" },
  { iata: "REG", city: "Reggio Calabria", name: "Reggio Calabria Airport", country: "Italy" },
  { iata: "PEG", city: "Perugia", name: "Perugia San Francesco d'Assisi Airport", country: "Italy" },

  // Greece regional
  { iata: "CHQ", city: "Chania", name: "Chania International Airport", country: "Greece" },
  { iata: "KGS", city: "Kos", name: "Kos Island International Airport", country: "Greece" },
  { iata: "ZTH", city: "Zakynthos", name: "Zakynthos International Airport", country: "Greece" },
  { iata: "SMI", city: "Samos", name: "Samos Airport", country: "Greece" },
  { iata: "EFL", city: "Kefalonia", name: "Kefalonia Airport", country: "Greece" },
  { iata: "KVA", city: "Kavala", name: "Kavala International Airport", country: "Greece" },
  { iata: "JSI", city: "Skiathos", name: "Skiathos Island Airport", country: "Greece" },
  { iata: "PVK", city: "Preveza", name: "Aktion National Airport", country: "Greece" },

  // Turkey regional
  { iata: "GZT", city: "Gaziantep", name: "Gaziantep Oguzeli Airport", country: "Turkey" },
  { iata: "TZX", city: "Trabzon", name: "Trabzon Airport", country: "Turkey" },
  { iata: "ASR", city: "Kayseri", name: "Kayseri Erkilet Airport", country: "Turkey" },
  { iata: "VAS", city: "Sivas", name: "Sivas Nuri Demirag Airport", country: "Turkey" },
  { iata: "SZF", city: "Samsun", name: "Samsun-Carsamba Airport", country: "Turkey" },

  // Scandinavia regional
  { iata: "BLL", city: "Billund", name: "Billund Airport", country: "Denmark" },
  { iata: "SVG", city: "Stavanger", name: "Stavanger Airport", country: "Norway" },
  { iata: "BOO", city: "Bodo", name: "Bodo Airport", country: "Norway" },
  { iata: "TOS", city: "Tromso", name: "Tromso Airport", country: "Norway" },
  { iata: "AES", city: "Alesund", name: "Alesund Airport", country: "Norway" },
  { iata: "MMX", city: "Malmo", name: "Malmo Airport", country: "Sweden" },
  { iata: "LLA", city: "Lulea", name: "Lulea Airport", country: "Sweden" },
  { iata: "UME", city: "Umea", name: "Umea Airport", country: "Sweden" },
  { iata: "VBY", city: "Visby", name: "Visby Airport", country: "Sweden" },
  { iata: "TMP", city: "Tampere", name: "Tampere-Pirkkala Airport", country: "Finland" },
  { iata: "TKU", city: "Turku", name: "Turku Airport", country: "Finland" },
  { iata: "OUL", city: "Oulu", name: "Oulu Airport", country: "Finland" },
  { iata: "RVN", city: "Rovaniemi", name: "Rovaniemi Airport", country: "Finland" },
  { iata: "KTT", city: "Kittila", name: "Kittila Airport", country: "Finland" },

  // Poland regional
  { iata: "POZ", city: "Poznan", name: "Poznan-Lawica Airport", country: "Poland" },
  { iata: "KTW", city: "Katowice", name: "Katowice Airport", country: "Poland" },
  { iata: "RZE", city: "Rzeszow", name: "Rzeszow-Jasionka Airport", country: "Poland" },
  { iata: "SZZ", city: "Szczecin", name: "Szczecin-Goleniow Airport", country: "Poland" },
  { iata: "BZG", city: "Bydgoszcz", name: "Bydgoszcz Ignacy Jan Paderewski Airport", country: "Poland" },
  { iata: "LCJ", city: "Lodz", name: "Lodz Wladyslaw Reymont Airport", country: "Poland" },

  // Romania regional
  { iata: "TSR", city: "Timisoara", name: "Traian Vuia International Airport", country: "Romania" },
  { iata: "IAS", city: "Iasi", name: "Iasi International Airport", country: "Romania" },
  { iata: "SBZ", city: "Sibiu", name: "Sibiu International Airport", country: "Romania" },
  { iata: "BCM", city: "Bacau", name: "George Enescu International Airport", country: "Romania" },
  { iata: "CRA", city: "Craiova", name: "Craiova Airport", country: "Romania" },
  { iata: "SUJ", city: "Satu Mare", name: "Satu Mare Airport", country: "Romania" },

  // Austria regional
  { iata: "GRZ", city: "Graz", name: "Graz Airport", country: "Austria" },
  { iata: "KLU", city: "Klagenfurt", name: "Klagenfurt Airport", country: "Austria" },
  { iata: "LNZ", city: "Linz", name: "Linz Airport", country: "Austria" },

  // Czech Republic regional
  { iata: "BRQ", city: "Brno", name: "Brno-Turany Airport", country: "Czech Republic" },
  { iata: "OSR", city: "Ostrava", name: "Ostrava Leos Janacek Airport", country: "Czech Republic" },

  // Croatia regional
  { iata: "PUY", city: "Pula", name: "Pula Airport", country: "Croatia" },
  { iata: "ZAD", city: "Zadar", name: "Zadar Airport", country: "Croatia" },
  { iata: "RJK", city: "Rijeka", name: "Rijeka Airport", country: "Croatia" },

  // Bulgaria regional
  { iata: "BOJ", city: "Burgas", name: "Burgas Airport", country: "Bulgaria" },

  // Serbia regional
  { iata: "NIS", city: "Nis", name: "Constantine the Great Airport", country: "Serbia" },

  // Ukraine
  { iata: "KBP", city: "Kyiv", name: "Boryspil International Airport", country: "Ukraine" },
  { iata: "LWO", city: "Lviv", name: "Lviv Danylo Halytskyi International Airport", country: "Ukraine" },
  { iata: "ODS", city: "Odesa", name: "Odesa International Airport", country: "Ukraine" },

  // Moldova
  { iata: "KIV", city: "Chisinau", name: "Chisinau International Airport", country: "Moldova" },

  // Kosovo
  { iata: "PRN", city: "Pristina", name: "Pristina International Airport", country: "Kosovo" },

  // Hungary regional
  { iata: "DEB", city: "Debrecen", name: "Debrecen International Airport", country: "Hungary" },

  // Portugal regional
  { iata: "TER", city: "Terceira", name: "Lajes Field Airport", country: "Portugal" },
  { iata: "HOR", city: "Horta", name: "Horta Airport", country: "Portugal" },

  // Netherlands regional
  { iata: "RTM", city: "Rotterdam", name: "Rotterdam The Hague Airport", country: "Netherlands" },
  { iata: "GRQ", city: "Groningen", name: "Groningen Airport Eelde", country: "Netherlands" },
  { iata: "MST", city: "Maastricht", name: "Maastricht Aachen Airport", country: "Netherlands" },

  // -------------------------------------------------------------------------
  // ADDITIONAL AFRICA
  // -------------------------------------------------------------------------

  // South Africa regional
  { iata: "PLZ", city: "Gqeberha", name: "Chief Dawid Stuurman International Airport", country: "South Africa" },
  { iata: "ELS", city: "East London", name: "King Phalo Airport", country: "South Africa" },
  { iata: "BFN", city: "Bloemfontein", name: "Bram Fischer International Airport", country: "South Africa" },
  { iata: "GRJ", city: "George", name: "George Airport", country: "South Africa" },

  // Morocco regional
  { iata: "FEZ", city: "Fez", name: "Fes-Saiss Airport", country: "Morocco" },
  { iata: "AGA", city: "Agadir", name: "Agadir Al Massira Airport", country: "Morocco" },
  { iata: "NDR", city: "Nador", name: "Nador International Airport", country: "Morocco" },
  { iata: "OZZ", city: "Ouarzazate", name: "Ouarzazate Airport", country: "Morocco" },
  { iata: "ESU", city: "Essaouira", name: "Essaouira Mogador Airport", country: "Morocco" },

  // Egypt regional
  { iata: "ASW", city: "Aswan", name: "Aswan International Airport", country: "Egypt" },
  { iata: "ALY", city: "Alexandria", name: "Borg El Arab International Airport", country: "Egypt" },
  { iata: "MRQ", city: "Marsa Alam", name: "Marsa Alam International Airport", country: "Egypt" },

  // East Africa regional
  { iata: "KIS", city: "Kisumu", name: "Kisumu International Airport", country: "Kenya" },
  { iata: "WIL", city: "Nairobi", name: "Wilson Airport", country: "Kenya" },

  // West Africa
  { iata: "PHC", city: "Port Harcourt", name: "Port Harcourt International Airport", country: "Nigeria" },
  { iata: "KAN", city: "Kano", name: "Mallam Aminu Kano International Airport", country: "Nigeria" },

  // Central Africa
  { iata: "DLA", city: "Douala", name: "Douala International Airport", country: "Cameroon" },
  { iata: "NSI", city: "Yaounde", name: "Yaounde Nsimalen International Airport", country: "Cameroon" },
  { iata: "FIH", city: "Kinshasa", name: "N'Djili Airport", country: "DR Congo" },
  { iata: "BZV", city: "Brazzaville", name: "Maya-Maya Airport", country: "Republic of the Congo" },
  { iata: "LBV", city: "Libreville", name: "Leon M'ba International Airport", country: "Gabon" },

  // Southern Africa
  { iata: "LAD", city: "Luanda", name: "Quatro de Fevereiro Airport", country: "Angola" },
  { iata: "MPM", city: "Maputo", name: "Maputo International Airport", country: "Mozambique" },
  { iata: "HRE", city: "Harare", name: "Robert Gabriel Mugabe International Airport", country: "Zimbabwe" },
  { iata: "VFA", city: "Victoria Falls", name: "Victoria Falls Airport", country: "Zimbabwe" },
  { iata: "LUN", city: "Lusaka", name: "Kenneth Kaunda International Airport", country: "Zambia" },
  { iata: "LVI", city: "Livingstone", name: "Harry Mwanga Nkumbula International Airport", country: "Zambia" },
  { iata: "GBE", city: "Gaborone", name: "Sir Seretse Khama International Airport", country: "Botswana" },
  { iata: "TNR", city: "Antananarivo", name: "Ivato International Airport", country: "Madagascar" },

  // Islands
  { iata: "RUN", city: "Saint-Denis", name: "Roland Garros Airport", country: "Reunion" },
  { iata: "SID", city: "Sal", name: "Amilcar Cabral International Airport", country: "Cape Verde" },
  { iata: "RAI", city: "Praia", name: "Nelson Mandela International Airport", country: "Cape Verde" },

  // -------------------------------------------------------------------------
  // ADDITIONAL MIDDLE EAST
  // -------------------------------------------------------------------------
  { iata: "DWC", city: "Dubai", name: "Al Maktoum International Airport", country: "United Arab Emirates" },
  { iata: "SLL", city: "Salalah", name: "Salalah Airport", country: "Oman" },
  { iata: "EBL", city: "Erbil", name: "Erbil International Airport", country: "Iraq" },
  { iata: "BGW", city: "Baghdad", name: "Baghdad International Airport", country: "Iraq" },
  { iata: "BSR", city: "Basra", name: "Basra International Airport", country: "Iraq" },

  // -------------------------------------------------------------------------
  // ADDITIONAL NORTH AMERICA
  // -------------------------------------------------------------------------

  // US regional
  { iata: "BOI", city: "Boise", name: "Boise Airport", country: "United States" },
  { iata: "RNO", city: "Reno", name: "Reno-Tahoe International Airport", country: "United States" },
  { iata: "TUL", city: "Tulsa", name: "Tulsa International Airport", country: "United States" },
  { iata: "OMA", city: "Omaha", name: "Eppley Airfield", country: "United States" },
  { iata: "SDF", city: "Louisville", name: "Louisville International Airport", country: "United States" },
  { iata: "BUF", city: "Buffalo", name: "Buffalo Niagara International Airport", country: "United States" },
  { iata: "SYR", city: "Syracuse", name: "Syracuse Hancock International Airport", country: "United States" },
  { iata: "ROC", city: "Rochester", name: "Frederick Douglass-Greater Rochester International Airport", country: "United States" },
  { iata: "ALB", city: "Albany", name: "Albany International Airport", country: "United States" },
  { iata: "PWM", city: "Portland", name: "Portland International Jetport", country: "United States" },
  { iata: "CHS", city: "Charleston", name: "Charleston International Airport", country: "United States" },
  { iata: "SAV", city: "Savannah", name: "Savannah/Hilton Head International Airport", country: "United States" },
  { iata: "PNS", city: "Pensacola", name: "Pensacola International Airport", country: "United States" },
  { iata: "GSP", city: "Greenville", name: "Greenville-Spartanburg International Airport", country: "United States" },
  { iata: "DSM", city: "Des Moines", name: "Des Moines International Airport", country: "United States" },
  { iata: "ICT", city: "Wichita", name: "Wichita Dwight D. Eisenhower National Airport", country: "United States" },
  { iata: "LIT", city: "Little Rock", name: "Bill and Hillary Clinton National Airport", country: "United States" },
  { iata: "ELP", city: "El Paso", name: "El Paso International Airport", country: "United States" },
  { iata: "BHM", city: "Birmingham", name: "Birmingham-Shuttlesworth International Airport", country: "United States" },
  { iata: "ORF", city: "Norfolk", name: "Norfolk International Airport", country: "United States" },
  { iata: "GRR", city: "Grand Rapids", name: "Gerald R. Ford International Airport", country: "United States" },
  { iata: "MYR", city: "Myrtle Beach", name: "Myrtle Beach International Airport", country: "United States" },
  { iata: "SRQ", city: "Sarasota", name: "Sarasota-Bradenton International Airport", country: "United States" },
  { iata: "PSP", city: "Palm Springs", name: "Palm Springs International Airport", country: "United States" },
  { iata: "FAT", city: "Fresno", name: "Fresno Yosemite International Airport", country: "United States" },
  { iata: "COS", city: "Colorado Springs", name: "Colorado Springs Airport", country: "United States" },
  { iata: "MDT", city: "Harrisburg", name: "Harrisburg International Airport", country: "United States" },
  { iata: "DAY", city: "Dayton", name: "Dayton International Airport", country: "United States" },
  { iata: "LEX", city: "Lexington", name: "Blue Grass Airport", country: "United States" },
  { iata: "AVL", city: "Asheville", name: "Asheville Regional Airport", country: "United States" },
  { iata: "MSN", city: "Madison", name: "Dane County Regional Airport", country: "United States" },
  { iata: "GEG", city: "Spokane", name: "Spokane International Airport", country: "United States" },
  { iata: "HSV", city: "Huntsville", name: "Huntsville International Airport", country: "United States" },
  { iata: "XNA", city: "Fayetteville", name: "Northwest Arkansas National Airport", country: "United States" },
  { iata: "CAE", city: "Columbia", name: "Columbia Metropolitan Airport", country: "United States" },

  // Canada regional
  { iata: "YYT", city: "St. John's", name: "St. John's International Airport", country: "Canada" },
  { iata: "YQG", city: "Windsor", name: "Windsor International Airport", country: "Canada" },
  { iata: "YXU", city: "London", name: "London International Airport", country: "Canada" },
  { iata: "YFC", city: "Fredericton", name: "Fredericton International Airport", country: "Canada" },
  { iata: "YMM", city: "Fort McMurray", name: "Fort McMurray Airport", country: "Canada" },
  { iata: "YQT", city: "Thunder Bay", name: "Thunder Bay Airport", country: "Canada" },
  { iata: "YZF", city: "Yellowknife", name: "Yellowknife Airport", country: "Canada" },
  { iata: "YXY", city: "Whitehorse", name: "Erik Nielsen Whitehorse International Airport", country: "Canada" },

  // Mexico regional
  { iata: "MID", city: "Merida", name: "Manuel Crescencio Rejon International Airport", country: "Mexico" },
  { iata: "OAX", city: "Oaxaca", name: "Xoxocotlan International Airport", country: "Mexico" },
  { iata: "BJX", city: "Leon", name: "Del Bajio International Airport", country: "Mexico" },
  { iata: "CUL", city: "Culiacan", name: "Federal de Bachigualato International Airport", country: "Mexico" },
  { iata: "HMO", city: "Hermosillo", name: "General Ignacio Pesqueira Garcia International Airport", country: "Mexico" },
  { iata: "QRO", city: "Queretaro", name: "Queretaro Intercontinental Airport", country: "Mexico" },
  { iata: "ZIH", city: "Ixtapa", name: "Ixtapa-Zihuatanejo International Airport", country: "Mexico" },
  { iata: "ACA", city: "Acapulco", name: "General Juan N. Alvarez International Airport", country: "Mexico" },
  { iata: "VSA", city: "Villahermosa", name: "Carlos Rovirosa Perez International Airport", country: "Mexico" },
  { iata: "AGU", city: "Aguascalientes", name: "Lic. Jesus Teran Peredo International Airport", country: "Mexico" },
  { iata: "SLP", city: "San Luis Potosi", name: "Ponciano Arriaga International Airport", country: "Mexico" },

  // -------------------------------------------------------------------------
  // ADDITIONAL CARIBBEAN
  // -------------------------------------------------------------------------
  { iata: "GCM", city: "Grand Cayman", name: "Owen Roberts International Airport", country: "Cayman Islands" },
  { iata: "STT", city: "Charlotte Amalie", name: "Cyril E. King Airport", country: "US Virgin Islands" },
  { iata: "STX", city: "Christiansted", name: "Henry E. Rohlsen Airport", country: "US Virgin Islands" },
  { iata: "BON", city: "Kralendijk", name: "Flamingo International Airport", country: "Bonaire" },
  { iata: "UVF", city: "Vieux Fort", name: "Hewanorra International Airport", country: "Saint Lucia" },
  { iata: "GND", city: "St. George's", name: "Maurice Bishop International Airport", country: "Grenada" },
  { iata: "ANU", city: "St. John's", name: "V.C. Bird International Airport", country: "Antigua and Barbuda" },
  { iata: "SKB", city: "Basseterre", name: "Robert L. Bradshaw International Airport", country: "Saint Kitts and Nevis" },
  { iata: "TAB", city: "Tobago", name: "A.N.R. Robinson International Airport", country: "Trinidad and Tobago" },
  { iata: "EIS", city: "Tortola", name: "Terrance B. Lettsome International Airport", country: "British Virgin Islands" },
  { iata: "PTP", city: "Pointe-a-Pitre", name: "Pointe-a-Pitre International Airport", country: "Guadeloupe" },
  { iata: "FDF", city: "Fort-de-France", name: "Martinique Aime Cesaire International Airport", country: "Martinique" },
  { iata: "TGU", city: "Tegucigalpa", name: "Toncontin International Airport", country: "Honduras" },
  { iata: "MGA", city: "Managua", name: "Augusto C. Sandino International Airport", country: "Nicaragua" },

  // -------------------------------------------------------------------------
  // ADDITIONAL SOUTH AMERICA
  // -------------------------------------------------------------------------

  // Brazil regional
  { iata: "NAT", city: "Natal", name: "Governador Aluizio Alves International Airport", country: "Brazil" },
  { iata: "MCZ", city: "Maceio", name: "Zumbi dos Palmares International Airport", country: "Brazil" },
  { iata: "AJU", city: "Aracaju", name: "Santa Maria Airport", country: "Brazil" },
  { iata: "SLZ", city: "Sao Luis", name: "Marechal Cunha Machado International Airport", country: "Brazil" },
  { iata: "THE", city: "Teresina", name: "Senador Petronio Portella Airport", country: "Brazil" },
  { iata: "CGR", city: "Campo Grande", name: "Campo Grande International Airport", country: "Brazil" },
  { iata: "GYN", city: "Goiania", name: "Santa Genoveva Airport", country: "Brazil" },
  { iata: "VCP", city: "Campinas", name: "Viracopos International Airport", country: "Brazil" },
  { iata: "JPA", city: "Joao Pessoa", name: "Presidente Castro Pinto International Airport", country: "Brazil" },
  { iata: "VIX", city: "Vitoria", name: "Eurico de Aguiar Salles Airport", country: "Brazil" },

  // Argentina regional
  { iata: "SLA", city: "Salta", name: "Martin Miguel de Guemes International Airport", country: "Argentina" },
  { iata: "TUC", city: "Tucuman", name: "Teniente General Benjamin Matienzo International Airport", country: "Argentina" },
  { iata: "ROS", city: "Rosario", name: "Islas Malvinas International Airport", country: "Argentina" },
  { iata: "NQN", city: "Neuquen", name: "Presidente Peron Airport", country: "Argentina" },

  // Chile regional
  { iata: "IQQ", city: "Iquique", name: "Diego Aracena International Airport", country: "Chile" },
  { iata: "ANF", city: "Antofagasta", name: "Cerro Moreno International Airport", country: "Chile" },
  { iata: "CCP", city: "Concepcion", name: "Carriel Sur International Airport", country: "Chile" },
  { iata: "PMC", city: "Puerto Montt", name: "El Tepual International Airport", country: "Chile" },
  { iata: "PUQ", city: "Punta Arenas", name: "Carlos Ibanez del Campo International Airport", country: "Chile" },

  // Colombia regional
  { iata: "BAQ", city: "Barranquilla", name: "Ernesto Cortissoz International Airport", country: "Colombia" },
  { iata: "ADZ", city: "San Andres", name: "Gustavo Rojas Pinilla International Airport", country: "Colombia" },
  { iata: "BGA", city: "Bucaramanga", name: "Palonegro International Airport", country: "Colombia" },
  { iata: "PEI", city: "Pereira", name: "Matecana International Airport", country: "Colombia" },

  // Peru regional
  { iata: "AQP", city: "Arequipa", name: "Rodriguez Ballon International Airport", country: "Peru" },
  { iata: "IQT", city: "Iquitos", name: "Coronel FAP Francisco Secada Vignetta International Airport", country: "Peru" },
  { iata: "PIU", city: "Piura", name: "Captain FAP Guillermo Concha Iberico International Airport", country: "Peru" },

  // Ecuador regional
  { iata: "GPS", city: "Galapagos", name: "Seymour Airport", country: "Ecuador" },
  { iata: "CUE", city: "Cuenca", name: "Mariscal Lamar International Airport", country: "Ecuador" },

  // -------------------------------------------------------------------------
  // ADDITIONAL ASIA
  // -------------------------------------------------------------------------

  // Japan regional
  { iata: "SDJ", city: "Sendai", name: "Sendai Airport", country: "Japan" },
  { iata: "HIJ", city: "Hiroshima", name: "Hiroshima Airport", country: "Japan" },
  { iata: "KOJ", city: "Kagoshima", name: "Kagoshima Airport", country: "Japan" },
  { iata: "KMJ", city: "Kumamoto", name: "Kumamoto Airport", country: "Japan" },
  { iata: "TAK", city: "Takamatsu", name: "Takamatsu Airport", country: "Japan" },
  { iata: "MYJ", city: "Matsuyama", name: "Matsuyama Airport", country: "Japan" },
  { iata: "KMI", city: "Miyazaki", name: "Miyazaki Airport", country: "Japan" },
  { iata: "NGS", city: "Nagasaki", name: "Nagasaki Airport", country: "Japan" },
  { iata: "OIT", city: "Oita", name: "Oita Airport", country: "Japan" },
  { iata: "AOJ", city: "Aomori", name: "Aomori Airport", country: "Japan" },
  { iata: "AKJ", city: "Asahikawa", name: "Asahikawa Airport", country: "Japan" },
  { iata: "MMB", city: "Memanbetsu", name: "Memanbetsu Airport", country: "Japan" },

  // South Korea regional
  { iata: "TAE", city: "Daegu", name: "Daegu International Airport", country: "South Korea" },

  // China regional
  { iata: "DLC", city: "Dalian", name: "Dalian Zhoushuizi International Airport", country: "China" },
  { iata: "TAO", city: "Qingdao", name: "Qingdao Jiaodong International Airport", country: "China" },
  { iata: "TNA", city: "Jinan", name: "Jinan Yaoqiang International Airport", country: "China" },
  { iata: "SHE", city: "Shenyang", name: "Shenyang Taoxian International Airport", country: "China" },
  { iata: "HRB", city: "Harbin", name: "Harbin Taiping International Airport", country: "China" },
  { iata: "CGO", city: "Zhengzhou", name: "Zhengzhou Xinzheng International Airport", country: "China" },
  { iata: "CSX", city: "Changsha", name: "Changsha Huanghua International Airport", country: "China" },
  { iata: "FOC", city: "Fuzhou", name: "Fuzhou Changle International Airport", country: "China" },
  { iata: "NNG", city: "Nanning", name: "Nanning Wuxu International Airport", country: "China" },
  { iata: "SYX", city: "Sanya", name: "Sanya Phoenix International Airport", country: "China" },
  { iata: "TSN", city: "Tianjin", name: "Tianjin Binhai International Airport", country: "China" },
  { iata: "HAK", city: "Haikou", name: "Haikou Meilan International Airport", country: "China" },
  { iata: "LHW", city: "Lanzhou", name: "Lanzhou Zhongchuan International Airport", country: "China" },
  { iata: "URC", city: "Urumqi", name: "Urumqi Diwopu International Airport", country: "China" },

  // Taiwan regional
  { iata: "RMQ", city: "Taichung", name: "Taichung International Airport", country: "Taiwan" },
  { iata: "TNN", city: "Tainan", name: "Tainan Airport", country: "Taiwan" },

  // Thailand regional
  { iata: "USM", city: "Koh Samui", name: "Samui Airport", country: "Thailand" },
  { iata: "KBV", city: "Krabi", name: "Krabi Airport", country: "Thailand" },
  { iata: "CEI", city: "Chiang Rai", name: "Mae Fah Luang-Chiang Rai International Airport", country: "Thailand" },
  { iata: "HDY", city: "Hat Yai", name: "Hat Yai International Airport", country: "Thailand" },
  { iata: "UTP", city: "Pattaya", name: "U-Tapao International Airport", country: "Thailand" },

  // Malaysia regional
  { iata: "LGK", city: "Langkawi", name: "Langkawi International Airport", country: "Malaysia" },
  { iata: "SZB", city: "Kuala Lumpur", name: "Sultan Abdul Aziz Shah Airport", country: "Malaysia" },
  { iata: "JHB", city: "Johor Bahru", name: "Senai International Airport", country: "Malaysia" },
  { iata: "IPH", city: "Ipoh", name: "Sultan Azlan Shah Airport", country: "Malaysia" },

  // Indonesia regional
  { iata: "JOG", city: "Yogyakarta", name: "Adisucipto International Airport", country: "Indonesia" },
  { iata: "SOC", city: "Solo", name: "Adisumarmo International Airport", country: "Indonesia" },
  { iata: "MDC", city: "Manado", name: "Sam Ratulangi International Airport", country: "Indonesia" },
  { iata: "BPN", city: "Balikpapan", name: "Sultan Aji Muhammad Sulaiman Sepinggan Airport", country: "Indonesia" },
  { iata: "PLM", city: "Palembang", name: "Sultan Mahmud Badaruddin II Airport", country: "Indonesia" },
  { iata: "BTH", city: "Batam", name: "Hang Nadim International Airport", country: "Indonesia" },
  { iata: "LOP", city: "Lombok", name: "Lombok International Airport", country: "Indonesia" },

  // Philippines regional
  { iata: "DVO", city: "Davao", name: "Francisco Bangoy International Airport", country: "Philippines" },
  { iata: "CRK", city: "Clark", name: "Clark International Airport", country: "Philippines" },
  { iata: "ILO", city: "Iloilo", name: "Iloilo International Airport", country: "Philippines" },
  { iata: "KLO", city: "Kalibo", name: "Kalibo International Airport", country: "Philippines" },

  // Vietnam regional
  { iata: "CXR", city: "Nha Trang", name: "Cam Ranh International Airport", country: "Vietnam" },
  { iata: "PQC", city: "Phu Quoc", name: "Phu Quoc International Airport", country: "Vietnam" },
  { iata: "HUI", city: "Hue", name: "Phu Bai International Airport", country: "Vietnam" },

  // India regional
  { iata: "TRV", city: "Thiruvananthapuram", name: "Trivandrum International Airport", country: "India" },
  { iata: "JAI", city: "Jaipur", name: "Jaipur International Airport", country: "India" },
  { iata: "LKO", city: "Lucknow", name: "Chaudhary Charan Singh International Airport", country: "India" },
  { iata: "IXC", city: "Chandigarh", name: "Chandigarh International Airport", country: "India" },
  { iata: "CCJ", city: "Kozhikode", name: "Calicut International Airport", country: "India" },
  { iata: "SXR", city: "Srinagar", name: "Sheikh ul-Alam International Airport", country: "India" },
  { iata: "VNS", city: "Varanasi", name: "Lal Bahadur Shastri International Airport", country: "India" },
  { iata: "GAU", city: "Guwahati", name: "Lokpriya Gopinath Bordoloi International Airport", country: "India" },
  { iata: "IXB", city: "Bagdogra", name: "Bagdogra Airport", country: "India" },
  { iata: "PAT", city: "Patna", name: "Jay Prakash Narayan International Airport", country: "India" },
  { iata: "IXR", city: "Ranchi", name: "Birsa Munda Airport", country: "India" },
  { iata: "IXE", city: "Mangalore", name: "Mangalore International Airport", country: "India" },
  { iata: "IDR", city: "Indore", name: "Devi Ahilyabai Holkar Airport", country: "India" },
  { iata: "BBI", city: "Bhubaneswar", name: "Biju Patnaik International Airport", country: "India" },
  { iata: "NAG", city: "Nagpur", name: "Dr. Babasaheb Ambedkar International Airport", country: "India" },
  { iata: "RPR", city: "Raipur", name: "Swami Vivekananda Airport", country: "India" },

  // Pakistan regional
  { iata: "PEW", city: "Peshawar", name: "Bacha Khan International Airport", country: "Pakistan" },
  { iata: "MUX", city: "Multan", name: "Multan International Airport", country: "Pakistan" },
  { iata: "SKT", city: "Sialkot", name: "Sialkot International Airport", country: "Pakistan" },
  { iata: "UET", city: "Quetta", name: "Quetta International Airport", country: "Pakistan" },
  { iata: "FSD", city: "Faisalabad", name: "Faisalabad International Airport", country: "Pakistan" },

  // Central Asia regional
  { iata: "FRU", city: "Bishkek", name: "Manas International Airport", country: "Kyrgyzstan" },
  { iata: "DYU", city: "Dushanbe", name: "Dushanbe International Airport", country: "Tajikistan" },
  { iata: "ASB", city: "Ashgabat", name: "Ashgabat International Airport", country: "Turkmenistan" },
  { iata: "SKD", city: "Samarkand", name: "Samarkand International Airport", country: "Uzbekistan" },
  { iata: "BHK", city: "Bukhara", name: "Bukhara International Airport", country: "Uzbekistan" },

  // Mongolia
  { iata: "UBN", city: "Ulaanbaatar", name: "Chinggis Khaan International Airport", country: "Mongolia" },

  // Georgia regional
  { iata: "BUS", city: "Batumi", name: "Batumi International Airport", country: "Georgia" },
  { iata: "KUT", city: "Kutaisi", name: "David the Builder Kutaisi International Airport", country: "Georgia" },

  // -------------------------------------------------------------------------
  // ADDITIONAL OCEANIA
  // -------------------------------------------------------------------------

  // Australia regional
  { iata: "TSV", city: "Townsville", name: "Townsville Airport", country: "Australia" },
  { iata: "MCY", city: "Sunshine Coast", name: "Sunshine Coast Airport", country: "Australia" },
  { iata: "LST", city: "Launceston", name: "Launceston Airport", country: "Australia" },
  { iata: "ASP", city: "Alice Springs", name: "Alice Springs Airport", country: "Australia" },
  { iata: "NTL", city: "Newcastle", name: "Newcastle Airport", country: "Australia" },
  { iata: "AVV", city: "Avalon", name: "Avalon Airport", country: "Australia" },
  { iata: "BNK", city: "Ballina", name: "Ballina Byron Gateway Airport", country: "Australia" },

  // New Zealand regional
  { iata: "DUD", city: "Dunedin", name: "Dunedin Airport", country: "New Zealand" },
  { iata: "HLZ", city: "Hamilton", name: "Hamilton Airport", country: "New Zealand" },
  { iata: "NPE", city: "Napier", name: "Hawke's Bay Airport", country: "New Zealand" },
  { iata: "PMR", city: "Palmerston North", name: "Palmerston North Airport", country: "New Zealand" },
  { iata: "TRG", city: "Tauranga", name: "Tauranga Airport", country: "New Zealand" },
  { iata: "ROT", city: "Rotorua", name: "Rotorua Airport", country: "New Zealand" },
  { iata: "NSN", city: "Nelson", name: "Nelson Airport", country: "New Zealand" },
  { iata: "IVC", city: "Invercargill", name: "Invercargill Airport", country: "New Zealand" }
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
