import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PersonalStepFormModel } from "@models/pages/schedule/personal-step/personal-step-form.model";

export class PersonalStepForm extends FormGroup<PersonalStepFormModel> {

  get name() { return this.controls.name }
  get phone() { return this.controls.phone }
  get email() { return this.controls.email }

  constructor() {
    super({
      name: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required]),
    } as PersonalStepFormModel);
  }
}