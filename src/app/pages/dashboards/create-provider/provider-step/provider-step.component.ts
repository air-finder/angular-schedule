import { Component, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@brunovbsilva/material';
import { CreateProviderFirstStepFormModel } from '@models/pages/dashboard/create-provider-form-first-step.model';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
    selector: 'app-provider-step',
    imports: [
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        FormFieldComponent,
        NgxMaskDirective
    ],
    templateUrl: './provider-step.component.html',
    styleUrl: './provider-step.component.scss'
})
export class ProviderStepComponent {
  form = input.required<FormGroup<CreateProviderFirstStepFormModel>>();
}
