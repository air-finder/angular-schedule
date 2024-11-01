import { Component, computed, contentChildren, ElementRef, signal, viewChild } from '@angular/core';
import { StepComponent } from './step/step.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'stepper',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  steps = contentChildren(StepComponent);
  content = viewChild<ElementRef<HTMLElement>>('content');
  currentIndex = signal<number>(0);
  activeStep = computed<StepComponent | null>(() => this.steps()[this.currentIndex()] ?? null);

  next() { 
    this.currentIndex.update(x => x != this.steps().length - 1 ? x + 1 : x);
  }

  previous() {
    this.currentIndex.update(x => x != 0 ? x - 1 : x);
  }

  setIndex(index: number) {
    this.currentIndex.set(index);
  }
}
