import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const ragex = /^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+\ )*[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/;
    return ragex.test(value) ? null : { 'invalid-name': true };
  }
}