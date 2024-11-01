import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Breadcrumb } from './models/breadcrumb.interface';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [BreadcrumbItemComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs = signal<Breadcrumb[]>([]);

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._router
      .events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumbs(this._route.root))
      )
      .subscribe(breadcrumb => this.breadcrumbs.set(breadcrumb));
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') url += `/${routeURL}`;

      const label = child.snapshot.data['title'];
      if (label) breadcrumbs.push({ label, url });

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
