import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { LoginRequest } from './models/user/login.request';
import { UpdatePasswordRequest } from './models/user/update-password.request';
import { ForgotPasswordRequest } from './models/user/forgot-password.request';
import { ForgotPasswordCodeRequest } from './models/user/forgot-password-code.request';
import { ForgotPasswordUpdateRequest } from './models/user/forgot-password-update.request';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  constructor() {
    super(environment.authUrl, "user");
  }

  async login(request: LoginRequest) {
    return await this.PostAsync<string>('', request);
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
}
