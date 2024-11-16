import { Routes } from "@angular/router";
import { LoginComponent } from "../pages/auth/login/login.component";
import { RegisterComponent } from "../pages/auth/register/register.component";
import { ForgotPasswordComponent } from "../pages/auth/forgot-password/forgot-password.component";

export const routes: Routes = [
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'forgot-password', title: 'Forgot Password', component: ForgotPasswordComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },
];