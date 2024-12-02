import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ManageWorkersListComponent } from "./manage-workers-list/manage-workers-list.component";
import { ManageWorkersCreateComponent } from "./manage-workers-create/manage-workers-create.component";

@Component({
    selector: 'app-manage-workers',
    imports: [
        TranslateModule,
        ManageWorkersListComponent,
        ManageWorkersCreateComponent
    ],
    templateUrl: './manage-workers.component.html',
    styleUrl: './manage-workers.component.scss'
})
export class ManageWorkersComponent {

}
