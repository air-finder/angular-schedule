import { Injectable, signal } from '@angular/core';
import { BaseToast } from '../models/base-toast';
import { SuccessToast } from '../models/success-toast';
import { DangerToast } from '../models/danger-toast';
import { WarnToast } from '../models/warn-toast';
import { InfoToast } from '../models/info-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts = signal<BaseToast[]>([]);
  private readonly defaultDuration = 5000;
  public toast$ = this.toasts.asReadonly();

  success(message: string, duration: number = this.defaultDuration): void {
    this.append(new SuccessToast(message), duration);
  }

  danger(message: string, duration: number = this.defaultDuration): void {
    this.append(new DangerToast(message), duration);
  }
  
  warning(message: string, duration: number = this.defaultDuration): void {
    this.append(new WarnToast(message), duration);
  }

  info(message: string, duration: number = this.defaultDuration): void {
    this.append(new InfoToast(message), duration);
  }

  private append(toast: BaseToast, duration: number): void {
    this.toasts.update((toasts) => [...toasts, toast]);
    setTimeout(() => this.remove(toast), duration);
  }

  public remove(toast: BaseToast): void {
    this.toasts.update((toasts) => toasts.filter((t) => t !== toast));
  }
}
