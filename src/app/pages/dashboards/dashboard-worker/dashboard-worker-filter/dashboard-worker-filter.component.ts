import { Component, effect, output, signal } from '@angular/core';
import { CardComponent, PillComponent } from '@brunovbsilva/material';
import { DateHelper } from '@helpers/date.helper';
import { GetWorkerAppointmentsRequest } from '@models/services/schedules';
import { TranslateModule } from '@ngx-translate/core';

enum Filter {
  all,
  today,
  "this-week",
  "this-month"
}

@Component({
  selector: 'app-dashboard-worker-filter',
  imports: [
    CardComponent,
    PillComponent,
    TranslateModule
  ],
  templateUrl: './dashboard-worker-filter.component.html',
  styleUrl: './dashboard-worker-filter.component.scss'
})
export class DashboardWorkerFilterComponent {
  protected filter = Filter;
  protected filter$ = signal<Filter>(Filter.today);
  public changeFilter = output<GetWorkerAppointmentsRequest>();

  constructor() {
    effect(() => this.changeFilter.emit(this.getFilterRequest(this.filter$())));
  }

  protected setFilter(filter: Filter) {
    this.filter$.set(filter);
  }

  private getFilterRequest(filter: Filter): GetWorkerAppointmentsRequest {
    return {
      serviceWorkerId: '',
      start: this.getTicks(filter, 'start'),
      end: this.getTicks(filter, 'end')
    }
  }

  private getTicks(filter: Filter, type: 'start' | 'end') {    
    let date: Date;
    switch (filter) {
      case Filter.today:
        date = new Date();
        date.setHours(0, 0, 0, 0);
        if(type === 'end') date.setDate(date.getDate() + 1);
        return DateHelper.getTicksFromDate(date);
      case Filter["this-week"]:
        date = type === 'start' ? DateHelper.getFirstDayOfWeek() : DateHelper.getLastDayOfWeek();
        if(type === 'end') date.setDate(date.getDate() + 1);
        return DateHelper.getTicksFromDate(date);
      case Filter["this-month"]:
        date = type === 'start' ? DateHelper.getFistDayOfMonth() : DateHelper.getLastDayOfMonth();
        if(type === 'end') date.setDate(date.getDate() + 1);
        return DateHelper.getTicksFromDate(date);
      default:
        return 0;
    }
  }
}
