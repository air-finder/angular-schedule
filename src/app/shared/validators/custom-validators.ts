import { businessCodeValidator } from "./business-code.validator";
import { emailValidator } from "./email.validator";
import { nameValidator } from "./name.validator";
import { passwordMatchValidator } from "./password-match.validator";
import { passwordValidator } from "./password.validator";
import { phoneValidator } from "./phone.validator";
import { usernameValidator } from "./username.validator";

export class CustomValidators {
  public static emailValidator = emailValidator()
  public static nameValidator = nameValidator()
  public static usernameValidator = usernameValidator()
  public static phoneValidator = phoneValidator()
  public static passwordValidator = passwordValidator()
  public static passwordMatchValidator = passwordMatchValidator()
  public static businessCodeValidator = businessCodeValidator();
}