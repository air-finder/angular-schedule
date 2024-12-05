import { Routes } from "@angular/router";
import { AuthService } from "../core/service/auth.service";
import { inject } from "@angular/core";
import { ScheduleComponent } from "../pages/schedule/schedule.component";

export const routes: Routes = [
  { 
    path: '',
    canMatch: [() => inject(AuthService).isAuthenticated()],
    loadChildren: () => import('./logged.routes').then(m => m.routes)
  },
  {
    path: '',
    canMatch: [() => !inject(AuthService).isAuthenticated()],
    data: {
      showContentHeader: false
    },
    loadChildren: () => import('./user.routes').then(m => m.routes)
  },
  {
    path: 'schedule/:id',
    title: "Schedule",
    data: {
      showContentHeader: false
    },
    component: ScheduleComponent
  },
  {
    path: '',
    data: {
      showBackButton: true,
      showContentHeader: true
    },
    loadChildren: () => import('./static.routes').then(m => m.routes)
  }
];