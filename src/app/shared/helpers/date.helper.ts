const ticksPerMillisecond = 10000;
const epochTicks = 621355968000000000;

export class DateHelper {
  public static getDateFromTicks(ticks: number): Date {
    const milliseconds = (ticks - epochTicks) / ticksPerMillisecond;
    return new Date(milliseconds);
  }

  public static getStartDateFromTicks(ticks: number): Date {
    const date = this.getDateFromTicks(ticks);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  public static getTicksFromDate(date: Date): number {
    const milliseconds = date.getTime();
    return epochTicks + milliseconds * ticksPerMillisecond;
  }

  public static getDateFromISOString(dateISO: string): Date {
    const [year, month, day] = dateISO.split('T')[0].split('-').map(n => parseInt(n, 10));
    return new Date(year, month - 1, day);
  }

  public static getFirstDayOfWeek(): Date {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
  }

  public static getLastDayOfWeek(): Date {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - date.getDay()));
  }

  public static getFistDayOfMonth(): Date {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  public static getLastDayOfMonth(): Date {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }
}