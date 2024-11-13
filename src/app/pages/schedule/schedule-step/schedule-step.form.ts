import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ScheduleStepFormModel } from "@models/pages/schedule/schedule-step/schedule-step-form.model";

export class ScheduleStepForm extends FormGroup<ScheduleStepFormModel> {

  get date() { return this.controls.date }
  get start() { return this.controls.start }
  get end() { return this.controls.end }

  constructor() {
    super({
      date: new FormControl<Date | null>(null, [Validators.required]),
      start: new FormControl<Date | null>(null, [Validators.required]),
      end: new FormControl<Date | null>(null, [Validators.required]),
    });
  }
}