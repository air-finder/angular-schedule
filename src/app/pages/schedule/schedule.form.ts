import { FormGroup } from "@angular/forms";
import { ServiceStepForm } from "./service-step/service-step.form";
import { PersonalStepForm } from "./personal-step/personal-step.form";
import { ScheduleStepForm } from "./schedule-step/schedule-step.form";
import { ScheduleFormModel } from "@models/pages/schedule/schedule-form.model";
import { PostAppointmentRequest } from "@models/services/schedules";
import { DateHelper } from "@helpers/date-helper";

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

  public GetAppointmentRequest(description: string): PostAppointmentRequest {
    if (!this.valid) throw new Error('Form is not valid');
    return {
      serviceWorkerId: this.serviceStep.serviceWorkerId.value,
      start: DateHelper.getTicksFromDate(this.scheduleStep.start.value!),
      end: DateHelper.getTicksFromDate(this.scheduleStep.end.value!),
      description: description,
      email: this.personalStep.email.value,
      phone: this.personalStep.phone.value,
      name: this.personalStep.name.value
    }
  }
}