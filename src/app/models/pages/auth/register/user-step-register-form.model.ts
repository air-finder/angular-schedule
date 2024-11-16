import { FormControl } from "@angular/forms";

export interface UserStepRegisterFormModel {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
  'confirm-password': FormControl<string | null>;
}