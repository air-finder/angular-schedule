import { Component } from '@angular/core';
import { ToastService } from './service/toast.service';
import { ToastItemComponent } from './toast-item/toast-item.component';
import { enterLeaveAnimations } from './animations/enter-leave.animations';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [ToastItemComponent],
  template: `
    @for(toast of toasts$(); track $index) {
      <toast-item [toast]="toast" [@enter-leave]></toast-item>
    }
  `,
  styleUrl: './toast.component.scss',
  animations: [enterLeaveAnimations]
})
export class ToastComponent {

  public toasts$ = this._toastService.toast$;

  constructor(private _toastService: ToastService) {}
}
