import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { CardComponent, IconButtonComponent, IconComponent } from '@brunovbsilva/material';
import { SessionUserService } from '@core/service/session-user.service';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { EmptyMessageComponent } from "../../../../../shared/components/empty-message/empty-message.component";

@Component({
    selector: 'app-manage-services-list',
    imports: [
    IconButtonComponent,
    IconComponent,
    CurrencyPipe,
    CardComponent,
    TranslateModule,
    EmptyMessageComponent
],
    templateUrl: './manage-services-list.component.html',
    styleUrl: './manage-services-list.component.scss'
})
export class ManageServicesListComponent implements AfterViewInit {

  protected isLoading = true;

  constructor(
    private _providerService: ServiceProviderService,
    private _sessionUser: SessionUserService
  ) {}

  protected services$ = this._providerService.currentServices$;

  ngAfterViewInit(): void {
    this.refreshServices();
  }

  public refreshServices() {
    this._providerService
      .getServices(this._sessionUser.sessionUser$().profile.serviceProvider!.id)
      .finally(() => this.isLoading = false);
  }

  public delete(id: string) {
    this._providerService.deleteService(id)
      .then(() => this.refreshServices());
  }
}
