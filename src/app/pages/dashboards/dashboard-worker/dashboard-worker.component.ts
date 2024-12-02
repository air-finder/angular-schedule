import { Component, OnInit, signal } from '@angular/core';
import { SessionUserService } from '@core/service/session-user.service';
import { Appointment } from '@models/services/dtos/appointment';
import { ScheduleService } from '@services/schedule/schedule.service';
import { CardComponent } from "../../../shared/components/card/card.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { IconButtonComponent } from '@components/button/icon-button.component';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DateHelper } from '@helpers/date.helper';

@Component({
    selector: 'app-dashboard-worker',
    imports: [
        CardComponent,
        IconButtonComponent,
        IconComponent,
        CurrencyPipe,
        DatePipe
    ],
    templateUrl: './dashboard-worker.component.html',
    styleUrl: './dashboard-worker.component.scss'
})
export class DashboardWorkerComponent implements OnInit {
  protected appointments$ = signal<Appointment[]>([]);

  constructor(
    private _scheduleService: ScheduleService,
    private _sessionUserService: SessionUserService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.refreshAppointments();
  }

  async refreshAppointments() {
    await this._scheduleService.getWorkerAppointments({serviceWorkerId: this._sessionUserService.sessionUser$().profile.serviceWorker!.id!})
      .then(result => this.appointments$.set(result.result));
  }

  protected openWhatsapp(phone: string) {
    window.open(`https://wa.me/${phone}`);
  }  

  protected getDate(dateTicks: number): Date {
    return DateHelper.getDateFromTicks(dateTicks);
  }
}
