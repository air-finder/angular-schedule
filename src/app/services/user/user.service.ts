import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { LoginRequest } from '../../models/services/users/login.request';
import { UpdatePasswordRequest } from '../../models/services/users/update-password.request';
import { ForgotPasswordRequest } from '../../models/services/users/forgot-password.request';
import { ForgotPasswordCodeRequest } from '../../models/services/users/forgot-password-code.request';
import { ForgotPasswordUpdateRequest } from '../../models/services/users/forgot-password-update.request';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '@models/services/users/login.response';
import { AuthService } from '@core/service/auth.service';
import { FirstAccessRequest } from '@models/services/users/first-access.request';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  constructor(
    private _authService: AuthService,
  ) {
    super(environment.authUrl, "user");
  }

  async login(request: LoginRequest) {
    return await this.PostAsync<LoginResponse>('', request)
      .then(response => this._authService.login(response.result));
  }

  async refreshToken() {
    const refreshToken = this._authService.refreshToken();
    if (refreshToken) {
      return await this.PostAsync<LoginResponse>('refresh-token', { refreshToken: refreshToken })
        .then(response => this._authService.login(response.result));
    }
    this._authService.logout();
  }

  async password(request: UpdatePasswordRequest) {
    return await this.PatchAsync<null>('password', request);
  }

  async forgotPassword(request: ForgotPasswordRequest) {
    return await this.PostAsync<null>('password/token', request);
  }

  async forgotPasswordCode(request: ForgotPasswordCodeRequest) {
    return await this.PatchAsync<null>('password/token', request);
  }

  async forgotPasswordUpdate(request: ForgotPasswordUpdateRequest) {
    return await this.PatchAsync<null>('password/token-update', request);
  }

  async firstAccessRegister(request: FirstAccessRequest) {
    return await this.PatchAsync<LoginResponse>("first-access", request)
      .then(response => this._authService.login(response.result));
  }
}
