import { FormControl } from "@angular/forms";

export interface CreateProviderSecondStepFormModel {
  'zip-code': FormControl<string | null>;
  street: FormControl<string | null>;
  number: FormControl<string | null>;
  neighborhood: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  country: FormControl<string | null>;
}