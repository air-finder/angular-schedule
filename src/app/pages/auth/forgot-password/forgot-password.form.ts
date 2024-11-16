import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ForgotPasswordRequest } from "../../../models/services/users/forgot-password.request";
import { ForgotPasswordCodeRequest } from "../../../models/services/users/forgot-password-code.request";
import { ForgotPasswordUpdateRequest } from "../../../models/services/users/forgot-password-update.request";
import { ForgotPasswordFormModel } from "@models/pages/auth/forgot-password/forgot-password.model";
import { FirstStepForgotPasswordFormModel } from "@models/pages/auth/forgot-password/first-step-forgot-password.model";
import { SecondStepForgotPasswordFormModel } from "@models/pages/auth/forgot-password/second-step-forgot-password.model";
import { ThirdStepForgotPasswordFormModel } from "@models/pages/auth/forgot-password/third-step-forgot-password.model";
import { CustomValidators } from "@validators/custom-validators";

export class ForgotPasswordForm extends FormGroup<ForgotPasswordFormModel> {

  get firstStep() { return this.controls['first-step']; }
  get secondStep() { return this.controls['second-step']; }
  get thirdStep() { return this.controls['third-step']; }

  constructor() {
    super({
      'first-step': new FormGroup<FirstStepForgotPasswordFormModel>({
        user: new FormControl<string | null>('', [Validators.required, CustomValidators.usernameValidator])
      }),
      'second-step': new FormGroup<SecondStepForgotPasswordFormModel>({
        code: new FormControl<string | null>('', [Validators.required, Validators.minLength(4)])
      }),
      'third-step': new FormGroup<ThirdStepForgotPasswordFormModel>({
        password: new FormControl<string | null>('', [Validators.required, CustomValidators.passwordValidator]),
        'confirm-password': new FormControl<string>('', [Validators.required, CustomValidators.passwordValidator])
      }, [CustomValidators.passwordMatchValidator])
    });
  }

  getFirstStepRequest(): ForgotPasswordRequest {
    return {
      user: this.firstStep.controls['user'].value!
    }
  }

  getSecondStepRequest(): ForgotPasswordCodeRequest {
    return {
      user: this.firstStep.controls['user'].value!,
      code: this.secondStep.controls['code'].value!
    }
  }

  getThirdStepRequest(): ForgotPasswordUpdateRequest {
    return {
      user: this.firstStep.controls['user'].value!,
      code: this.secondStep.controls['code'].value!,
      password: this.thirdStep.controls['password'].value!
    }
  }
}