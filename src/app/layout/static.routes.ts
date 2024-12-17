import { PageNotFoundComponent } from "../pages/static/page-not-found/page-not-found.component";
import { ContactComponent } from "../pages/static/contact/contact.component";
import { Routes } from "@angular/router";
import { AboutComponent } from "../pages/static/about/about.component";
import { TermsComponent } from "../pages/static/terms/terms.component";
import { PrivacyComponent } from "../pages/static/privacy/privacy.component";

export const routes: Routes = [
  { 
    path: 'page-not-found',
    title: 'title.page-not-found',
    data: { showContentHeader: false },
    component: PageNotFoundComponent
  },
  { path: 'contact', title: 'title.contact', component: ContactComponent },
  { path: 'about', title: 'title.about', component: AboutComponent },
  { path: 'terms', title: 'title.terms', component: TermsComponent },
  { path: 'privacy', title: 'title.privacy', component: PrivacyComponent },
  { path: '**', redirectTo: 'page-not-found' }
]