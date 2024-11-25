import { Component, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { FormFieldComponent } from '@components/form-field/form-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { CreateServiceForm } from './create-service.form';
import { SessionUserService } from '@core/service/session-user.service';
import { CreateServiceFormModel } from '@models/pages/dashboard/service-create-form.model';

@Component({
  selector: 'app-manage-services-create',
  standalone: true,
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent,
    ButtonComponent,
    TranslateModule
  ],
  templateUrl: './manage-services-create.component.html',
  styleUrl: './manage-services-create.component.scss'
})
export class ManageServicesCreateComponent {
  public onCreate = output();
  form: FormGroup<CreateServiceFormModel> = new CreateServiceForm();
  private _form = this.form as CreateServiceForm;

  constructor(
    private _providerService: ServiceProviderService,
    private _sessionUser: SessionUserService
  ) {}

  submit() {
    if (this.form.valid) {
      this._providerService.createService(
        this._form.getRequest(this._sessionUser.sessionUser$().profile.serviceProvider!.id)
      ).then(() => {
        this.onCreate.emit();
        this.form.reset();
      });
    }
  }

  clear() {
    this.form.reset();
  }
}
