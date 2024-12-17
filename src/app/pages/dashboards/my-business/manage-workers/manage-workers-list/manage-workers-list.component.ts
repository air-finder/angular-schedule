import { AfterViewInit, Component } from '@angular/core';
import { WorkerCardComponent } from '@components/worker-card/worker-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { EmptyMessageComponent } from "../../../../../shared/components/empty-message/empty-message.component";

@Component({
    selector: 'app-manage-workers-list',
    imports: [
    TranslateModule,
    WorkerCardComponent,
    EmptyMessageComponent
],
    templateUrl: './manage-workers-list.component.html',
    styleUrl: './manage-workers-list.component.scss'
})
export class ManageWorkersListComponent implements AfterViewInit {

  protected isLoading = true;

  constructor(
    private _providerService: ServiceProviderService
  ) {}

  public workers$ = this._providerService.workers$;

  ngAfterViewInit(): void {
    this.refreshList();
  }

  public refreshList() {
    this._providerService.getAllWorkers()
      .finally(() => this.isLoading = false);
  }
}
