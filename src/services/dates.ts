import * as chrono from "chrono-node";

export function toIsoDate(input: string, now: Date = new Date()): string | undefined {
  const parsed = chrono.parseDate(input, now, { forwardDate: true });
  if (!parsed) {
    return undefined;
  }

  const year = parsed.getFullYear();
  const month = `${parsed.getMonth() + 1}`.padStart(2, "0");
  const day = `${parsed.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isValidDateOrder(departureDate: string, returnDate?: string): boolean {
  if (!returnDate) {
    return true;
  }

  const depTs = Date.parse(departureDate);
  const retTs = Date.parse(returnDate);
  return Number.isFinite(depTs) && Number.isFinite(retTs) && retTs >= depTs;
}

export function combineDateAndMinutes(date: string, minutesAfterMidnight: number): string {
  const [year, month, day] = date.split("-").map(Number);
  const hours = Math.floor(minutesAfterMidnight / 60);
  const minutes = minutesAfterMidnight % 60;

  const utcDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
  return utcDate.toISOString();
}
