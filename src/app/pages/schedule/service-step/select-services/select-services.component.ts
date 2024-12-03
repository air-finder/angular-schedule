import { AfterViewInit, Component, inject, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectServiceForm } from './select-service.form';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { CurrencyPipe } from '@angular/common';
import { Service } from '@models/services/dtos/service';
import { TranslateModule } from '@ngx-translate/core';
import { FormFieldComponent } from '@brunovbsilva/material';

@Component({
    selector: 'app-select-services',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        FormFieldComponent,
        CurrencyPipe,
        TranslateModule
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
