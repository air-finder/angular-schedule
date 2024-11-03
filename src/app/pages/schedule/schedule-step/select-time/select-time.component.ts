import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-select-time',
  standalone: true,
  imports: [
    DatePipe,
    ButtonComponent
  ],
  templateUrl: './select-time.component.html',
  styleUrl: './select-time.component.scss'
})
export class SelectTimeComponent {
  private _times = signal<Date[]>([
    new Date(2024, 0, 1, 8, 0),
    new Date(2024, 0, 1, 9, 0),
    new Date(2024, 0, 1, 10, 45),
    new Date(2024, 0, 1, 12, 0),
    new Date(2024, 0, 1, 13, 0),
  ])
  protected times$ = this._times.asReadonly();
}
