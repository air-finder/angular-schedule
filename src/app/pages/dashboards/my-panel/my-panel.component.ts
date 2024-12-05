import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyPanelListComponent } from "./my-panel-list/my-panel-list.component";
import { MyPanelFilterComponent } from "./my-panel-filter/my-panel-filter.component";

@Component({
  selector: 'app-my-panel',
  imports: [
    TranslateModule,
    MyPanelListComponent,
    MyPanelFilterComponent
],
  templateUrl: './my-panel.component.html',
  styleUrl: './my-panel.component.scss'
})
export class MyPanelComponent {}
