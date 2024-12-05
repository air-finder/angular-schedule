import { Component, viewChild } from '@angular/core';
import { ButtonComponent, FormFieldComponent, SelectComponent, SelectOptionComponent, StepComponent, StepperComponent } from '@brunovbsilva/material';
import { FirstAccessRegisterForm } from './first-access-register.form';
import { Gender } from '@models/services/enums/gender';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '@services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceWorkerService } from '@services/service-worker/service-worker.service';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-first-access-register',
  imports: [
    FormFieldComponent,
    SelectComponent,
    SelectOptionComponent,
    StepperComponent,
    StepComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    TranslateModule,
    NgxMaskDirective
  ],
  templateUrl: './first-access-register.component.html',
  styleUrl: './first-access-register.component.scss'
})
export class FirstAccessRegisterComponent {
  private _stepper = viewChild(StepperComponent);
  protected form = new FirstAccessRegisterForm();
  protected Gender = Gender;
  private _userId: string;

  constructor(
    private _userService: UserService,
    private _workerService: ServiceWorkerService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._userId = this._activatedRoute.snapshot.params['id'];
  }

  checkDisabled(): boolean {
    switch(this._stepper()?.currentIndex()) {
      case 0:
        return !this.form.person.valid;
      case 1:
        return !this.form.user.valid;
      default:
        return !this.form.valid;
    }
  }

  submit() {
    switch(this._stepper()?.currentIndex()) {
      case 0:
        if(this.form.person.valid) this._stepper()?.next();
        else this.form.person.markAllAsTouched();
        break;
      case 1:
        if(this.form.user.valid) this._stepper()?.next();
        else this.form.user.markAllAsTouched();
        break;
      case 2:
        if(this.form.valid) this.register();
        else this.form.terms.markAllAsTouched();
        break;
    }
  }

  private async register() {
    await this._userService.firstAccessRegister(this.form.getFirstAccessRequest(this._userId))
      .then(async () => await this._workerService.active())
      .finally(() => this._router.navigate(['']));
  }
}
