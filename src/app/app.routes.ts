import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

export const routes: Routes = [
  { 
    path: '',
    data: {
      showBackButton: true,
      showContentHeader: true
    },
    component: LayoutComponent,
    loadChildren: () => import('./layout/layout.routes').then(m => m.routes)
  }
];