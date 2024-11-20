import { Component, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@components/form-field/form-field.component';
import { CreateProviderFirstStepFormModel } from '@models/pages/dashboard/create-provider-form-first-step.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-provider-step',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent
  ],
  templateUrl: './provider-step.component.html',
  styleUrl: './provider-step.component.scss'
})
export class ProviderStepComponent {
  form = input.required<FormGroup<CreateProviderFirstStepFormModel>>();
}