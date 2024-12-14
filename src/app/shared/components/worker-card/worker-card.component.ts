import { Component, computed, input, output } from '@angular/core';
import { CardComponent, IconButtonComponent, IconComponent } from '@brunovbsilva/material';
import { ServiceWorkerDto } from '@models/services/dtos/service-worker';
import { ServiceWorkerStatus } from '@models/services/enums/service-worker-status';
import { ServiceWorkerService } from '@services/service-worker/service-worker.service';

@Component({
    selector: 'app-worker-card',
    imports: [
        IconButtonComponent,
        IconComponent,
        CardComponent
    ],
    templateUrl: './worker-card.component.html',
    styleUrl: './worker-card.component.scss'
})
export class WorkerCardComponent {
  public worker = input.required<ServiceWorkerDto>();
  public update = output();
  protected status = ServiceWorkerStatus;
  status$ = computed(() => {
    switch(this.worker().status) {
      case ServiceWorkerStatus.Active:
        return 'success';
      case ServiceWorkerStatus.Inactive:
        return 'danger';
      case ServiceWorkerStatus.Pending:
        return 'warning';
      default:
        return 'info';
    }
  });

  constructor(
    private _workerService: ServiceWorkerService
  ) {}

  protected async deleteWorker() {
    await this._workerService.delete(this.worker().id)
      .then(() => this.update.emit());
  }

  protected getTheme = computed(() => {
    switch(this.worker().status) {
      case ServiceWorkerStatus.Active:
        return 'success';
      case ServiceWorkerStatus.Inactive:
        return 'danger';
      case ServiceWorkerStatus.Pending:
        return 'warning';
    }
  })

  protected async activeWorker() {
    await this._workerService.activeWorker(this.worker().id)
      .then(() => this.update.emit());
  }
}
