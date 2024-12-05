import { FormControl } from "@angular/forms";

export interface CreateServiceFormModel {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  price: FormControl<string | null>;
  duration: FormControl<number | null>;
}