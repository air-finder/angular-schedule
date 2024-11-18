import { Routes } from "@angular/router";
import { CreateProviderComponent } from "@pages/dashboards/create-provider/create-provider.component";
import { DashboardProviderComponent } from "@pages/dashboards/dashboard-provider/dashboard-provider.component";
import { DashboardUserComponent } from "@pages/dashboards/dashboard-user/dashboard-user.component";
import { DashboardWorkerComponent } from "@pages/dashboards/dashboard-worker/dashboard-worker.component";
import { DashboardsComponent } from "@pages/dashboards/dashboards.component";

export const routes: Routes = [
  { path: '', component: DashboardsComponent },
  { path: 'provider', component: DashboardProviderComponent },
  { path: 'worker', component: DashboardWorkerComponent },
  { path: 'user', component: DashboardUserComponent },
  { path: 'create-provider', component: CreateProviderComponent }
]