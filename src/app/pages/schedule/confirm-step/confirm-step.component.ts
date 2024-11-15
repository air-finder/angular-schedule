import { Component, computed, inject, input } from '@angular/core';
import { ScheduleForm } from '../schedule.form';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { ServiceSummary } from '@models/pages/schedule/confirm-step/service-summary';

@Component({
  selector: 'app-confirm-step',
  standalone: true,
  imports: [ DatePipe, CurrencyPipe ],
  templateUrl: './confirm-step.component.html',
  styleUrl: './confirm-step.component.scss',
})
export class ConfirmStepComponent {
  form = input.required<ScheduleForm>();
  private _providerService = inject(ServiceProviderService);
  public worker$ = computed(() => 
    this._providerService.workers$().find(worker => worker.id === this.form().serviceStep.serviceWorkerId.value)?.worker.person.name
  );
  protected services$ = computed<ServiceSummary[]>(() => {
    const ids = Object.keys(this.form().serviceStep.services.value).filter(key => this.form().serviceStep.services.value[key]);
    return this._providerService.currentServices$().filter(service => ids.includes(service.id)).map(service => { return { name: service.name, price: service.price } });
  });
  protected total$ = computed(() => this.services$().reduce((acc, service) => acc + service.price, 0));
}
