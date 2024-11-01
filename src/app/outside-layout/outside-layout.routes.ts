import { Routes } from "@angular/router";
import { LoginComponent } from "../pages/login/login.component";
import { RegisterComponent } from "../pages/register/register.component";
import { ForgotPasswordComponent } from "../pages/forgot-password/forgot-password.component";

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
    data: { goBack: true }
  },
  { 
    path: 'forgot-password',
    title: 'Forgot password',
    component: ForgotPasswordComponent,
    data: { goBack: true }
  },
  { path: '**', redirectTo: 'login' }
];
