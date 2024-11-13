import { Component, ElementRef, input, viewChild } from '@angular/core';
@Component({
  selector: 'icon[custom-icon]',
  standalone: true,
  imports: [],
  template: `
    <img #imageIcon src="assets/svg/{{this.icon()}}.svg" alt="icon"/>
  `,
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  icon = input.required<string>();
  img = viewChild<ElementRef<any>>('imageIcon');
}
