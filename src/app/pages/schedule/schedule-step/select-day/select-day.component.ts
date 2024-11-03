import { Component } from '@angular/core';
import { CalendarComponent } from "../../../../shared/components/calendar/calendar.component";

@Component({
  selector: 'app-select-day',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './select-day.component.html',
  styleUrl: './select-day.component.scss'
})
export class SelectDayComponent {
  date = null;
  maxDate = null;
  availableDates = [
    new Date(2024, 9, 1),
    new Date(2024, 10, 2),
    new Date(2024, 10, 4),
    new Date(2024, 10, 5)
  ]
}
