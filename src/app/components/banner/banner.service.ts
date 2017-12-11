import { Injectable } from "@angular/core";

@Injectable()
export class Banner {
  constructor(
    public img: string,
    public text: string = '',
    public visible: boolean = false) {

  }
}
