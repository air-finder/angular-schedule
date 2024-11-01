import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Gender } from "../../services/enums/gender";
import { AddUserRequest } from "../../services/models/people/add-user.request";

export interface IRegisterForm {
  person: FormGroup<PersonStepRegisterForm>;
  user: FormGroup<UserStepRegisterForm>;
  terms: FormGroup<TermsStepRegisterForm>;
}

export interface PersonStepRegisterForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  gender: FormControl<Gender | null>;
  birthday: FormControl<number | null>;
}

export interface UserStepRegisterForm {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
  'confirm-password': FormControl<string | null>;
}

export interface TermsStepRegisterForm {
  terms: FormControl<boolean | null>;
  privacy: FormControl<boolean | null>;
}

export class RegisterForm extends FormGroup<IRegisterForm> {

  get person(): FormGroup<PersonStepRegisterForm> {
    return this.controls['person'];
  }

  get user(): FormGroup<UserStepRegisterForm> {
    return this.controls['user'];
  }

  get terms(): FormGroup<TermsStepRegisterForm> {
    return this.controls['terms'];
  }

  constructor() {
    super({
      person: new FormGroup<PersonStepRegisterForm>({
        name: new FormControl<string | null>(null, Validators.required),
        email: new FormControl<string | null>(null, Validators.required),
        phone: new FormControl<string | null>(null),
        gender: new FormControl<Gender | null>(Gender.Male),
        birthday: new FormControl<number | null>(null)
      }),
      user: new FormGroup<UserStepRegisterForm>({
        login: new FormControl<string | null>(null, Validators.required),
        password: new FormControl<string | null>(null, Validators.required),
        'confirm-password': new FormControl<string | null>(null, Validators.required)
      }),
      terms: new FormGroup<TermsStepRegisterForm>({
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