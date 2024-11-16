import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const regex = /^(([a-z0-9]+_)*([a-z0-9]+\.)*)*[a-z0-9]+$/;

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    return regex.test(value) ? null : { 'invalid-username': true };
  }
}