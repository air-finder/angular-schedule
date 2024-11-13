import { ToastType } from "../enum/toast-type.enum";

export abstract class BaseToast {
  protected toastType: ToastType = ToastType.SUCCESS;
  constructor(public readonly message: string) {}
}