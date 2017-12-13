import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Banner } from './banner.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  slideIndex: number = 1;
  banners: Array<Banner> = [];
  constructor() {
    this.banners = new Banner().getBanners();
  }
  ngOnInit() {

    this.showSlides(0);
    /*Observable.interval(5000)
      .takeWhile(() => true)
      .subscribe(i => {
        this.showSlides(this.slideIndex+1);
        console.log('?')
      });*/
  }
  showSlides(sliderPosition: number) {
    sliderPosition =
      (sliderPosition >= this.banners.length) ? 0 :
        (sliderPosition < 0) ? this.banners.length - 1 : sliderPosition;

    this.banners[this.slideIndex].visible = false;
    this.banners[sliderPosition].visible = true;
    this.slideIndex = sliderPosition;
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex + n);
  }
}



