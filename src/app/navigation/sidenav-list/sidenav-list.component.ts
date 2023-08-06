import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  public onSidenavClose = (sectionName: string) => {
    this.sidenavClose.emit();

    this.globalService.navClickToScroll(sectionName);
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