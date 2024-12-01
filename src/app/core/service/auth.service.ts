import { computed, Injectable, signal } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { LoginResponse } from '@models/services/users/login.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWTKey = 'token';
  private readonly JWTRefresh = 'refresh-token';
  private _token = signal<string | null>(null);
  token = this._token.asReadonly();
  private _refreshToken = signal<string | null>(null);
  refreshToken = this._refreshToken.asReadonly();

  constructor(private _router: Router) {
    if(typeof window !== 'undefined') {
      const token = localStorage.getItem(this.JWTKey);
      if(token) this._token.set(token);
    }
  }

  public isAuthenticated = computed<boolean>(() => {
    const helper = new JwtHelperService();
    const token = this._token();
    return !!token && !helper.isTokenExpired(token);
  });

  login(response: LoginResponse): void {
    this.updateToken(response.token);
    this.updateRefreshToken(response.refreshToken);
  }

  logout(): void {
    localStorage.removeItem(this.JWTKey);
    this._token.set(null);
    localStorage.removeItem(this.JWTRefresh);
    this._refreshToken.set(null);
    this._router.navigate(['/login']);
  }

  private updateToken(token: string): void {
    localStorage.setItem(this.JWTKey, token);
    this._token.set(token);
  }

  private updateRefreshToken(token: string): void {
    localStorage.setItem(this.JWTRefresh, token);
    this._refreshToken.set(token);
  }
}
