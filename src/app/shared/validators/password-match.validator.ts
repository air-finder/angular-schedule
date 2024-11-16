import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    control.get('confirm-password')?.addAsyncValidators(async () => {
      return control.get('password')?.value === control.get('confirm-password')?.value ? null : { 'password-match': true };
    });
    return null;
  }
}