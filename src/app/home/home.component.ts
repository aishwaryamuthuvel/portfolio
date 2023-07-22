import { Component } from '@angular/core';
import { GlobalService } from '../global/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private globalService : GlobalService){}

  navClickToScroll = (sectionName : string) =>{
    this.globalService.navClickToScroll(sectionName);
  }
}
