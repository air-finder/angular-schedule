import { FormControl } from "@angular/forms";

export interface ScheduleStepFormModel {
  date: FormControl<Date | null>;
  start: FormControl<Date | null>
  end: FormControl<Date | null>;
}