import { Injectable, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { environment } from '../../../environments/environment';
import { GetAvailableDaysRequest } from '../../models/services/service-workers/get-available-days.request';
import { GetAvailableTimesRequest } from '../../models/services/service-workers/get-available-times.request';
import { DateHelper } from '../../shared/helpers/date.helper';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService extends BaseService{

  private _availableDates = signal<Date[]>([]);
  private _availableTimes = signal<Date[]>([]);
  public availableDates$ = this._availableDates.asReadonly();
  public availableTimes$ = this._availableTimes.asReadonly();

  constructor() {
    super(environment.scheduleUrl, "serviceWorker");
  }

  async getAvailableDays(params: GetAvailableDaysRequest) {
    await this.GetAsync<string[]>('available-days', params)
      .then(dates => {
        this._availableDates.set(dates.result.map(date => DateHelper.getDateFromISOString(date)));
        return dates;
      });
  }

  async getAvailableTimes(params: GetAvailableTimesRequest) {
    return await this.GetAsync<number[]>('available-times', params)
      .then(dates => {
        this._availableTimes.set(dates.result.map(date => DateHelper.getDateFromTicks(date)));
        return dates;
      });
  }

  async active() {
    return await this.PatchAsync('active');
  }

  async delete(workerId: string) {
    return await this.DeleteAsync(`${workerId}`);
  }

  resetTimes() {
    this._availableTimes.set([]);
  }
}
