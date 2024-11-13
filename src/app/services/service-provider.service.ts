import { Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';
import { ServiceWorkerDto } from './dtos/service-worker.interface';
import { Service } from './dtos/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService extends BaseService {

  private _workers = signal<ServiceWorkerDto[]>([]);
  public workers$ = this._workers.asReadonly();
  
  private _currentServices = signal<Service[]>([]);
  public currentServices$ = this._currentServices.asReadonly();

  constructor() {
    super(environment.scheduleUrl, "serviceprovider");
  }

  async getWorkers(providerId: string) {
    return await this.GetAsync<ServiceWorkerDto[]>(`${providerId}/workers`)
      .then(workers => {
        this._workers.set(workers.result);
        return workers;
      });
  }

  async getServices(providerId: string) {
    return await this.GetAsync<Service[]>(`${providerId}/services`)
      .then(services => {
        var result = services.result;
        result.forEach(service => service.price = service.price/100);
        this._currentServices.set(result);
        return services;
      });
  }
}
