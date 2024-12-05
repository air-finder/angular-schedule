import { ChangeDetectorRef, Component, computed, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../core/service/auth.service';
import { SessionUserService } from '../core/service/session-user.service';
import { AnchorComponent, ButtonComponent, IconButtonComponent, IconComponent } from '@brunovbsilva/material';
import { AppTitleService } from '@core/service/app-title.service';
import { Location } from '@angular/common';
import { filter } from 'rxjs';
@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    TranslateModule,
    AnchorComponent,
    ButtonComponent,
    IconButtonComponent,
    IconComponent,
    RouterLink,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  host: {
    class: 'main-layout'
  }
})
export class LayoutComponent implements OnInit {
  currentYear = new Date().getFullYear();
  isAuthenticated$ = this._authService.isAuthenticated;
  sessionUser$ = this._sessionUserService.sessionUser$;
  title$ = computed(() => this._titleService.resumedTitle());
  private _data = signal({
    showBackButton: false,
    showContentHeader: false
  });
  showBackButton$ = computed<boolean>(() =>  this._data().showBackButton);
  showContentHeader$ = computed<boolean>(() => this._data().showContentHeader);

  constructor(
    private _sessionUserService: SessionUserService,
    private _authService: AuthService,
    private _titleService: AppTitleService,
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.setData();
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.setData());
  }
  
  protected logout() {
    this._authService.logout();
  }

  protected goBack() {
    this._location.back();
  }

  private setData() {
    let currentRoute = this._activatedRoute;
    while (currentRoute.firstChild) currentRoute = currentRoute.firstChild;
    const data = currentRoute.snapshot.data;
    this._data.set({
      showBackButton: data['showBackButton'],
      showContentHeader: data['showContentHeader']
    });
  }
}