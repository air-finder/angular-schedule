import { FormGroup } from "@angular/forms";
import { CreateProviderFirstStepFormModel } from "./create-provider-form-first-step.model";
import { CreateProviderSecondStepFormModel } from "./create-provider-form-second-step.model";

export interface CreateProviderFormModel {
  provider: FormGroup<CreateProviderFirstStepFormModel>;
  location: FormGroup<CreateProviderSecondStepFormModel>;
}