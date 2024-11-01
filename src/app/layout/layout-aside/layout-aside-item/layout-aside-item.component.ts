import {Component, input, model} from '@angular/core';
import {ILayoutAsideItem} from "../models/layout-aside-item.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'li[layout-item]',
  standalone: true,
  imports: [],
  templateUrl: './layout-aside-item.component.html',
  styleUrl: './layout-aside-item.component.scss'
})
export class LayoutAsideItemComponent {
  item = input.required<ILayoutAsideItem>();
  openAside = model.required<boolean>();

  constructor(private _router: Router) {}

  goToPage(route: string) {
    this._router.navigate([route]);
  }
}
