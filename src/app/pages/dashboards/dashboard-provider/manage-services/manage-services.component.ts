import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ManageServicesCreateComponent } from "./manage-services-create/manage-services-create.component";
import { ManageServicesListComponent } from "./manage-services-list/manage-services-list.component";

@Component({
  selector: 'app-manage-services',
  standalone: true,
  imports: [
    TranslateModule,
    ManageServicesCreateComponent,
    ManageServicesListComponent
],
  templateUrl: './manage-services.component.html',
  styleUrl: './manage-services.component.scss'
})
export class ManageServicesComponent {
}
