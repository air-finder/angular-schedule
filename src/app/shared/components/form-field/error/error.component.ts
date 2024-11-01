import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './error.component.scss'
})
export class ErrorComponent {}
