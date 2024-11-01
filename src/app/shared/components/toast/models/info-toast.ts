import { ToastType } from "../enum/toast-type.enum";
import { BaseToast } from "./base-toast";

export class InfoToast extends BaseToast {
  override toastType: ToastType = ToastType.INFO;
}