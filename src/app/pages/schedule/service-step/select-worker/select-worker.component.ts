import { Component, inject, input, InputSignal, model, OnInit, signal } from '@angular/core';
import { ServiceProviderService } from '../../../../services/service-provider.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceWorkerDto } from '../../../../services/dtos/service-worker.interface';
import { FormFieldComponent } from "../../../../shared/components/form-field/form-field.component";
import { TranslateModule } from '@ngx-translate/core';
import { ServiceStepForm } from '../service-step.form';
import { ServiceStepFormModel } from '@models/pages/schedule/service-step/service-step-form.model';

@Component({
  selector: 'app-select-worker',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent,
    TranslateModule
],
  templateUrl: './select-worker.component.html',
  styleUrl: './select-worker.component.scss'
})
export class SelectWorkerComponent implements OnInit {
  public serviceProviderId$ = input.required<string>();
  form = input.required<FormGroup<ServiceStepFormModel>>()

  private _providerService = inject(ServiceProviderService);
  public workers$ = this._providerService.workers$;
  loading = false;
  
  async ngOnInit(): Promise<void> {
    await this.getWorkers(this.serviceProviderId$());
  }

  private async getWorkers(providerId: string) {
    this.loading = true;
    await this._providerService.getWorkers(providerId)
      .finally(() => this.loading = false);
  }
}