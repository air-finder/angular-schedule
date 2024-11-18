import { Injectable, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { environment } from '../../../environments/environment';
import { ServiceWorkerDto } from '@models/services/dtos/service-worker';
import { Service } from '@models/services/dtos/service';
import { PostServiceProviderRequest } from '@models/services/service-providers/post-service-provider.request';
import { ServiceProviderDto } from '@models/services/dtos/service-provider';

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
        const result = services.result;
        result.forEach(service => service.price = service.price/100);
        this._currentServices.set(result);
        return services;
      });
  }

  async createProvider(request: PostServiceProviderRequest) {
    return await this.PostAsync<ServiceProviderDto>('', request);
  }
}
