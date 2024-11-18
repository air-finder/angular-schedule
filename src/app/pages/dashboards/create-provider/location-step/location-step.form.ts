import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CreateProviderSecondStepFormModel } from "@models/pages/dashboard/create-provider-form-second-step.model";

export class LocationStepForm extends FormGroup<CreateProviderSecondStepFormModel> {
  get street() { return this.controls.street; };
  get number() { return this.controls.number; };
  get neighborhood() { return this.controls.neighborhood; };
  get city() { return this.controls.city; };
  get state() { return this.controls.state; };
  get country() { return this.controls.country; };
  get zipCode() { return this.controls['zip-code']; };

  constructor() {
    super({
      'zip-code': new FormControl<string | null>('', [Validators.required, Validators.maxLength(8)]),
      street: new FormControl<string | null>('', [Validators.required, Validators.maxLength(80)]),
      number: new FormControl<string | null>('', [Validators.maxLength(10)]),
      neighborhood: new FormControl<string | null>('', [Validators.required, Validators.maxLength(80)]),
      city: new FormControl<string | null>('', [Validators.required, Validators.maxLength(80)]),
      state: new FormControl<string | null>('', [Validators.required, Validators.maxLength(80)]),
      country: new FormControl<string | null>('', [Validators.required, Validators.maxLength(80)])
    } as CreateProviderSecondStepFormModel);
  }

  public getRequest() {
    return {
      zipCode: this.zipCode.value!,
      street: this.street.value!,
      number: this.number.value,
      neighborhood: this.neighborhood.value!,
      city: this.city.value!,
      state: this.state.value!,
      country: this.country.value!
    }
  }
}