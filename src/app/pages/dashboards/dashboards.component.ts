import { afterNextRender, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SessionUserService } from '@core/service/session-user.service';
import { TranslateModule } from '@ngx-translate/core';
import { Scopes } from '../../shared/constants/scopes.constants';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '@brunovbsilva/material';
import { UserService } from '@services/user/user.service';
import { AuthService } from '@core/service/auth.service';
import { isPlatformBrowser } from '@angular/common';

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
export class DashboardsComponent implements OnInit {
  protected Scopes = Scopes;

  constructor(
    private _sessionUser: SessionUserService,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const refresh = this._activatedRoute.snapshot.data['refresh'];
    if (refresh) {
      this._userService.refreshToken();
      this._router.navigate(['']);
    }
  }

  hasScope(scope: string): boolean {
    return this._sessionUser.hasScope(scope);
  }
}
