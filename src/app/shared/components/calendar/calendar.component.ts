import { DatePipe } from '@angular/common';
import { Component, computed, input, OnInit, output, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconButtonComponent } from '../button/icon-button.component';
import { IconComponent } from '../icon/icon.component';
import { DateCalendar } from './models/date-calendar';
@Component({
  selector: 'calendar',
  standalone: true,
  imports: [
    DatePipe,
    TranslateModule,
    IconButtonComponent,
    IconComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  host: {
    class: 'calendar'
  }
})
export class CalendarComponent implements OnInit {

  public minDate = input<Date | null>(null);
  public maxDate = input<Date | null>(null);
  public availableDates = input<Date[] | null>(null);
  public onSelectDate = output<Date>();

  private _currentDate = signal<Date>(new Date());
  protected _currentMonth = computed<number>(() => this._currentDate().getMonth());
  protected _currentYear = computed<number>(() => this._currentDate().getFullYear());

  private _labelDays = signal<string[]>([]);
  public labelDays$ = this._labelDays.asReadonly();
  public days$ = computed<DateCalendar[]>(() => this.getDays());
  private _selectedDate = signal<Date | null>(null);

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.setLabelDays();
    this.getDays();
  }

  private setLabelDays() {
    this._labelDays.set([
      this.translate.instant('calendar.label.short.sunday'),
      this.translate.instant('calendar.label.short.monday'),
      this.translate.instant('calendar.label.short.tuesday'),
      this.translate.instant('calendar.label.short.wednesday'),
      this.translate.instant('calendar.label.short.thursday'),
      this.translate.instant('calendar.label.short.friday'),
      this.translate.instant('calendar.label.short.saturday')
    ]);
  }

  private getDays() : DateCalendar[] {
    const days = [];
    const startDay = new Date(this._currentYear(), this._currentMonth(), 1);
    const startDayOfWeek = startDay.getDay();
    const lastMonthStartDay = new Date(this._currentYear(), this._currentMonth(), 1-startDayOfWeek);
    const lastDayOfMonth = new Date(this._currentYear(), this._currentMonth()+1, 0);
    const lastDayOfMonthDay = lastDayOfMonth.getDay();
    const lastDay = new Date(this._currentYear(), this._currentMonth()+1, 13-lastDayOfMonthDay);

    let currentDay = lastMonthStartDay;

    while (currentDay <= lastDay) {
      const isUnavailable = this.minDate() && currentDay < this.minDate()! ||
       this.maxDate() && currentDay > this.maxDate()! ||
       this.availableDates() && !this.availableDates()!.some(date => date.toDateString() === currentDay.toDateString());
      days.push({
        date: currentDay,
        isCurrentMonth: currentDay.getMonth() === this._currentMonth(),
        isAvailable: !isUnavailable,
        selected: !!this._selectedDate() && this._selectedDate()!.toDateString() === currentDay.toDateString()
      });
      currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1);
    }

    return days;
  }

  public nextMonth() {
    this._currentDate.update(date => new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  public previousMonth() {
    this._currentDate.update(date => new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  public selectDate(date: DateCalendar) {
    if (!date.isAvailable) return
    this._selectedDate.set(date.date);
    this.onSelectDate.emit(date.date);
  }
}
