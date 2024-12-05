import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpInterceptors } from './core/security/interceptor';
import { AppTitle } from './app.title';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { provideEnvironmentNgxMask } from 'ngx-mask';
registerLocaleData(ptBr)

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
    provideEnvironmentNgxMask({
      thousandSeparator: '.',
      decimalMarker: ',',
      allowNegativeNumbers: false
    }),
    { provide: TitleStrategy, useClass: AppTitle },
    { provide: LOCALE_ID, useValue: 'pt-PT' },
    DatePipe,
    CurrencyPipe,
  ]
};
