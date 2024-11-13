import { DatePipe } from '@angular/common';
import { Component, computed, inject, input, model, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ServiceWorkerService } from '../../../../services/service-worker.service';
import { DateHelper } from '../../../../shared/helpers/date-helper';
import { TimeModel } from '../../../../models/pages/schedule/schedule-step/time.model';
import { ScheduleStepModel } from '../../../../models/pages/schedule/schedule-step/schedule-step.model';
import { ScheduleStepForm } from '../schedule-step.form';

@Component({
  selector: 'app-select-time',
  standalone: true,
  imports: [
    DatePipe,
    ButtonComponent
  ],
  templateUrl: './select-time.component.html',
  styleUrl: './select-time.component.scss'
})
export class SelectTimeComponent {
  form = input.required<ScheduleStepForm>();
  scheduleStep$ = model.required<ScheduleStepModel>();
  private _serviceWorkerService = inject(ServiceWorkerService);

  public loading = false;

  protected times$ = computed<TimeModel[]>(() => this.getTimesObject(this._serviceWorkerService.availableTimes$()));
  private _selectedTime = signal<Date | null>(null);

  private getTimesObject(dates: Date[]): TimeModel[] {
    return dates.map(date => { 
      return { date: date, theme: this.getButtonTheme(!!this._selectedTime() && this._selectedTime() === date) } 
    });
  }

  public selectTime(time: Date) {
    this.form().start.setValue(time);
    this.form().end.setValue(new Date(time.getTime() + this.scheduleStep$().duration * 60000));
    this._selectedTime.set(time);
  }

  getButtonTheme(selected: boolean) {
    return selected ? 'secondary' : 'primary';
  }
}
