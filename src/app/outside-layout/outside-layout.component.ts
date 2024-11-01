import { AfterContentInit, Component, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IconAnchorComponent } from '../shared/components/button/icon-button.component';
import { IconComponent } from '../shared/components/icon/icon.component';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-outside-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    IconAnchorComponent,
    IconComponent
  ],
  templateUrl: './outside-layout.component.html',
  styleUrl: './outside-layout.component.scss',
  host: {
    class: 'outside-layout'
  }
})
export class OutsideLayoutComponent implements AfterContentInit, OnDestroy {
  protected showButton = signal<boolean>(this._router.url !== '/login');
  private _subscriptions: Subscription[] = [];

  constructor(private _router: Router) { }

  ngAfterContentInit(): void {
    let subscription = this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => this.showButton.set(event.url !== '/login'));
    this._subscriptions.push(subscription);
  }
  
  ngOnDestroy(): void {
    this._subscriptions
      .forEach(subscription => subscription.unsubscribe());
  }
}
