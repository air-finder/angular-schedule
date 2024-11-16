import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialRegex = /[!@#$%^&*()_+}{:|?><]/;

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const errors: ValidationErrors = {};
    if (!lowercaseRegex.test(value)) errors['invalid-password-lowercase'] = true;
    if (!uppercaseRegex.test(value)) errors['invalid-password-uppercase'] = true;
    if (!numberRegex.test(value)) errors['invalid-password-number'] = true;
    if (!specialRegex.test(value)) errors['invalid-password-special'] = true;
    if (value.length < 10) errors['invalid-password-length'] = true;

    return Object.keys(errors).length ? errors : null;
  };
}