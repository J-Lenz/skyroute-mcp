import { Airport } from "../types";

const AIRPORTS: Airport[] = [
  { iata: "LIS", city: "Lisbon", name: "Humberto Delgado Airport", country: "Portugal" },
  { iata: "OPO", city: "Porto", name: "Francisco Sa Carneiro Airport", country: "Portugal" },
  { iata: "MAD", city: "Madrid", name: "Adolfo Suarez Madrid-Barajas Airport", country: "Spain" },
  { iata: "BCN", city: "Barcelona", name: "Barcelona-El Prat Airport", country: "Spain" },
  { iata: "CDG", city: "Paris", name: "Charles de Gaulle Airport", country: "France" },
  { iata: "ORY", city: "Paris", name: "Orly Airport", country: "France" },
  { iata: "LHR", city: "London", name: "Heathrow Airport", country: "United Kingdom" },
  { iata: "LGW", city: "London", name: "Gatwick Airport", country: "United Kingdom" },
  { iata: "FRA", city: "Frankfurt", name: "Frankfurt Airport", country: "Germany" },
  { iata: "MUC", city: "Munich", name: "Munich Airport", country: "Germany" },
  { iata: "AMS", city: "Amsterdam", name: "Amsterdam Schiphol Airport", country: "Netherlands" },
  { iata: "DUB", city: "Dublin", name: "Dublin Airport", country: "Ireland" },
  { iata: "CPH", city: "Copenhagen", name: "Copenhagen Airport", country: "Denmark" },
  { iata: "ARN", city: "Stockholm", name: "Stockholm Arlanda Airport", country: "Sweden" },
  { iata: "OSL", city: "Oslo", name: "Oslo Airport", country: "Norway" },
  { iata: "HEL", city: "Helsinki", name: "Helsinki Airport", country: "Finland" },
  { iata: "VIE", city: "Vienna", name: "Vienna International Airport", country: "Austria" },
  { iata: "ZRH", city: "Zurich", name: "Zurich Airport", country: "Switzerland" },
  { iata: "GVA", city: "Geneva", name: "Geneva Airport", country: "Switzerland" },
  { iata: "FCO", city: "Rome", name: "Leonardo da Vinci International Airport", country: "Italy" },
  { iata: "MXP", city: "Milan", name: "Milan Malpensa Airport", country: "Italy" },
  { iata: "NAP", city: "Naples", name: "Naples International Airport", country: "Italy" },
  { iata: "ATH", city: "Athens", name: "Athens International Airport", country: "Greece" },
  { iata: "IST", city: "Istanbul", name: "Istanbul Airport", country: "Turkey" },
  { iata: "DXB", city: "Dubai", name: "Dubai International Airport", country: "United Arab Emirates" },
  { iata: "DOH", city: "Doha", name: "Hamad International Airport", country: "Qatar" },
  { iata: "JFK", city: "New York", name: "John F. Kennedy International Airport", country: "United States" },
  { iata: "LGA", city: "New York", name: "LaGuardia Airport", country: "United States" },
  { iata: "EWR", city: "Newark", name: "Newark Liberty International Airport", country: "United States" },
  { iata: "BOS", city: "Boston", name: "Logan International Airport", country: "United States" },
  { iata: "IAD", city: "Washington", name: "Washington Dulles International Airport", country: "United States" },
  { iata: "DCA", city: "Washington", name: "Ronald Reagan Washington National Airport", country: "United States" },
  { iata: "MIA", city: "Miami", name: "Miami International Airport", country: "United States" },
  { iata: "FLL", city: "Fort Lauderdale", name: "Fort Lauderdale-Hollywood International Airport", country: "United States" },
  { iata: "ATL", city: "Atlanta", name: "Hartsfield-Jackson Atlanta International Airport", country: "United States" },
  { iata: "ORD", city: "Chicago", name: "Chicago O'Hare International Airport", country: "United States" },
  { iata: "MDW", city: "Chicago", name: "Chicago Midway International Airport", country: "United States" },
  { iata: "DFW", city: "Dallas", name: "Dallas/Fort Worth International Airport", country: "United States" },
  { iata: "IAH", city: "Houston", name: "George Bush Intercontinental Airport", country: "United States" },
  { iata: "DEN", city: "Denver", name: "Denver International Airport", country: "United States" },
  { iata: "PHX", city: "Phoenix", name: "Phoenix Sky Harbor International Airport", country: "United States" },
  { iata: "LAS", city: "Las Vegas", name: "Harry Reid International Airport", country: "United States" },
  { iata: "LAX", city: "Los Angeles", name: "Los Angeles International Airport", country: "United States" },
  { iata: "SFO", city: "San Francisco", name: "San Francisco International Airport", country: "United States" },
  { iata: "SEA", city: "Seattle", name: "Seattle-Tacoma International Airport", country: "United States" },
  { iata: "SAN", city: "San Diego", name: "San Diego International Airport", country: "United States" },
  { iata: "PDX", city: "Portland", name: "Portland International Airport", country: "United States" },
  { iata: "YVR", city: "Vancouver", name: "Vancouver International Airport", country: "Canada" },
  { iata: "YYZ", city: "Toronto", name: "Toronto Pearson International Airport", country: "Canada" },
  { iata: "YUL", city: "Montreal", name: "Montreal-Trudeau International Airport", country: "Canada" },
  { iata: "MEX", city: "Mexico City", name: "Benito Juarez International Airport", country: "Mexico" },
  { iata: "GRU", city: "Sao Paulo", name: "Sao Paulo-Guarulhos International Airport", country: "Brazil" },
  { iata: "GIG", city: "Rio de Janeiro", name: "Rio de Janeiro-Galeao International Airport", country: "Brazil" },
  { iata: "EZE", city: "Buenos Aires", name: "Ministro Pistarini International Airport", country: "Argentina" },
  { iata: "SCL", city: "Santiago", name: "Arturo Merino Benitez Airport", country: "Chile" },
  { iata: "BOG", city: "Bogota", name: "El Dorado International Airport", country: "Colombia" },
  { iata: "LIM", city: "Lima", name: "Jorge Chavez International Airport", country: "Peru" },
  { iata: "NRT", city: "Tokyo", name: "Narita International Airport", country: "Japan" },
  { iata: "HND", city: "Tokyo", name: "Haneda Airport", country: "Japan" },
  { iata: "KIX", city: "Osaka", name: "Kansai International Airport", country: "Japan" },
  { iata: "ICN", city: "Seoul", name: "Incheon International Airport", country: "South Korea" },
  { iata: "PEK", city: "Beijing", name: "Beijing Capital International Airport", country: "China" },
  { iata: "PVG", city: "Shanghai", name: "Shanghai Pudong International Airport", country: "China" },
  { iata: "SIN", city: "Singapore", name: "Singapore Changi Airport", country: "Singapore" },
  { iata: "BKK", city: "Bangkok", name: "Suvarnabhumi Airport", country: "Thailand" },
  { iata: "DEL", city: "Delhi", name: "Indira Gandhi International Airport", country: "India" },
  { iata: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport", country: "India" },
  { iata: "SYD", city: "Sydney", name: "Sydney Airport", country: "Australia" },
  { iata: "MEL", city: "Melbourne", name: "Melbourne Airport", country: "Australia" },
  { iata: "AKL", city: "Auckland", name: "Auckland Airport", country: "New Zealand" }
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
