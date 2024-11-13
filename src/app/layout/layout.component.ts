import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnchorComponent, ButtonComponent } from '../shared/components/button/button.component';
import { AuthService } from '../core/service/auth.service';
import { SessionUserService } from '../core/service/session-user.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    AnchorComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  host: {
    class: 'main-layout'
  }
})
export class LayoutComponent {
  currentYear = new Date().getFullYear();
  logout() {
    this._authService.logout();
  }
  isAuthenticated$ = this._authService.isAuthenticated;
  sessionUser$ = this._sessionUserService.sessionUser$;
  constructor(
    private _sessionUserService: SessionUserService,
    private _authService: AuthService
  ) {}
}