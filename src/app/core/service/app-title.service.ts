import { computed, Injectable, signal } from '@angular/core';

const DEFAULT_TITLE = 'AirFinder';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  private _title = signal<string>(DEFAULT_TITLE);
  public title = this._title.asReadonly();
  public resumedTitle = computed(() => this.title().split(' - ')[1] ?? DEFAULT_TITLE);

  setTitle(title: string | undefined) {
    if(title) this._title.set(`${DEFAULT_TITLE} - ${title}`);
    else this._title.set(DEFAULT_TITLE);
  }
}
