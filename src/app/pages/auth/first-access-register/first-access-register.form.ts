import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TermsStepRegisterFormModel } from "@models/pages/auth/register/terms-step-register-form.model";
import { UserStepRegisterFormModel } from "@models/pages/auth/register/user-step-register-form.model";
import { Gender } from "@models/services/enums/gender";
import { FirstAccessRequest } from "@models/services/users/first-access.request";
import { CustomValidators } from "@validators/custom-validators";

interface PersonFirstAccessRegisterModel {
  phone: FormControl<string | null>;
  gender: FormControl<Gender | null>;
  birthday: FormControl<string | null>;
}

interface FirstAccessRegisterFormModel {
  person: FormGroup<PersonFirstAccessRegisterModel>;
  user: FormGroup<UserStepRegisterFormModel>;
  terms: FormGroup<TermsStepRegisterFormModel>;
}

export class FirstAccessRegisterForm extends FormGroup<FirstAccessRegisterFormModel> {

  get person(): FormGroup<PersonFirstAccessRegisterModel> { return this.controls.person; }
  get user(): FormGroup<UserStepRegisterFormModel> { return this.controls.user; }
  get terms(): FormGroup<TermsStepRegisterFormModel> { return this.controls.terms; }

  constructor() {
    super({
      person: new FormGroup<PersonFirstAccessRegisterModel>({
        phone: new FormControl<string | null>(null, [Validators.required, CustomValidators.phoneValidator]),
        gender: new FormControl<Gender | null>(Gender.Unknown),
        birthday: new FormControl<string | null>(null, [Validators.required])
      }),
      user: new FormGroup<UserStepRegisterFormModel>({
        login: new FormControl<string | null>(null, [Validators.required, CustomValidators.usernameValidator]),
        password: new FormControl<string | null>(null, [Validators.required, CustomValidators.passwordValidator]),
        'confirm-password': new FormControl<string | null>(null, [Validators.required, CustomValidators.passwordValidator]),
      }, [CustomValidators.passwordMatchValidator]),
      terms: new FormGroup<TermsStepRegisterFormModel>({
        terms: new FormControl<boolean | null>(false, Validators.requiredTrue),
        privacy: new FormControl<boolean | null>(false, Validators.requiredTrue)
      })
    });
  }

  public getFirstAccessRequest(userId: string) : FirstAccessRequest {
    return {
      userId: userId,
      login: this.user.value.login!,
      password: this.user.value.password!,
      birthday: this.person.value.birthday!,
      gender: this.person.value.gender!,
      phone: this.person.value.phone!
    };
  }
}