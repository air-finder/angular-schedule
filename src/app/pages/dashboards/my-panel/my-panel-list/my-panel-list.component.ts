import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CardComponent, IconButtonComponent, IconComponent } from '@brunovbsilva/material';
import { SessionUserService } from '@core/service/session-user.service';
import { DateHelper } from '@helpers/date.helper';
import { Appointment } from '@models/services/dtos/appointment';
import { GetWorkerAppointmentsRequest } from '@models/services/schedules';
import { TranslateModule } from '@ngx-translate/core';
import { ScheduleService } from '@services/schedule/schedule.service';

interface GroupedAppointment {
  date: Date;
  appointments: Appointment[];
}

@Component({
  selector: 'app-my-panel-list',
  imports: [
    CardComponent,
    IconButtonComponent,
    IconComponent,
    TranslateModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './my-panel-list.component.html',
  styleUrl: './my-panel-list.component.scss'
})
export class MyPanelListComponent {
  private appointments$ = signal<Appointment[]>([]);
  protected groupedAppointments$ = computed<GroupedAppointment[]>(() => {
    const grouped = this.appointments$().reduce((acc, appointment) => {
      const date = DateHelper.getStartDateFromTicks(appointment.start);
      const dateKey = date.toISOString().split('T')[0];

      if (!acc[dateKey]) acc[dateKey] = { date, appointments: [] };

      acc[dateKey].appointments.push(appointment);
      return acc;
    },
    {} as Record<string, GroupedAppointment>);
    return Object.values(grouped);
  })

  constructor(
    private _scheduleService: ScheduleService,
    private _sessionUserService: SessionUserService
  ) {}

  public async refreshAppointments(request: GetWorkerAppointmentsRequest) {
    request.serviceWorkerId = this._sessionUserService.sessionUser$().profile.serviceWorker!.id;
    await this._scheduleService.getWorkerAppointments(request)
      .then(result => this.appointments$.set(result.result));
  }

  protected openWhatsapp(phone: string) {
    window.open(`https://wa.me/${phone}`);
  }  

  protected getDate(dateTicks: number): Date {
    return DateHelper.getDateFromTicks(dateTicks);
  }
  
  getTheme(ticks: number) {
    const ticksNow = DateHelper.getTicksFromDate(new Date());
    if (ticks <= ticksNow) return 'success';
    return undefined;
  }
}
