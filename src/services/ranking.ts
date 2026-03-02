import { FlightOffer } from "../types";

function priceValue(offer: FlightOffer): number {
  return Number.parseFloat(offer.price.amount);
}

function durationValue(offer: FlightOffer): number {
  return offer.durationMinutes;
}

export function rankOffers(
  offers: FlightOffer[],
  sort: "cheapest" | "fastest" | "best"
): FlightOffer[] {
  const sorted = [...offers];

  if (sort === "cheapest") {
    sorted.sort((a, b) => priceValue(a) - priceValue(b) || durationValue(a) - durationValue(b));
    return sorted;
  }

  if (sort === "fastest") {
    sorted.sort((a, b) => durationValue(a) - durationValue(b) || priceValue(a) - priceValue(b));
    return sorted;
  }

  const minPrice = Math.min(...offers.map(priceValue));
  const maxPrice = Math.max(...offers.map(priceValue));
  const minDuration = Math.min(...offers.map(durationValue));
  const maxDuration = Math.max(...offers.map(durationValue));

  const priceRange = Math.max(1, maxPrice - minPrice);
  const durationRange = Math.max(1, maxDuration - minDuration);

  sorted.sort((a, b) => {
    const aScore = 0.65 * ((priceValue(a) - minPrice) / priceRange) + 0.35 * ((durationValue(a) - minDuration) / durationRange);
    const bScore = 0.65 * ((priceValue(b) - minPrice) / priceRange) + 0.35 * ((durationValue(b) - minDuration) / durationRange);
    return aScore - bScore;
  });

  return sorted;
}
