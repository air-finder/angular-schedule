import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const ragex = /^\d{10,11}$/;
    return ragex.test(value) ? null : { 'invalid-phone': true };
  }
}