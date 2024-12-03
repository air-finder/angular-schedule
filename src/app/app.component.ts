import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routeAnimations } from './core/animations/route.animations';
import { DEFAULT_THEME, ThemeService } from './core/service/theme.service';
import { DOCUMENT } from '@angular/common';
import { ToastComponent } from '@brunovbsilva/material';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        ToastComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [routeAnimations]
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translate.setDefaultLang('en-US');
    this.translate.use(navigator.language);
    const localStorage = this.document.defaultView?.localStorage;
    if(localStorage) {
      this.themeService.setTheme(localStorage.getItem('theme') ?? DEFAULT_THEME);
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
