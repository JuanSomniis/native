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
    //this.hero = new Hero('Pablo1', 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/opengraph_color_1200dp.png' ,'active');
    //https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/2000px-Facebook_New_Logo_%282015%29.svg.png
    /* for (let a = 0; a < 5; a++) {
       this.heroes.push(new Hero('Pabli' + a));
     }
     
     
     {
    img: 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/opengraph_color_1200dp.png',
    text: 'uno',
    visible: true
  }, {
    img: 'http://www.gureakzerbitzuak.com/images/gureak/jardineria/vivero.jpg',
    text: 'dos',
    visible: false
  }

     */
    let url = 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/opengraph_color_1200dp.png';
    this.items = [new Banner(url), new Banner(url)]
  }

  ngOnInit() {
    this.showSlides(1);
    Observable.interval(5000)
      .takeWhile(() => true)
      .subscribe(i => {
        
        this.showSlides(this.slideIndex++);
      })
                
  }

  showSlides(n) {
    if (n >= this.items.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.items.length }
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



