import { Component } from '@angular/core';
import { SessionUserService } from '@core/service/session-user.service';
import { TranslateModule } from '@ngx-translate/core';
import { Scopes } from '../../shared/constants/scopes.constants';
import { ButtonComponent } from '@components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dashboards',
    imports: [
        TranslateModule,
        ButtonComponent,
        RouterLink
    ],
    templateUrl: './dashboards.component.html',
    styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent {
  protected Scopes = Scopes;
  constructor(private _sessionUser: SessionUserService) { }

  hasScope(scope: string): boolean {
    return this._sessionUser.hasScope(scope);
  }
}
