import { Component, input, model } from '@angular/core';
import { SelectDayComponent } from "./select-day/select-day.component";
import { SelectTimeComponent } from "./select-time/select-time.component";
import { ScheduleStepModel } from '../../../models/pages/schedule/schedule-step/schedule-step.model';
import { ScheduleStepForm } from './schedule-step.form';

@Component({
  selector: 'app-schedule-step',
  standalone: true,
  imports: [SelectDayComponent, SelectTimeComponent],
  templateUrl: './schedule-step.component.html',
  styleUrl: './schedule-step.component.scss'
})
export class ScheduleStepComponent {
  scheduleStep$ = model.required<ScheduleStepModel>();
  form = input.required<ScheduleStepForm>();
}
