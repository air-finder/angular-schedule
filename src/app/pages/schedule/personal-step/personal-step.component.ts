import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../../shared/components/form-field/form-field.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-personal-step',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormFieldComponent,
    TranslateModule
],
  templateUrl: './personal-step.component.html',
  styleUrl: './personal-step.component.scss'
})
export class PersonalStepComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });
}
