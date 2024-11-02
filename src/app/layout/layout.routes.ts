import { Routes } from "@angular/router";
import { AuthService } from "../core/service/auth.service";
import { inject } from "@angular/core";

export const routes: Routes = [
  { path: '', canMatch: [() => inject(AuthService).isAuthenticated()], loadChildren: () => import('./logged.routes').then(m => m.routes) },
  { path: '', canMatch: [() => !inject(AuthService).isAuthenticated()], loadChildren: () => import('./user.routes').then(m => m.routes) },
  { path: '', loadChildren: () => import('./static.routes').then(m => m.routes) }
];