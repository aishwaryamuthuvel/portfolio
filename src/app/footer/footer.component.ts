import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerWidth = '100%';

  constructor(private globalService: GlobalService) { }
  
  navClickToScroll = (sectionName: string) => {
    this.globalService.navClickToScroll(sectionName);
  }

  footLinkedInLink = "https://www.linkedin.com/in/aishwarya-mala";
  footGitHubLink = "https://github.com/aishwaryamuthuvel";
  footEmailAddress = "aishwaryamuthuvel@gmail.com";
  footEmailLink = "mailTo:" + this.footEmailAddress;
  footPhoneNumber = "+1 902 989 7106";
  footPhoneLink = "tel:"+this.footPhoneNumber;
}
