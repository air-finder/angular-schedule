import { Component, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { CreateServiceForm } from './create-service.form';
import { SessionUserService } from '@core/service/session-user.service';
import { CreateServiceFormModel } from '@models/pages/dashboard/service-create-form.model';
import { ButtonComponent, FormFieldComponent, SelectComponent, SelectOptionComponent } from '@brunovbsilva/material';
import { NgxMaskDirective } from 'ngx-mask';

interface SelectOption { 
  display: string;
  value: number;
}

@Component({
    selector: 'app-manage-services-create',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        FormFieldComponent,
        ButtonComponent,
        SelectComponent,
        SelectOptionComponent,
        TranslateModule,
        NgxMaskDirective
    ],
    templateUrl: './manage-services-create.component.html',
    styleUrl: './manage-services-create.component.scss'
})
export class ManageServicesCreateComponent {
  public create = output();
  form: FormGroup<CreateServiceFormModel> = new CreateServiceForm();
  private _form = this.form as CreateServiceForm;
  protected options: SelectOption[] = [
    { display: '15 min', value: 15 },
    { display: '30 min', value: 30 },
    { display: '45 min', value: 45 },
    { display: '1 hr', value: 60 },
    { display: '1 hr 15 min', value: 75 },
    { display: '1 hr 30 min', value: 90 },
    { display: '1 hr 45 min', value: 105 },
    { display: '2 hr', value: 120 },
    { display: '2 hr 15 min', value: 135 },
    { display: '2 hr 30 min', value: 150 },
    { display: '2 hr 45 min', value: 165 },
    { display: '3 hr', value: 180 },
    { display: '3 hr 15 min', value: 195 },
    { display: '3 hr 30 min', value: 210 },
    { display: '3 hr 45 min', value: 225 },
    { display: '4 hr', value: 240 }
  ];

  constructor(
    private _providerService: ServiceProviderService,
    private _sessionUser: SessionUserService
  ) {}

  submit() {
    if (this.form.valid) {
      this._providerService.createService(
        this._form.getRequest(this._sessionUser.sessionUser$().profile.serviceProvider!.id)
      ).then(() => {
        this.create.emit();
        this.form.reset();
      });
    }
  }

  clear() {
    this.form.reset();
  }
}
