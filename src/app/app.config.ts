import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ActivatedRoute, provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpInterceptors } from './core/security/interceptor';
import { AppTitle } from './app.title';

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptors(HttpInterceptors)
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
      })
    ),
    { provide: TitleStrategy, useClass: AppTitle }
  ]
};
