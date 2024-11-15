import { FormControl } from "@angular/forms";

export interface PersonalStepFormModel {
  name: FormControl<string>;
  phone: FormControl<string>;
  email: FormControl<string>;
}