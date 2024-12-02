import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from "../../../shared/components/form-field/form-field.component";
import { TranslateModule } from '@ngx-translate/core';
import { PersonalStepFormModel } from '@models/pages/schedule/personal-step/personal-step-form.model';

@Component({
    selector: 'app-personal-step',
    imports: [
        ReactiveFormsModule,
        FormFieldComponent,
        TranslateModule
    ],
    templateUrl: './personal-step.component.html',
    styleUrl: './personal-step.component.scss'
})
export class PersonalStepComponent {
  public form = input.required<FormGroup<PersonalStepFormModel>>()
}
