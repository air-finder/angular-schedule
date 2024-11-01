import { Component, ElementRef, NgZone } from '@angular/core';
import { AnchorBase, ButtonBase } from './button-base';

@Component({
  selector: 'button[custom-button], button[custom-link]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent extends ButtonBase {
  constructor(
    elementRef: ElementRef,
    ngZone: NgZone
  ) {
    super(elementRef, ngZone);
  }
}

@Component({
  selector: 'a[custom-button], a[custom-link]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class AnchorComponent extends AnchorBase {
  constructor(
    elementRef: ElementRef,
    ngZone: NgZone
  ) {
    super(elementRef, ngZone);
  }
}
