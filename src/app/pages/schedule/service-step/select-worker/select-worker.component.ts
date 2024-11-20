import { Component, inject, input, OnInit } from '@angular/core';
import { ServiceProviderService } from '../../../../services/service-provider/service-provider.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from "../../../../shared/components/form-field/form-field.component";
import { TranslateModule } from '@ngx-translate/core';
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