import { Component, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepperComponent } from '../../shared/components/stepper/stepper.component';
import { StepComponent } from '../../shared/components/stepper/step/step.component';
import { RegisterForm } from './register.form';
import { FormFieldComponent } from '../../shared/components/form-field/form-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { SelectComponent } from '../../shared/components/select/select.component';
import { SelectOptionComponent } from '../../shared/components/select/select-option/select-option.component';
import { Gender } from '../../services/enums/gender';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    StepperComponent,
    StepComponent,
    FormFieldComponent,
    SelectComponent,
    SelectOptionComponent,
    ButtonComponent,
    TranslateModule
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
  ) { }

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
