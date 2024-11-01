import { ToastType } from "../enum/toast-type.enum";
import { BaseToast } from "./base-toast";

export class WarnToast extends BaseToast {
  override toastType: ToastType = ToastType.WARNING;
}