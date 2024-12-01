import { Component, computed, input, output } from '@angular/core';
import { IconButtonComponent } from '@components/button/icon-button.component';
import { IconComponent } from '@components/icon/icon.component';
import { ServiceWorkerDto } from '@models/services/dtos/service-worker';
import { ServiceWorkerStatus } from '@models/services/enums/service-worker-status';
import { ServiceWorkerService } from '@services/service-worker/service-worker.service';

@Component({
  selector: 'app-worker-card',
  standalone: true,
  imports: [
    IconButtonComponent,
    IconComponent
],
  templateUrl: './worker-card.component.html',
  styleUrl: './worker-card.component.scss',
  host: {
    class: 'card'
  }
})
export class WorkerCardComponent {
  public worker = input.required<ServiceWorkerDto>();
  public onDelete = output();
  protected status = ServiceWorkerStatus;
  status$ = computed(() => {
    switch(this.worker().status) {
      case this.status.Active:
        return 'success';
      case this.status.Inactive:
        return 'danger';
      case this.status.Pending:
        return 'warning';
      default:
        return 'info';
    }
  });

  constructor(private _workerService: ServiceWorkerService) {}

  protected async deleteWorker() {
    await this._workerService.delete(this.worker().id)
      .then(() => this.onDelete.emit());
  }
}
