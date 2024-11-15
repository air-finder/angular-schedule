import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const ragex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return ragex.test(value) ? null : { 'invalid-email': true };
  }
}