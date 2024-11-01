import { booleanAttribute, Component, input } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'breadcrumb-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb-item.component.html',
  styleUrl: './breadcrumb-item.component.scss'
})
export class BreadcrumbItemComponent {
  breadcrumb = input.required<Breadcrumb>();
  last = input(false, { transform: booleanAttribute });
}
