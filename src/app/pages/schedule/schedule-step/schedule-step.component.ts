import { AfterViewInit, Component, computed, input, model, signal } from '@angular/core';
import { ScheduleStepModel } from '../../../models/pages/schedule/schedule-step/schedule-step.model';
import { ServiceWorkerService } from '@services/service-worker/service-worker.service';
import { TimeSpanHelper } from '@helpers/time-span.helper';
import { TimeModel } from '@models/pages/schedule/schedule-step/time.model';
import { DatePipe } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleStepFormModel } from '@models/pages/schedule/schedule-step/schedule-step-form.model';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent, CalendarComponent } from '@brunovbsilva/material';

@Component({
  selector: 'app-schedule-step',
  imports: [
    CalendarComponent,
    ButtonComponent,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './schedule-step.component.html',
  styleUrl: './schedule-step.component.scss'
})
export class ScheduleStepComponent implements AfterViewInit {
  scheduleStep$ = model.required<ScheduleStepModel>();
  form = input.required<FormGroup<ScheduleStepFormModel>>();
  isLoading = false;
  
  constructor(
    private _serviceWorkerService: ServiceWorkerService
  ) {}

  ngAfterViewInit(): void {
    this.form().controls.start.valueChanges.subscribe(time => this._selectedTime.set(time));
    this.form().controls.date.valueChanges.subscribe(v => {
      if (v) this.selectDate(v);
      this.resetTimes();
    });
  }

  public availableDates$ = this._serviceWorkerService.availableDates$;

  public resetComponent() {
    this.form().controls.date.reset();
  }

  //#region: SelectDay

  public async selectDate(date: Date | null) {
    if (date) await this.getTimes(date);
    else this.resetTimes();
  }

  private async getTimes(date: Date) {
    this.isLoading = true;
    await this._serviceWorkerService.getAvailableTimes({
      serviceWorkerId: this.scheduleStep$().serviceWorkerId!,
      appointmentDuration: TimeSpanHelper.FromMinutes(this.scheduleStep$().duration),
      date: date.toISOString().split('T')[0] ?? ''
    }).finally(() => this.isLoading = false);
  }

  //#endregion

  //#region: SelectTime

  protected times$ = computed<TimeModel[]>(() => this.getTimesObject(this._serviceWorkerService.availableTimes$()));
  private _selectedTime = signal<Date | null>(null);

  private getTimesObject(dates: Date[]): TimeModel[] {
    return dates.map(date => { 
      return { date: date, theme: this.getButtonTheme(!!this._selectedTime() && this._selectedTime() === date) } 
    });
  }

  public selectTime(time: Date) {
    this.form().controls.start.setValue(time);
    this.form().controls.end.setValue(new Date(time.getTime() + this.scheduleStep$().duration * 60000));
  }

  private resetTimes() {
    this.form().controls.start.reset();
    this.form().controls.end.reset();
    this._serviceWorkerService.resetTimes();
    this._selectedTime.set(null);
  }

  getButtonTheme(selected: boolean) {
    return selected ? 'secondary' : 'primary';
  }

  //#endregion
}
