import { Component, ElementRef, HostListener, inject, input, model, signal } from '@angular/core';
import { SelectComponent } from '../select.component';

@Component({
  selector: 'select-option',
  standalone: true,
  imports: [],
  template: `{{ display() }}`,
  styleUrl: './select-option.component.scss',
  host: {
    class: 'select-option',
  }
})
export class SelectOptionComponent<T> {
  value = model.required<T>();
  display = input.required<string>();
  selected = signal(false);

  private selectComponent = inject<SelectComponent<T>>(SelectComponent);

  @HostListener('click') onClick() {
    if(!this.selectComponent.multiple()) {
      this.selectComponent.options()
        .filter(x => x.selected() && x.value() != this.value())
        .forEach(x => x.selected.set(false));
      this.selectComponent.closeDropdown();
    }
    this.selected.update(x => !x);
  }

}
