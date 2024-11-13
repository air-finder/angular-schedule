import { FormControl } from "@angular/forms";

export interface PersonalStepFormModel {
  name: FormControl<string | null>;
  phone: FormControl<string | null>;
  email: FormControl<string | null>;
}