import { DOCUMENT } from '@angular/common';
import { effect, Inject, Injectable, signal } from '@angular/core';

export const LIGHT_THEME = 'light-theme';
export const DARK_THEME = 'dark-theme';
export const DEFAULT_THEME = DARK_THEME;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _theme = signal<string>(DEFAULT_THEME);
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = this.document.defaultView?.localStorage;
    if(localStorage) {
      effect(() => {
        this.document.body.classList.remove('dark-theme', 'light-theme');
        this.document.body.classList.add(this._theme());
        localStorage.setItem('theme', this._theme());
      });
    }
  }

  setTheme(theme: string) {
    this._theme.set(theme);
  }
}
