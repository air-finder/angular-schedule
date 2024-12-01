import { Component, viewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProviderForm } from './create-provider.form';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '@components/button/button.component';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { Router } from '@angular/router';
import { StepperComponent } from "../../../shared/components/stepper/stepper.component";
import { StepComponent } from "../../../shared/components/stepper/step/step.component";
import { ProviderStepComponent } from "./provider-step/provider-step.component";
import { LocationStepComponent } from "./location-step/location-step.component";
import { ConfirmStepComponent } from './confirm-step/confirm-step.component';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-create-provider',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    StepperComponent,
    StepComponent,
    ProviderStepComponent,
    LocationStepComponent,
    ConfirmStepComponent
],
  templateUrl: './create-provider.component.html',
  styleUrl: './create-provider.component.scss'
})
export class CreateProviderComponent {
  form = new CreateProviderForm();
  private _stepper = viewChild(StepperComponent);
  loading = false;

  constructor(
    private _providerService: ServiceProviderService,
    private _userService: UserService,
    private _router: Router
  ) {}

  submit() {
    switch (this._stepper()?.currentIndex()) {
      case 0:
      case 1:
        this._stepper()?.next();
        break;
      default:
        if(this.form.invalid || this.loading) return;
        this.loading = true;
        this._providerService.createProvider((this.form as CreateProviderForm).getRequest())
          .then(() => this._router.navigate(['/']))
          .finally(() => {
            this._userService.refreshToken();
            this.loading = false
          });
    }
  }

  getDisabled(): unknown {
    switch(this._stepper()?.currentIndex()) {
      case 0:
        return this.form.provider.invalid;
      case 1:
        return this.form.location.invalid;
      default:
        return this.form.invalid;
    }
  }
}
