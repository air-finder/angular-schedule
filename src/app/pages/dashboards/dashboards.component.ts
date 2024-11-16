import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { ServiceWorkerService } from '@services/service-worker/service-worker.service';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent {
  constructor(
    private _providerService: ServiceProviderService,
    private _workerService: ServiceWorkerService,
    private _userService: UserService
  ) { }
}
