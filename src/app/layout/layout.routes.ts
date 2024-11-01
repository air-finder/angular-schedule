import { Routes } from "@angular/router";
import { LoginComponent } from "../pages/login/login.component";

export const routes: Routes = [
  {
    path: 'login2',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'login3',
    title: 'Login',
    component: LoginComponent,
    children: [
      { path: 'login4', title: 'Login', component: LoginComponent }
    ]
  },
];
