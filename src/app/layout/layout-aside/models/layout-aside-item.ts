import {ILayoutAsideItem} from "./layout-aside-item.interface";

export class LayoutAsideItem implements ILayoutAsideItem {
    readonly iconPath: string;
    readonly title: string;
    readonly route: string;

    constructor(item: ILayoutAsideItem) {
      this.iconPath = item.iconPath;
      this.title = item.title;
      this.route = item.route;
    }
}
