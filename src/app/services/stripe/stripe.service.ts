import { Injectable, signal } from '@angular/core';
import { BaseService } from '@services/base.service';
import { environment } from '../../../environments/environment';
import { InvoiceRequest } from '@models/services/stripe/invoice.request';
import { PlanResponse } from '@models/services/stripe/plan.response';

@Injectable({
  providedIn: 'root'
})
export class StripeService extends BaseService {

  private _plans = signal<PlanResponse[]>([]);
  public plans$ = this._plans.asReadonly();

  constructor() {
    super(environment.paymentsUrl, 'stripe')
  }

  async createInvoice(request: InvoiceRequest) {
    return await this.PostAsync('invoice', request);
  }
  
  async getPlans() {
    return await this.GetAsync<PlanResponse[]>('plans')
      .then(result => this._plans.set(result.result));
  }
}
