import { AfterViewInit, Component } from '@angular/core';
import { WorkerCardComponent } from '@components/worker-card/worker-card.component';
import { SessionUserService } from '@core/service/session-user.service';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';

@Component({
    selector: 'app-manage-workers-list',
    imports: [
        TranslateModule,
        WorkerCardComponent
    ],
    templateUrl: './manage-workers-list.component.html',
    styleUrl: './manage-workers-list.component.scss'
})
export class ManageWorkersListComponent implements AfterViewInit {

  constructor(
    private _providerService: ServiceProviderService
  ) {}

  public workers$ = this._providerService.workers$;

  ngAfterViewInit(): void {
    this.refreshList();
  }

  public refreshList() {
    this._providerService.getAllWorkers();
  }
}
