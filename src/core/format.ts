export function formatTime(date: Date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours %= 12;
  hours = hours || 12; // Convert '0' to '12' for 12-hour format
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${formattedMinutes}${ampm}`;
}
