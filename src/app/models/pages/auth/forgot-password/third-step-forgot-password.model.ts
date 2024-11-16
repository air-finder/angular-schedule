import { FormControl } from "@angular/forms";

export interface ThirdStepForgotPasswordFormModel {
  password: FormControl<string | null>;
  'confirm-password': FormControl<string | null>;
}