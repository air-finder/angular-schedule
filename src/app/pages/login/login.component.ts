import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../shared/components/form-field/form-field.component";
import { UserService } from '../../services/user/user.service';
import { LoginRequest } from '../../models/services/users/login.request';
import { AuthService } from '../../core/service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnchorComponent, ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent,
    AnchorComponent,
    ButtonComponent,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  })
  loading = signal(false);

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private _router: Router
  ) {}

  test() {
    this.loading.set(true);
    this.userService
      .login(this.form.value as LoginRequest)
      .then(r => this.authService.login(r.result))
      .then(() => this._router.navigate(['']))
      .finally(() => this.loading.set(false));
  }
}
