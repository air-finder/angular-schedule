import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PersonalStepFormModel } from "@models/pages/schedule/personal-step/personal-step-form.model";
import { CustomValidators } from "@validators/custom-validators";

export class PersonalStepForm extends FormGroup<PersonalStepFormModel> {

  get name() { return this.controls.name }
  get phone() { return this.controls.phone }
  get email() { return this.controls.email }

  constructor() {
    super({
      name: new FormControl<string | null>('', [Validators.required, CustomValidators.nameValidator]),
      phone: new FormControl<string | null>('', [Validators.required, CustomValidators.phoneValidator]),
      email: new FormControl<string | null>('', [Validators.required, CustomValidators.emailValidator]),
    } as PersonalStepFormModel);
  }
}