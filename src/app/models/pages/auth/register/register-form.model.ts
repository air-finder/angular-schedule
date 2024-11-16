import { FormGroup } from "@angular/forms";
import { PersonStepRegisterFormModel } from "./person-step-register-form.model";
import { UserStepRegisterFormModel } from "./user-step-register-form.model";
import { TermsStepRegisterFormModel } from "./terms-step-register-form.model";

export interface RegisterFormModel {
  person: FormGroup<PersonStepRegisterFormModel>;
  user: FormGroup<UserStepRegisterFormModel>;
  terms: FormGroup<TermsStepRegisterFormModel>;
}