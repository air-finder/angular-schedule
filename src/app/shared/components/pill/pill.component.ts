import { Component, effect, ElementRef, input } from '@angular/core';

type Theme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'

@Component({
  selector: 'app-pill',
  standalone: true,
  imports: [],
  template: `
    <span class="pill-span"><ng-content></ng-content></span>    
  `,
  styleUrl: './pill.component.scss',
  host: {
    class: 'pill'
  }
})
export class PillComponent {
  theme = input<Theme>('primary');
  private lastTheme: Theme | null = null;

  constructor(public _elementRef: ElementRef) {
    effect(() => {
      const element = this._elementRef.nativeElement;
      if(this.lastTheme) element.classList.remove(`pill--${this.lastTheme}`);
      if(this.theme()) element.classList.add(`pill--${this.theme()}`);
      this.lastTheme = this.theme();
    })
  }

}
