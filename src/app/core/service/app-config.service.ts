import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AppConfig } from './models/app-config.interface';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private _configs = signal<AppConfig>({});
  configs$ = this._configs.asReadonly();

  constructor(private http: HttpClient) {}

  public loadAppConfig() {
    const url_api = "./assets/config.json";
    this.http
      .get<AppConfig>(url_api)
      .subscribe(data =>  this._configs.set(data));
  }
}
