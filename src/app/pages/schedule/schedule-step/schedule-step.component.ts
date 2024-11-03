import { Component } from '@angular/core';
import { SelectDayComponent } from "./select-day/select-day.component";
import { SelectTimeComponent } from "./select-time/select-time.component";

@Component({
  selector: 'app-schedule-step',
  standalone: true,
  imports: [SelectDayComponent, SelectTimeComponent],
  templateUrl: './schedule-step.component.html',
  styleUrl: './schedule-step.component.scss'
})
export class ScheduleStepComponent {

}
