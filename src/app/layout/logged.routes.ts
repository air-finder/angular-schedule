import { Routes } from "@angular/router";
import { CreateProviderComponent } from "@pages/dashboards/create-provider/create-provider.component";
import { MyBusinessComponent } from "@pages/dashboards/my-business/my-business.component";
import { ManageServicesComponent } from "@pages/dashboards/my-business/manage-services/manage-services.component";
import { ManageWorkersComponent } from "@pages/dashboards/my-business/manage-workers/manage-workers.component";
import { MyBusinessAnaliticsComponent } from "@pages/dashboards/my-business/my-business-analitics/my-business-analitics.component";
import { DashboardUserComponent } from "@pages/dashboards/dashboard-user/dashboard-user.component";
import { MyPanelComponent } from "@pages/dashboards/my-panel/my-panel.component";
import { DashboardsComponent } from "@pages/dashboards/dashboards.component";
import { PlansComponent } from "@pages/plans/plans.component";
import { SessionUserService } from "@core/service/session-user.service";
import { inject } from "@angular/core";
import { Scopes } from "../shared/constants/scopes.constants";

export const routes: Routes = [
  { 
    path: '',
    title: "title.dashboard", 
    data: { showBackButton: false }, 
    component: DashboardsComponent 
  },
  {
    path: 'refresh',
    title: "title.dashboard",
    data: { 
      showBackButton: false,
      refresh: true
    },
    component: DashboardsComponent
  },
  { 
    path: 'provider', 
    title: 'title.provider', 
    component: MyBusinessComponent 
  },
  { 
    path: 'provider/services', 
    title: 'title.provider-services', 
    component: ManageServicesComponent 
  },
  { 
    path: 'provider/workers', 
    title: 'title.provider-workers', 
    component: ManageWorkersComponent 
  },
  { 
    path: 'provider/analitics', 
    title: 'title.my-business-analitics', 
    component: MyBusinessAnaliticsComponent 
  },
  { 
    path: 'worker', 
    title: 'title.worker', 
    component: MyPanelComponent 
  },
  { 
    path: 'user', 
    title: 'title.user', 
    component: DashboardUserComponent 
  },
  { 
    path: 'create-provider',
    data: {
      showContentHeader: false
    },
    title: "title.create-provider", 
    component: CreateProviderComponent 
  },
  {
    path: 'plans',
    canMatch: [() => inject(SessionUserService).hasScope(Scopes.NONE)],
    title: 'title.plans',
    component: PlansComponent
  },
  { path: 'login', redirectTo: '', pathMatch: 'full' }
]