import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private globalService : GlobalService) { }

  ngOnInit() {
  }

  public onSidenavClose = (sectionName : string) => {
    this.sidenavClose.emit();

    this.globalService.navClickToScroll(sectionName);
  }

}