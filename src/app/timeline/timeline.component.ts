import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  timelineList = [
    {
      "role": "Machine Learning Engineer", "organization": "Tata Consultancy Services (TCS)",
      "period": "02/2022 - 01/2023", "location": "Bengaluru, India", "id": "timeline-tcs2",
      "accentColor":"#41516C"
    },

    {
      "role": "Deep Learning Intern", "organization": "Thirona",
      "period": "08/2021 - 11/2021", "location": "Nijmegen, Netherlands", "id": "timeline-thi",
      "accentColor":"#FBCA3E"
    },

    {
      "role": "Teaching Assistant", "organization": "University of Twente",
      "period": "09/2020 - 11/2020", "location": "Enschede, Netherlands", "id": "timeline-ut",
      "accentColor":"#E24A68"
    },

    {
      "role": "Master of Science in Computer Vision and Biometrics", "organization": "University of Twente",
      "period": "09/2019 - 11/2021", "location": "Enschede, Netherlands", "id": "timeline-pg",
      "accentColor":"#1B5F8C"
    },

    {
      "role": "Machine Learning Engineer", "organization": "Tata Consultancy Services (TCS)",
      "period": "06/2017 - 07/2019", "location": "Bengaluru, India", "id": "timeline-tcs1",
      "accentColor":"#4CADAD"
    },

    {
      "role": "Bachelor of Technology in Electronics and Communication", "organization": "Amrita School of Engineering",
      "period": "08/2013 - 05/2017", "location": "Coimbatore, India", "id": "timeline-ug",
      "accentColor":"#FFA500"
    },

  ]


  @Output() public sidenavToggle = new EventEmitter();
  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.checkMobView();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.checkMobView();
  }

  isMobileView: boolean = false;

  checkMobView() {

    if (this.getScreenWidth >= 960)
      this.isMobileView = false;
    else
      this.isMobileView = true;
  }

  completed = true;

}
