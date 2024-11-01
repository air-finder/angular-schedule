import {Component, HostListener, signal} from '@angular/core';
import {LayoutAsideItemComponent} from "./layout-aside-item/layout-aside-item.component";
import {ILayoutAsideItem} from "./models/layout-aside-item.interface";
import {LayoutAsideItem} from "./models/layout-aside-item";

@Component({
  selector: 'aside[layout]',
  standalone: true,
  imports: [
    LayoutAsideItemComponent
  ],
  templateUrl: './layout-aside.component.html',
  styleUrl: './layout-aside.component.scss',
  host: {
    '[class.open]': 'openAside()',
    class: 'main-layout-aside'
  }
})
export class LayoutAsideComponent {
  protected items = signal<ILayoutAsideItem[]>(
    [
      new LayoutAsideItem({iconPath: 'assets/icon-72x72.png', route: '', title: 'test'}),
      new LayoutAsideItem({iconPath: 'assets/icon-72x72.png', route: 'login', title: 'login'}),
    ]
  )
  protected openAside = signal(false);

  @HostListener('mouseenter', ['$event'])
  private openAsideByTrigger() {
    this.openAside.set(true);
  }

  @HostListener('mouseleave', ['$event'])
  private closeAsideByTrigger() {
    this.openAside.set(false);
  }
}
