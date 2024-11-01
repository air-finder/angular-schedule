import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ForgotPasswordRequest } from "../../services/models/user/forgot-password.request";
import { ForgotPasswordCodeRequest } from "../../services/models/user/forgot-password-code.request";
import { ForgotPasswordUpdateRequest } from "../../services/models/user/forgot-password-update.request";

export interface IForgotPasswordForm {
  'first-step': FormGroup<IFirstStepForgotPasswordForm>;
  'second-step': FormGroup<ISecondStepForgotPasswordForm>;
  'third-step': FormGroup<IThirdStepForgotPasswordForm>;
}

export interface IFirstStepForgotPasswordForm {
  user: FormControl<string | null>;
}
export interface ISecondStepForgotPasswordForm {
  code: FormControl<string | null>;
}
export interface IThirdStepForgotPasswordForm {
  password: FormControl<string | null>;
  'confirm-password': FormControl<string | null>;
}

export class ForgotPasswordForm extends FormGroup<IForgotPasswordForm> {

  get firstStep() { return this.controls['first-step']; }
  get secondStep() { return this.controls['second-step']; }
  get thirdStep() { return this.controls['third-step']; }

  constructor() {
    super({
      'first-step': new FormGroup<IFirstStepForgotPasswordForm>({
        user: new FormControl<string | null>('', [Validators.required])
      }),
      'second-step': new FormGroup<ISecondStepForgotPasswordForm>({
        code: new FormControl<string | null>('', [Validators.required, Validators.minLength(4)])
      }),
      'third-step': new FormGroup<IThirdStepForgotPasswordForm>({
        password: new FormControl<string | null>('', [Validators.required]),
        'confirm-password': new FormControl<string>('', [Validators.required])
      })
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