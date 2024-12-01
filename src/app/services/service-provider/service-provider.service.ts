import { Injectable, signal } from '@angular/core';
import { BaseService } from '../base.service';
import { environment } from '../../../environments/environment';
import { ServiceWorkerDto } from '@models/services/dtos/service-worker';
import { Service } from '@models/services/dtos/service';
import { PostServiceProviderRequest } from '@models/services/service-providers/post-service-provider.request';
import { ServiceProviderDto } from '@models/services/dtos/service-provider';
import { PostServiceProviderServiceRequest } from '@models/services/service-providers/post-service-provider-service.request';
import { AddWorkerRequest } from '@models/services/service-providers/add-worker.request';

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

  async getAllWorkers() {
    return await this.GetAsync<ServiceWorkerDto[]>(`workers`)
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

  async createService(request: PostServiceProviderServiceRequest) {
    return await this.PostAsync<Service>('add-service', request);
  }

  async deleteService(serviceId: string) {
    return await this.DeleteAsync(`${serviceId}/service`);
  }

  async createProvider(request: PostServiceProviderRequest) {
    return await this.PostAsync<ServiceProviderDto>('', request);
  }

  async getProvider(providerId: string) {
    return await this.GetAsync<ServiceProviderDto>(providerId);
  }

  async addWorker(request: AddWorkerRequest) {
    return await this.PostAsync<ServiceWorkerDto>('add-worker', request);
  }
}
