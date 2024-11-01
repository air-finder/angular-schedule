import { ToastType } from "../enum/toast-type.enum";
import { BaseToast } from "./base-toast";

export class DangerToast extends BaseToast {
  override toastType: ToastType = ToastType.DANGER;
}