import { Component, OnInit, Input } from '@angular/core';

import { Banner } from './banner.service';
import { Observable } from 'rxjs/Rx';

@Component({

  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent implements OnInit {
  slideIndex: number = 1;
  items: Array<Banner> = [];
  constructor() {

    const url = 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/opengraph_color_1200dp.png';
    const url2 = 'https://t-ec.bstatic.com/images/hotel/max1024x768/183/18386324.jpg';
    const url3 = 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/opengraph_color_1200dp.png';

    this.items = [
      new Banner(url),
      new Banner(url2),
      new Banner(url3)];
  }

  ngOnInit() {
    this.showSlides(1);
   /* Observable.interval(5000)
      .takeWhile(() => true)
      .subscribe(i => {
        this.showSlides(this.slideIndex++);
      });*/
  }

  showSlides(n) {
    if (n >= this.items.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = this.items.length; }
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].visible = false;
    }
    this.items[this.slideIndex - 1].visible = true;
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  getBanners() {

  }
}



