import { Injectable } from '@angular/core';
import { BaseService } from '@services/base.service';
import { environment } from '../../../environments/environment';
import { Appointment } from '@models/services/dtos/appointment';
import { GetAppointmentHistoryRequest, GetAppointmentHistoryResponse, GetWorkerAppointmentsRequest, PostAppointmentRequest, RemarkAppointmentRequest } from '@models/services/schedules';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends BaseService {
  constructor() {
    super(environment.scheduleUrl, "schedule");
  }

  async postAppointment(request: PostAppointmentRequest) {
    return await this.PostAsync<Appointment>('', request);
  }

  async remarkAppointment(request: RemarkAppointmentRequest) {
    return await this.PostAsync<Appointment>('remark', request);
  }

  async cancelAppointment(id: string) {
    return await this.PatchAsync<null>(`cancel/${id}`);
  }

  async getWorkerAppointments(request: GetWorkerAppointmentsRequest) {
    return await this.GetAsync<Appointment[]>('', request);
  }

  async getAppointmentHistory(request: GetAppointmentHistoryRequest) {
    return await this.GetAsync<GetAppointmentHistoryResponse[]>('history', request);
  }
}
