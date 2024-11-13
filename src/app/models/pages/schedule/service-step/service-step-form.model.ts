import { FormControl } from "@angular/forms";
import { SelectServiceForm } from "../../../../pages/schedule/service-step/select-services/select-service.form";

export interface ServiceStepFormModel {
  serviceWorkerId: FormControl<string>;
  services: SelectServiceForm;
}