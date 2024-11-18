import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function businessCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    if (checkBusinessCode(value)) return null;
    return { 'invalid-business-code': true };
  };
}

function checkBusinessCode(value: string): boolean {
  const multiplicador1 = [ 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
  const multiplicador2 = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
  let soma;
  let resto;
  let digito;
  let tempCnpj;
  value = value.trim();
  value = value.replace(/\./g, "").replace(/-/g, "").replace(/\//g, "");
  if (value.length != 14) return false;

  tempCnpj = value.substring(0, 12);
  soma = 0;
  for (let i = 0; i < 12; i++)
    soma += Number.parseInt(tempCnpj[i]) * multiplicador1[i];
  resto = (soma % 11);
  if (resto < 2) resto = 0;
  else resto = 11 - resto;

  digito = resto.toString();
  tempCnpj = tempCnpj + digito;
  soma = 0;
  for (let i = 0; i < 13; i++)
    soma += Number.parseInt(tempCnpj[i]) * multiplicador2[i];
  resto = (soma % 11);
  if (resto < 2) resto = 0;
  else resto = 11 - resto;

  digito = digito + resto.toString();
  return value.endsWith(digito);
}