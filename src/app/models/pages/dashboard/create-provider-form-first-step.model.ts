import { FormControl } from "@angular/forms";

export interface CreateProviderFirstStepFormModel {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  'utc-time': FormControl<string | null>;
  'business-code': FormControl<string | null>;
}