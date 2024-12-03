import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastService } from '@brunovbsilva/material';

export const toastInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  return next(req).pipe(
    tap({ error: err => {
      switch (err.status) {
        case 401:
          toastService.danger('Unauthorized');
          break;
        default:
          if(err.error.Errors) err.error.Errors.forEach((message: string) => toastService.danger(message));
          break;
      }
    }}),
    catchError(handleError)
  );
};

function handleError(err: HttpErrorResponse){
  return throwError(() => err);
}