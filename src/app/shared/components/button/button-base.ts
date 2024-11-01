import { AfterViewInit, Directive, ElementRef, NgZone, OnDestroy, OnInit, booleanAttribute, effect, input } from "@angular/core";

type Theme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'

const HOST_SELECTOR_CLASS: {attribute: string; classes: string[]}[] = [
  { attribute: 'custom-button', classes: ['button'] },
  { attribute: 'custom-icon', classes: ['icon-button'] },
  { attribute: 'custom-link', classes: ['link'] },
]

@Directive()
export class ButtonBase implements AfterViewInit {
  theme = input<Theme>('primary');
  disabled = input(false, {transform: booleanAttribute});

  constructor(
    public _elementRef: ElementRef,
    public _ngZone: NgZone
  ) {
    effect(() => {
      const element = this._elementRef.nativeElement;
      if(this.disabled()) element.classList.add('disabled');
      else element.classList.remove('disabled');
    })
  }

  ngAfterViewInit(): void {
    const element = this._elementRef.nativeElement;
    for (const {attribute, classes} of HOST_SELECTOR_CLASS) {
      if(element.hasAttribute(attribute)) {
        element.classList.add(...classes);
        if(this.theme()) element.classList.add(`${classes[0]}--${this.theme()}`);
      }
    }
  }
}

@Directive()
export class AnchorBase extends ButtonBase implements OnInit, OnDestroy {
  constructor(
    elementRef: ElementRef,
    ngZone: NgZone
  ) {
    super(elementRef, ngZone);
  }

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener('click', this._handleDisabledEvents);
    });
  }
  
  ngOnDestroy(): void {
    this._elementRef.nativeElement.removeEventListener('click', this._handleDisabledEvents);
  }

  _handleDisabledEvents = (event: Event): void => {
    if(this.disabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}