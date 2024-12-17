import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-message',
  imports: [],
  templateUrl: './empty-message.component.html',
  styleUrl: './empty-message.component.scss',
  host: {
    class: 'body-2'
  }
})
export class EmptyMessageComponent {

}
