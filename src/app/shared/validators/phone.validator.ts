import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const regex = /^\d{10,11}$/;

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    return regex.test(value) ? null : { 'invalid-phone': true };
  }
}