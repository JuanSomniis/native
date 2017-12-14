import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Banner } from './banner.service';
import { Observable } from 'rxjs/Rx';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  banners: Array<Banner> = [];
  sliderConfig: NgxCarousel;

  constructor() {
    this.banners = new Banner().getBanners();
    this.sliderConfig = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 700,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }
  
  ngOnInit() {

    
  }

}



