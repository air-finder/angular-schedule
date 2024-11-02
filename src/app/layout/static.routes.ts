import { PageNotFoundComponent } from "../pages/page-not-found/page-not-found.component";
import { ContactComponent } from "../pages/contact/contact.component";
import { Routes } from "@angular/router";
import { AboutComponent } from "../pages/about/about.component";
import { TermsComponent } from "../pages/terms/terms.component";
import { PrivacyComponent } from "../pages/privacy/privacy.component";

export const routes: Routes = [
  { path: 'page-not-found', title: 'Page Not Found', component: PageNotFoundComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'terms', title: 'Terms', component: TermsComponent },
  { path: 'privacy', title: 'Privacy', component: PrivacyComponent },
  { path: '**', redirectTo: 'page-not-found' }
]