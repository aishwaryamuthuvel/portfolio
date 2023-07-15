import { Component, OnInit, Output, EventEmitter, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  public getScreenWidth: any;
  public getScreenHeight: any;

  headerWidth : any;

  constructor() { }

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.adjustToolbarWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.adjustToolbarWidth();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  adjustToolbarWidth() {

    if(this.getScreenWidth > 1249){
      this.headerWidth = '78.5%';
    }
    else if(this.getScreenWidth > 1099){
      this.headerWidth = '78.25%';
    }
    else if(this.getScreenWidth > 960){
      this.headerWidth = '78%';
    }
    else if(this.getScreenWidth > 440){
      let maxWidth:number = 959;
      let maxPercent:number = 98;

      for(let i=1; i<7;i++){
        if( this.getScreenWidth <= maxWidth ){
          this.headerWidth = maxPercent+'%';
          maxWidth = maxWidth - 100;
          maxPercent = maxPercent - 0.5;
        }
      }
    }
    else{
      let maxWidth:number = 439;
      let maxPercent:number = 95;

      for(let i=1; i<10;i++){
        if( this.getScreenWidth <= maxWidth ){
          this.headerWidth = maxPercent+'%';
          maxWidth = maxWidth - 50;
          maxPercent = maxPercent - 0.5;
        }
      }
    }
  }

}
