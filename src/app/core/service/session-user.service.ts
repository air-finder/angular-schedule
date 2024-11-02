import { computed, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SessionUser } from '../model/session-user';

@Injectable({
  providedIn: 'root'
})
export class SessionUserService {
  
  private helper = new JwtHelperService();
  private decodedToken$ = computed(() => this.helper.decodeToken(this._authService.token()!));
  sessionUser$ = computed<SessionUser>(() => {
    return {
      scopes: this.decodedToken$().scopes,
      profile: JSON.parse(this.decodedToken$().profile)
    }
  });

  constructor(private _authService: AuthService) { }

}