import { FormControl } from "@angular/forms";

export interface TermsStepRegisterFormModel {
  terms: FormControl<boolean | null>;
  privacy: FormControl<boolean | null>;
}