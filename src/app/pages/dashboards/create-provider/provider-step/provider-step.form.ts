import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TimezoneHelper } from "@helpers/timezone.helper";
import { CreateProviderFirstStepFormModel } from "@models/pages/dashboard/create-provider-form-first-step.model";
import { CustomValidators } from "@validators/custom-validators";

export class ProviderStepForm extends FormGroup<CreateProviderFirstStepFormModel> {
  get name() { return this.controls.name; };
  get description() { return this.controls.description; };
  get utcTime() { return this.controls['utc-time']; };
  get businessCode() { return this.controls['business-code']; };

  constructor() {
    super({
      name: new FormControl<string | null>('', [Validators.required, Validators.maxLength(80), CustomValidators.nameValidator]),
      description: new FormControl<string | null>('', [Validators.required, Validators.maxLength(200)]),
      'utc-time': new FormControl<string | null>(TimezoneHelper.GetTimezone(), [Validators.required]),
      'business-code': new FormControl<string | null>(null, CustomValidators.businessCodeValidator)
    });
  }
}