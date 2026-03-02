import { FlightOffer, FlightProvider, NormalizedSearchInput } from "../types";

export class DuffelFlightProvider implements FlightProvider {
  name: "duffel" = "duffel";

  constructor(private readonly apiKey: string) {
    if (!apiKey) {
      throw new Error("DUFFEL_API_KEY is required when FLIGHT_PROVIDER=duffel");
    }
  }

  async searchFlights(_input: NormalizedSearchInput): Promise<FlightOffer[]> {
    throw new Error("Duffel provider is not wired yet. Set FLIGHT_PROVIDER=mock for now.");
  }

  async getConditions(_offer: FlightOffer): Promise<{ cancellation: string; changes: string; noShow: string }> {
    throw new Error("Duffel provider is not wired yet. Set FLIGHT_PROVIDER=mock for now.");
  }
}
