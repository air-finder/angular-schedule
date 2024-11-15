const ticksPerMillisecond = 10000;
const epochTicks = 621355968000000000;

export class DateHelper {
  public static getDateFromTicks(ticks: number): Date {
    const milliseconds = (ticks - epochTicks) / ticksPerMillisecond;
    return new Date(milliseconds);
  }

  public static getTicksFromDate(date: Date): number {
    const milliseconds = date.getTime();
    return epochTicks + milliseconds * ticksPerMillisecond;
  }

  public static getDateFromISOString(dateISO: string): Date {
    const [year, month, day] = dateISO.split('T')[0].split('-').map(n => parseInt(n, 10));
    return new Date(year, month - 1, day);
  }
}