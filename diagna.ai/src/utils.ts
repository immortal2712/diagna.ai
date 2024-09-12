export function formatReadableDate(isoDate: string): string {
  const date = new Date(isoDate);

  return date.toLocaleString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}
