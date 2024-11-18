export class TimezoneHelper {
  public static GetTimezoneOffset() {
    return new Date().getTimezoneOffset() * -1;
  }

  public static GetTimezone() {
    return new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)![1];
  }

  public static GetTimezoneNumber() {
    return this.GetTimezoneOffset()/60;
  }
}