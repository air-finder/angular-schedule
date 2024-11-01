import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import { inject } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { OutsideLayoutComponent } from './outside-layout/outside-layout.component';

export const routes: Routes = [
  { 
    path: '',
    canMatch: [() => inject(AuthService).isAuthenticated()],
    data: { animation: 'layoutPage'},
    component: LayoutComponent,
    loadChildren: () => import('./layout/layout.routes').then(m => m.routes)
  },
  {
    path: '',
    component: OutsideLayoutComponent,
    data: { animation: 'loginPage'},
    loadChildren: () => import('./outside-layout/outside-layout.routes').then(m => m.routes)
  },
  { path: '**', redirectTo: 'login' }
];
