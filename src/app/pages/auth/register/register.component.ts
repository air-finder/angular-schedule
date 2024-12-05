import { Component, viewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterForm } from './register.form';
import { TranslateModule } from '@ngx-translate/core';
import { Gender } from '../../../models/services/enums/gender';
import { PeopleService } from '../../../services/people/people.service';
import { Router } from '@angular/router';
import { ButtonComponent, FormFieldComponent, SelectComponent, SelectOptionComponent, StepComponent, StepperComponent } from '@brunovbsilva/material';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
    selector: 'app-register',
    imports: [
        ReactiveFormsModule,
        StepperComponent,
        StepComponent,
        FormFieldComponent,
        SelectComponent,
        SelectOptionComponent,
        ButtonComponent,
        TranslateModule,
        NgxMaskDirective
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private _stepper = viewChild(StepperComponent);
  form = new RegisterForm();
  protected Gender = Gender;

  constructor(
    private _peopleService: PeopleService,
    private _router: Router
  ) {}

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

  private register() {
    this._peopleService
      .addUser(this.form.getRegisterRequest())
      .then(() => this._router.navigate(['/login']));
  }
}
