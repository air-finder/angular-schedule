import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardWorkerListComponent } from "./dashboard-worker-list/dashboard-worker-list.component";
import { DashboardWorkerFilterComponent } from "./dashboard-worker-filter/dashboard-worker-filter.component";

@Component({
  selector: 'app-dashboard-worker',
  imports: [
    TranslateModule,
    DashboardWorkerListComponent,
    DashboardWorkerFilterComponent
],
  templateUrl: './dashboard-worker.component.html',
  styleUrl: './dashboard-worker.component.scss'
})
export class DashboardWorkerComponent {}
