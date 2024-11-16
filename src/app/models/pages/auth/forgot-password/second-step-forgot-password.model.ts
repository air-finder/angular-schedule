import { FormControl } from "@angular/forms";

export interface SecondStepForgotPasswordFormModel {
  code: FormControl<string | null>;
}