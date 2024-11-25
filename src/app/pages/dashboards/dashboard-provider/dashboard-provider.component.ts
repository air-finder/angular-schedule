import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { SessionUserService } from '@core/service/session-user.service';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';

@Component({
  selector: 'app-dashboard-provider',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './dashboard-provider.component.html',
  styleUrl: './dashboard-provider.component.scss'
})
export class DashboardProviderComponent {

  constructor(
    private _providerService: ServiceProviderService,
    private _sessionUser: SessionUserService
  ) {}

  protected provider$ = computed(() => this._sessionUser.sessionUser$().profile.serviceProvider);
}
