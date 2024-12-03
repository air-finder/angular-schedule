import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Gender } from "../../../models/services/enums/gender";
import { AddUserRequest } from "../../../models/services/people/add-user.request";
import { CustomValidators } from "@validators/custom-validators";
import { RegisterFormModel } from "@models/pages/auth/register/register-form.model";
import { PersonStepRegisterFormModel } from "@models/pages/auth/register/person-step-register-form.model";
import { UserStepRegisterFormModel } from "@models/pages/auth/register/user-step-register-form.model";
import { TermsStepRegisterFormModel } from "@models/pages/auth/register/terms-step-register-form.model";


export class RegisterForm extends FormGroup<RegisterFormModel> {

  get person(): FormGroup<PersonStepRegisterFormModel> {
    return this.controls['person'];
  }

  get user(): FormGroup<UserStepRegisterFormModel> {
    return this.controls['user'];
  }

  get terms(): FormGroup<TermsStepRegisterFormModel> {
    return this.controls['terms'];
  }

  constructor() {
    super({
      person: new FormGroup<PersonStepRegisterFormModel>({
        name: new FormControl<string | null>(null, [Validators.required, CustomValidators.nameValidator]),
        email: new FormControl<string | null>(null, [Validators.required, CustomValidators.emailValidator]),
        phone: new FormControl<string | null>(null, [Validators.required, CustomValidators.phoneValidator]),
        gender: new FormControl<Gender | null>(Gender.Unknown),
        birthday: new FormControl<string | null>(null, [Validators.required])
      }),
      user: new FormGroup<UserStepRegisterFormModel>({
        login: new FormControl<string | null>(null, [Validators.required, CustomValidators.usernameValidator]),
        password: new FormControl<string | null>(null, [Validators.required, CustomValidators.passwordValidator]),
        'confirm-password': new FormControl<string | null>(null, [Validators.required, CustomValidators.passwordValidator])
      }, [CustomValidators.passwordMatchValidator]),
      terms: new FormGroup<TermsStepRegisterFormModel>({
        terms: new FormControl<boolean | null>(false, Validators.requiredTrue),
        privacy: new FormControl<boolean | null>(false, Validators.requiredTrue)
      })
    });
  }

  getRegisterRequest(): AddUserRequest {
    return {
      name: this.person.value.name!,
      email: this.person.value.email!,
      phone: this.person.value.phone!,
      gender: this.person.value.gender!,
      birthday: this.person.value.birthday!,
      login: this.user.value.login!,
      password: this.user.value.password!
    };
  }
}