import { PageNotFoundComponent } from "../pages/static/page-not-found/page-not-found.component";
import { ContactComponent } from "../pages/static/contact/contact.component";
import { Routes } from "@angular/router";
import { AboutComponent } from "../pages/static/about/about.component";
import { TermsComponent } from "../pages/static/terms/terms.component";
import { PrivacyComponent } from "../pages/static/privacy/privacy.component";

export const routes: Routes = [
  { path: 'page-not-found', title: 'Page Not Found', component: PageNotFoundComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'terms', title: 'Terms', component: TermsComponent },
  { path: 'privacy', title: 'Privacy', component: PrivacyComponent },
  { path: '**', redirectTo: 'page-not-found' }
]