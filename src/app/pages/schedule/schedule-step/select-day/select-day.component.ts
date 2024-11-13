import { Component, inject, input, model } from '@angular/core';
import { CalendarComponent } from "../../../../shared/components/calendar/calendar.component";
import { ServiceWorkerService } from '../../../../services/service-worker.service';
import { ScheduleStepModel } from '../../../../models/pages/schedule/schedule-step/schedule-step.model';
import { TimeSpanHelper } from '../../../../shared/helpers/time-span';
import { ScheduleStepForm } from '../schedule-step.form';

@Component({
  selector: 'app-select-day',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './select-day.component.html',
  styleUrl: './select-day.component.scss'
})
export class SelectDayComponent {
  form = input.required<ScheduleStepForm>();
  private _serviceWorkerService = inject(ServiceWorkerService);
  scheduleStep$ = model.required<ScheduleStepModel>();
  public availableDates$ = this._serviceWorkerService.availableDates$;

  public selectDate(date: Date) {
    this.form().date.setValue(date);
    this._serviceWorkerService.getAvailableTimes({
      serviceWorkerId: this.scheduleStep$().serviceWorkerId!,
      appointmentDuration: TimeSpanHelper.FromMinutes(this.scheduleStep$().duration),
      date: this.form().date.value?.toISOString().split('T')[0] ?? ''
    });
  }
}
