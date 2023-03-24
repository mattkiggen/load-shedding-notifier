export function isLoadsheddingIn5minutes(startDate: string): boolean {
  const start = new Date(startDate);
  const current = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = start.getTime() - current.getTime();

  // Check if the current time is within 5 minutes of the start time
  const fiveMinutesInMs = 5 * 60 * 1000; // 5 minutes in milliseconds
  return timeDiff <= fiveMinutesInMs;
}
