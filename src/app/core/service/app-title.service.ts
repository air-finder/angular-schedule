import { computed, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';

const DEFAULT_TITLE = 'CB Agenda';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  private _title = signal<string>(DEFAULT_TITLE);
  public title = this._title.asReadonly();
  public resumedTitle = computed(() => this._title().split(' - ')[1] ?? DEFAULT_TITLE);

  constructor(
    private _translate: TranslateService
  ) {}

  async setTitle(title: string | undefined) {
    
    if (title){
      const translated = await lastValueFrom(this._translate.get(title));
      this._title.set(`${DEFAULT_TITLE} - ${translated}`);
    }
    else this._title.set(DEFAULT_TITLE);
  }
}
