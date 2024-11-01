import { computed, Injectable, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWTKey = 'token';
  private _token = signal<string | null>(null);
  token = this._token.asReadonly();

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

  login(token: string): void {
    this.updateToken(token);
  }

  logout(): void {
    localStorage.removeItem(this.JWTKey);
    this._token.set(null);
    this._router.navigate(['/login']);
  }

  updateToken(token: string): void {
    localStorage.setItem(this.JWTKey, token);
    this._token.set(token);
  }
}
