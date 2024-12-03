import { FormControl } from "@angular/forms";
import { Gender } from "@models/services/enums/gender";

export interface PersonStepRegisterFormModel {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  gender: FormControl<Gender | null>;
  birthday: FormControl<string | null>;
}