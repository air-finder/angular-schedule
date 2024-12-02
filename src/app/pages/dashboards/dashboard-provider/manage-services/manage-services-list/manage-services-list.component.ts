import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { IconButtonComponent } from '@components/button/icon-button.component';
import { CardComponent } from '@components/card/card.component';
import { IconComponent } from '@components/icon/icon.component';
import { SessionUserService } from '@core/service/session-user.service';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';

@Component({
    selector: 'app-manage-services-list',
    imports: [
        IconButtonComponent,
        IconComponent,
        CurrencyPipe,
        CardComponent,
        TranslateModule
    ],
    templateUrl: './manage-services-list.component.html',
    styleUrl: './manage-services-list.component.scss'
})
export class ManageServicesListComponent implements AfterViewInit {

  constructor(
    private _providerService: ServiceProviderService,
    private _sessionUser: SessionUserService
  ) {}

  protected services$ = this._providerService.currentServices$;

  ngAfterViewInit(): void {
    this.refreshServices();
  }

  public refreshServices() {
    this._providerService.getServices(this._sessionUser.sessionUser$().profile.serviceProvider!.id);
  }

  public delete(id: string) {
    this._providerService.deleteService(id)
      .then(() => this.refreshServices());
  }
}
