import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SelectServiceForm } from "./select-services/select-service.form";
import { ServiceStepFormModel } from "@models/pages/schedule/service-step/service-step-form.model";

export class ServiceStepForm extends FormGroup<ServiceStepFormModel> {

  get services() { return this.controls.services }
  get serviceWorkerId() { return this.controls.serviceWorkerId }

  constructor() {
    super({
      services: new SelectServiceForm(),
      serviceWorkerId: new FormControl<string>('', [Validators.required])
    } as ServiceStepFormModel);
  }
}