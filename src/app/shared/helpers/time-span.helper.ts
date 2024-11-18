export class TimeSpanHelper {
  public static FromMinutes(minutes: number) {
    const minutesToShow = minutes % 60;
    const hours = Math.floor(minutes / 60);
    const hoursToShow = hours % 24;
    const days = Math.floor(hours / 24);
    return `${days}.${hoursToShow}:${minutesToShow}:00`;
  }
}