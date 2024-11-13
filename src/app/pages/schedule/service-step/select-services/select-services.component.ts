import { AfterViewInit, Component, inject, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectServiceForm } from './select-service.form';
import { FormFieldComponent } from '@components/form-field/form-field.component';
import { ServiceProviderService } from '@services/service-provider.service';
import { Service } from '@services/dtos/service.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-select-services',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent,
    CurrencyPipe
  ],
  templateUrl: './select-services.component.html',
  styleUrl: './select-services.component.scss'
})
export class SelectServicesComponent implements AfterViewInit {
  private _providerService = inject(ServiceProviderService);
  public serviceProviderId$ = input.required<string>();
  form = input.required<SelectServiceForm>()
  protected services$ = this._providerService.currentServices$;
  protected loaded = false;

  async ngAfterViewInit(): Promise<void> {
    await this._providerService.getServices(this.serviceProviderId$())
      .then(response => response.result.forEach(service => this.pushService(service)))
      .finally(() => this.loaded = true);
  }

  private pushService(service: Service) {
    this.form().addControl(service.id, new FormControl(false));
  }
}
