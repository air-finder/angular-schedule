import { Component, input } from '@angular/core';
import { BaseToast } from '../models/base-toast';
import { ToastType } from '../enum/toast-type.enum';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'toast-item',
  standalone: true,
  imports: [],
  template: `
    <div class="toast-message" [innerHTML]="toast().message"></div>
    <div class="toast-close" (click)="close(toast())">&times;</div>
  `,
  styleUrl: './toast-item.component.scss',
  host: {
    class: 'toast md-shadow',
    '[class.toast--success]': 'toast().toastType === toastType.SUCCESS',
    '[class.toast--warn]': 'toast().toastType === toastType.WARNING',
    '[class.toast--info]': 'toast().toastType === toastType.INFO',
    '[class.toast--danger]': 'toast().toastType === toastType.DANGER',
  }
})
export class ToastItemComponent {
  protected toastType = ToastType;
  toast = input.required<BaseToast>();

  constructor(private _toastService: ToastService) {}

  close(toast: BaseToast) {
    this._toastService.remove(toast);
  }
}
