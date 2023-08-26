import { Component } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private globalService: GlobalService) { }

  imgUrlList = [
    `url(assets/img/home-bg-big.jpeg)`,
    `url(assets/img/ml-bg.jpg)`,
    `url(assets/img/cv-bg.PNG)`,
    `url(assets/img/medical-img-bg.PNG)`,
    `url(assets/img/NLP-bg.jpg)`,
    `url(assets/img/ts-bg.png)`,
  ];

  imageIndex = 0;

  bgImg = this.imgUrlList[this.imageIndex];

  navClickToScroll = (sectionName: string) => {
    this.globalService.navClickToScroll(sectionName);
  }

  ngOnInit() {
    interval(5000).subscribe(() => {
      this.getBackgroundImgURL();
    })
  }

  getBackgroundImgURL() {
    if (this.imageIndex >= 5) {
      this.imageIndex = 0;
      this.bgImg = this.imgUrlList[this.imageIndex];
    }
    else {
      this.imageIndex += 1;
      this.bgImg = this.imgUrlList[this.imageIndex];
    }
    return this.bgImg;
  }

}
