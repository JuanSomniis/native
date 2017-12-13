import { Injectable } from "@angular/core";
import listBanners  from "./listBanners.const";

@Injectable()
export class Banner {
  constructor(
    public img: string ='',
    public text: string = '',
    public visible: boolean = false) {
  }

  public getBanners(): Array<Banner>{
    return listBanners.map(bannerImg => {
      return new Banner(bannerImg);
    });
  }
}
