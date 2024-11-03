import { Component, inject, input } from '@angular/core';
import { ControlContainer, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

type ContainerType = 'check' | 'container'

@Component({
  selector: 'form-field',
  standalone: true,
  imports: [ TranslateModule ],
  template: `
    <ng-content select='input[type=radio], input[type=checkbox]'></ng-content>
    <ng-content select="label"></ng-content>
    @if(this.control?.hasValidator(requiredValidator) && type() !== "check") {
      <span>*</span>
    }
    <ng-content select="input,custom-select,textarea"></ng-content>
    @if(control?.invalid && control?.touched) {	
      <div class="form-field-error-container">
        @for(error of errors; track $index) {
          <p class="form-field-error caption">{{ 'form-field.errors.' + error | translate }}</p>
        }
      </div>
    }
  `,
  styleUrl: './form-field.component.scss',
  viewProviders: [
    { provide: ControlContainer, useFactory: () => inject(ControlContainer, {skipSelf: true}) }
  ],
  host: {
    '[class.check-container]': 'type() === "check"',
  }
})
export class FormFieldComponent {
  protected requiredValidator = Validators.required;
  controlName = input.required<string>();
  type = input<ContainerType>('container');

  parentContainer = inject(ControlContainer);
  get parentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.controlName());
  }

  get errors() {
    return Object.keys(this.control?.errors || []);
  }
}
