import { Component, input } from '@angular/core';
import { CreateProviderForm } from '../create-provider.form';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-confirm-step',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './confirm-step.component.html',
  styleUrl: './confirm-step.component.scss'
})
export class ConfirmStepComponent {
  form = input.required<CreateProviderForm>();
}
