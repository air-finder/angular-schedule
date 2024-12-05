import { Routes } from "@angular/router";
import { CreateProviderComponent } from "@pages/dashboards/create-provider/create-provider.component";
import { MyBusinessComponent } from "@pages/dashboards/my-business/my-business.component";
import { ManageServicesComponent } from "@pages/dashboards/my-business/manage-services/manage-services.component";
import { ManageWorkersComponent } from "@pages/dashboards/my-business/manage-workers/manage-workers.component";
import { MyBusinessAnaliticsComponent } from "@pages/dashboards/my-business/my-business-analitics/my-business-analitics.component";
import { DashboardUserComponent } from "@pages/dashboards/dashboard-user/dashboard-user.component";
import { MyPanelComponent } from "@pages/dashboards/my-panel/my-panel.component";
import { DashboardsComponent } from "@pages/dashboards/dashboards.component";

export const routes: Routes = [
  { 
    path: '',
    title: "title.dashboard", 
    data: { showBackButton: false }, 
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
  { path: 'login', redirectTo: '', pathMatch: 'full' }
]