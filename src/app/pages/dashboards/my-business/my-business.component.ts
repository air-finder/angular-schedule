import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent, CardComponent, IconButtonComponent, IconComponent } from '@brunovbsilva/material';
import { SessionUserService } from '@core/service/session-user.service';
import { ServiceProviderType } from '@models/services/enums/service-provider-type';
import { TranslateModule } from '@ngx-translate/core';
import { Scopes } from '../../../shared/constants/scopes.constants';

@Component({
    selector: 'app-my-business',
    imports: [
        ButtonComponent,
        IconButtonComponent,
        CardComponent,
        IconComponent,
        TranslateModule,
        RouterLink
    ],
    templateUrl: './my-business.component.html',
    styleUrl: './my-business.component.scss'
})
export class MyBusinessComponent {

  constructor(private _sessionUser: SessionUserService) {}

  protected provider$ = computed(() => this._sessionUser.sessionUser$().profile.serviceProvider);
  protected providerType = ServiceProviderType;
  protected scopes = Scopes;
  
  getTheme(theme: ServiceProviderType|undefined) {
    switch (theme) {
      case this.providerType.Basic:
        return 'warning';
      case this.providerType.Pro:
        return 'primary';
      case this.providerType.Ultra:
        return 'secondary';
      default:
        return undefined;
    }
  }
}
