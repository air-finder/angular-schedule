import {Component, signal} from '@angular/core';
import {LayoutAsideComponent} from "./layout-aside/layout-aside.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import { ToastService } from '../shared/components/toast/service/toast.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    LayoutAsideComponent,
    BreadcrumbComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  host: {
    class: 'main-layout'
  }
})
export class LayoutComponent {
  title = signal<string>('title');
}
