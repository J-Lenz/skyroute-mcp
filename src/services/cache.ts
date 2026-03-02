import { FlightOffer, SearchResult } from "../types";

interface CachedSearch {
  expiresAt: number;
  value: SearchResult;
}

export class OfferCache {
  private readonly searches = new Map<string, CachedSearch>();

  constructor(private readonly ttlMs: number) {}

  set(search: SearchResult): void {
    const expiresAt = Date.now() + this.ttlMs;
    this.searches.set(search.searchId, { expiresAt, value: search });
  }

  get(searchId: string): SearchResult | undefined {
    const entry = this.searches.get(searchId);
    if (!entry) {
      return undefined;
    }

    if (Date.now() > entry.expiresAt) {
      this.searches.delete(searchId);
      return undefined;
    }

    return entry.value;
  }

  getOffer(searchId: string, offerId: string): FlightOffer | undefined {
    const search = this.get(searchId);
    return search?.offers.find((offer) => offer.offerId === offerId);
  }
}
