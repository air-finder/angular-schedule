import { Component, computed, effect, ElementRef, inject, input, Renderer2, ViewChild, viewChild } from '@angular/core';
import { StepperComponent } from '../stepper.component';

@Component({
  selector: 'step',
  standalone: true,
  imports: [],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
  host: {
    '[class.first-step]': 'firstStep()',
    '[class.last-step]': 'lastStep()',
    '[class.passed-step]': 'passedStep()',
    '[class.disabled]': 'disabled()',
    '[class.active]': 'active()',
    id: `step-{{stepPosition()}}`,
    ngSkipHydration: 'true'
  }
})
export class StepComponent {
  content = viewChild<ElementRef<HTMLElement>>('content');
  firstStep = computed<boolean>(() => this._stepper.steps()[0] === this);
  lastStep = computed<boolean>(() => this._stepper.steps()[this._stepper.steps().length-1] === this);
  passedStep = computed<boolean>(() => this._stepper.steps().indexOf(this) < this._stepper.currentIndex());
  stepPosition = computed(() => this._stepper.steps().indexOf(this) + 1);
  label = input.required<string>();
  disabled = input<boolean>(false);
  active = computed<boolean>(() => this._stepper.activeStep() === this);

  constructor(
    private _stepper: StepperComponent,
    private _renderer2: Renderer2
  ) {
    effect(() => {
      if(this.active()) this.setContent(this.content()?.nativeElement);
    });
  }

  setContent(element?: HTMLElement) {
    const place = this._stepper.content()?.nativeElement;

    if (!place) return;
    if (!element) return;

    if (place.firstChild) this._renderer2.removeChild(place, place.firstChild);
    
    this._renderer2.insertBefore(place, element, null);
  }
}
