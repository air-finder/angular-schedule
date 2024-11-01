import { inject } from "@angular/core";
import { ToastType } from "../enum/toast-type.enum";
import { ToastService } from "../service/toast.service";

export abstract class BaseToast {
  protected toastType: ToastType = ToastType.SUCCESS;
  constructor(public readonly message: string) {}
}