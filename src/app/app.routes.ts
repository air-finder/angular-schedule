import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import { inject } from '@angular/core';
import { AuthService } from './core/service/auth.service';

export const routes: Routes = [
  { 
    path: '',
    canMatch: [() => inject(AuthService).isAuthenticated()],
    component: LayoutComponent,
    loadChildren: () => import('./layout/layout.routes').then(m => m.routes)
  },
  { path: '**', redirectTo: 'login' }
];
