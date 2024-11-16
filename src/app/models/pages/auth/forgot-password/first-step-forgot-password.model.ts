import { FormControl } from "@angular/forms";

export interface FirstStepForgotPasswordFormModel {
  user: FormControl<string | null>;
}