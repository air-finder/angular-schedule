import { FormGroup } from "@angular/forms";
import { ServiceStepForm } from "./service-step/service-step.form";
import { PersonalStepForm } from "./personal-step/personal-step.form";
import { ScheduleStepForm } from "./schedule-step/schedule-step.form";
import { ScheduleFormModel } from "@models/pages/schedule/schedule-form.model";

export class ScheduleForm extends FormGroup<ScheduleFormModel> {

  get serviceStep() { return this.controls.serviceStep }
  get personalStep() { return this.controls.personalStep }
  get scheduleStep() { return this.controls.scheduleStep }

  constructor() {
    super({
      serviceStep: new ServiceStepForm(),
      personalStep: new PersonalStepForm(),
      scheduleStep: new ScheduleStepForm()
    });
  }
}