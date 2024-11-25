import { Routes } from "@angular/router";
import { CreateProviderComponent } from "@pages/dashboards/create-provider/create-provider.component";
import { DashboardProviderComponent } from "@pages/dashboards/dashboard-provider/dashboard-provider.component";
import { ManageServicesComponent } from "@pages/dashboards/dashboard-provider/manage-services/manage-services.component";
import { ManageWorkersComponent } from "@pages/dashboards/dashboard-provider/manage-workers/manage-workers.component";
import { ProviderAnaliticsComponent } from "@pages/dashboards/dashboard-provider/provider-analitics/provider-analitics.component";
import { DashboardUserComponent } from "@pages/dashboards/dashboard-user/dashboard-user.component";
import { DashboardWorkerComponent } from "@pages/dashboards/dashboard-worker/dashboard-worker.component";
import { DashboardsComponent } from "@pages/dashboards/dashboards.component";

export const routes: Routes = [
  { path: '', component: DashboardsComponent },
  { path: 'provider', component: DashboardProviderComponent },
  { path: 'provider/services', component: ManageServicesComponent },
  { path: 'provider/workers', component: ManageWorkersComponent },
  { path: 'provider/analitics', component: ProviderAnaliticsComponent },
  { path: 'worker', component: DashboardWorkerComponent },
  { path: 'user', component: DashboardUserComponent },
  { path: 'create-provider', component: CreateProviderComponent }
]