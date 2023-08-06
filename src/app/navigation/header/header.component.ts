import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  public getScreenWidth: any;
  public getScreenHeight: any;

  headerWidth: any;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.adjustToolbarWidth();

    window.addEventListener('scroll', this.scrollEvent, true);
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

    if (this.getScreenWidth > 1249) {
      this.headerWidth = '78.5%';
    }
    else if (this.getScreenWidth > 1099) {
      this.headerWidth = '78.25%';
    }
    else if (this.getScreenWidth > 960) {
      this.headerWidth = '78%';
    }
    else if (this.getScreenWidth > 440) {
      let maxWidth: number = 959;
      let maxPercent: number = 98;

      for (let i = 1; i < 7; i++) {
        if (this.getScreenWidth <= maxWidth) {
          this.headerWidth = maxPercent + '%';
          maxWidth = maxWidth - 100;
          maxPercent = maxPercent - 0.5;
        }
      }
    }
    else {
      let maxWidth: number = 439;
      let maxPercent: number = 95;

      for (let i = 1; i < 10; i++) {
        if (this.getScreenWidth <= maxWidth) {
          this.headerWidth = maxPercent + '%';
          maxWidth = maxWidth - 50;
          maxPercent = maxPercent - 0.5;
        }
      }
    }
  }

  navClickToScroll = (sectionName: string) => {
    this.globalService.navClickToScroll(sectionName);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  sectionIds = ['homeId', 'aboutId', 'skillsId', 'timelineId',
    'projectsId', 'certificationsId', 'publicationId', 'experienceId'];

  currentSection = 'homeId';

  scrollEvent = (event: any): void => {
    for (let section of this.sectionIds) {
      const element = document.getElementById(section);
      const scrollTop = event.target.scrollTop;
      if (element !== null) {
        if ((element.offsetTop - 50) <= (scrollTop)) {
          this.currentSection = element.id;
        }
      }
    }
  }

}
