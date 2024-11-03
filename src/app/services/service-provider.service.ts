import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';
import { ServiceWorkerDto } from './dtos/service-worker.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService extends BaseService {

  constructor() {
    super(environment.scheduleUrl, "serviceprovider");
  }

  async getWorkers(providerId: string) {
    return await this.GetAsync<ServiceWorkerDto[]>(`${providerId}/workers`);
  }
}
