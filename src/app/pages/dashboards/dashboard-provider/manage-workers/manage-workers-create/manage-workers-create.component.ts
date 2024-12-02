import { Component, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { AddWorkerForm, AddWorkerFormModel } from './add-worker.form';
import { FormFieldComponent } from "../../../../../shared/components/form-field/form-field.component";
import { ButtonComponent } from '@components/button/button.component';
import { UserService } from '@services/user/user.service';

@Component({
    selector: 'app-manage-workers-create',
    imports: [
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        FormFieldComponent,
        ButtonComponent
    ],
    templateUrl: './manage-workers-create.component.html',
    styleUrl: './manage-workers-create.component.scss'
})
export class ManageWorkersCreateComponent {

  public form: FormGroup<AddWorkerFormModel> = new AddWorkerForm();
  private _form = this.form as AddWorkerForm;
  public onCreate = output();

  constructor(
    private _providerService: ServiceProviderService,
    private _userService: UserService
  ) {}

  submit() {
    if(this.form.invalid) return;
    this._providerService.addWorker(this._form.GetRequest())
      .then(() => {
        if(this._form.addMe.value) this._userService.refreshToken();
      })
      .then(() => this.onCreate.emit())
      .finally(() => this.form.reset());
  }

  clear() {
    this.form.reset();
  }

}
