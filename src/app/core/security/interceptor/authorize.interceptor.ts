import { HttpContextToken, HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { inject, InjectionToken } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { UserService } from '@services/user/user.service';

const lang = 'pt-BR';
export const headersAllowOrigin = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
export const WindowToken     = new InjectionToken('Window');
export const skipBearerToken = new HttpContextToken(() => false)

export const authorizeInterceptor: HttpInterceptorFn = (req, next) => {
  const _authService = inject(AuthService);
  const _userService = inject(UserService);

  if (!req.context.get(skipBearerToken)) {
    req = req.clone({
      setHeaders: {
        'Authorization'  : `Bearer ${_authService.token()}`,
        'Accept-Language': lang,
      },
    });
  }
  
  return next(req).pipe(
    tap({ error: err => {
      if(err.status === 401) _userService.refreshToken();
    }}),
    catchError(handleError)
  );
};

function handleError(err: HttpErrorResponse){  
  return throwError(() => err);
}
