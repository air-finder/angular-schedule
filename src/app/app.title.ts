import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { AppTitleService } from "./core/service/app-title.service";

@Injectable()
export class AppTitle extends TitleStrategy {

  constructor(
    private _title: Title,
    private _titleService: AppTitleService
  ) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    this._titleService.setTitle(title);
    if(title) this._title.setTitle(this._titleService.title());
  }

}