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
      scopes: JSON.parse(this.decodedToken$().scopes),
      profile: JSON.parse(this.decodedToken$().profile)
    }
  });
  userId$ = computed(() => this.sessionUser$().profile.id);

  constructor(private _authService: AuthService) { }

  public hasScope(scope: string): boolean {
    return this.sessionUser$().scopes.includes(scope);
  }
}