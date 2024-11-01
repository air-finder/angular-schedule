import { booleanAttribute, Component, computed, contentChildren, effect, ElementRef, HostListener, inject, input, signal, viewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { SelectRef } from './models/select-ref';
import { SelectOptionComponent } from './select-option/select-option.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'custom-select',
  standalone: true,
  imports: [
    FormsModule,
    IconComponent
  ],
  template: `
    <input #input type="text" [ngModel]="display()" (focus)="openned.set(true)" (focusout)="onTouched && onTouched()" readonly
      [disabled]="isDisabled()" [placeholder]="placeholder()"/>
    <icon custom-icon [icon]="selectIcon()" class="select-icon"></icon>
    @if(!isDisabled() && openned()) {
      <div #dropdown class="select-dropdown md-shadow">
        <ng-content select="select-option"></ng-content>
      </div>
    }
  `,
  styleUrl: './select.component.scss'
})
export class SelectComponent<T> implements ControlValueAccessor {
  multiple = input(false, {transform: booleanAttribute});
  placeholder = input<string>('');

  options = contentChildren(SelectOptionComponent<T>);
  dropdown = viewChild<ElementRef<any>>('dropdown');
  input = viewChild<ElementRef<any>>('input');
  arrow = viewChild(IconComponent);
  private valueRef = computed<SelectRef<T>[]>(() => this.options().map(x => ({ value: x.value(), display: x.display(), selected: x.selected() })));
  protected value = computed<T[]>(() => this.valueRef().filter(v => v.selected).map(x => x.value));
  protected display = computed<string>(() => this.valueRef().filter(v => v.selected).map(x => x.display).join(', '));

  private ngControl = inject(NgControl, { optional: true });
  protected onTouched? = () => {};
  protected onChange? = (value?: T | T[]) => {};
  protected isDisabled = signal(false);
  protected openned = signal(false);
  protected selectIcon = computed(() => this.openned() ? 'arrow-up' : 'arrow-down');

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
    effect(() => {
      if(this.multiple()) this.onChange && this.onChange(this.value());
      if(!this.multiple()) this.onChange && this.onChange(this.value()[0]);
      else if(this.ngControl?.control?.dirty) this.onChange && this.onChange();
    });
  }

  writeValue(obj?: T | T[]): void {
    this.options().filter(x => !x.selected).forEach(x => x.selected.set(false));
    if(this.multiple() && Array.isArray(obj) && obj.length)
      this.options().filter(x => obj.includes(x.value())).forEach(x => x.selected.set(true))
    if(!this.multiple() && obj)
      this.options().find(x => x.value() === obj)?.selected.set(true);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  public closeDropdown() {
    this.openned.set(false);
  }

  @HostListener('document:click', ['$event.target'])
  protected handleClick(target: MouseEvent) {
    if(this.input()?.nativeElement.contains(target)) return;
    if(this.arrow()?.img()?.nativeElement.contains(target)) {
      this.openned.update(x => !x);
      return;
    }
    if(this.openned() && !this.dropdown()?.nativeElement.contains(target)) this.closeDropdown();
  }
}
