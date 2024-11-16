import { FormGroup } from "@angular/forms";
import { FirstStepForgotPasswordFormModel } from "./first-step-forgot-password.model";
import { SecondStepForgotPasswordFormModel } from "./second-step-forgot-password.model";
import { ThirdStepForgotPasswordFormModel } from "./third-step-forgot-password.model";

export interface ForgotPasswordFormModel {
  'first-step': FormGroup<FirstStepForgotPasswordFormModel>;
  'second-step': FormGroup<SecondStepForgotPasswordFormModel>;
  'third-step': FormGroup<ThirdStepForgotPasswordFormModel>;
}