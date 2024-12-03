import { Routes } from "@angular/router";
import { LoginComponent } from "../pages/auth/login/login.component";
import { RegisterComponent } from "../pages/auth/register/register.component";
import { ForgotPasswordComponent } from "../pages/auth/forgot-password/forgot-password.component";
import { FirstAccessRegisterComponent } from "@pages/auth/first-access-register/first-access-register.component";

export const routes: Routes = [
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'forgot-password', title: 'Forgot Password', component: ForgotPasswordComponent },
  { path: 'register/:id', title: 'Register', component: FirstAccessRegisterComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];