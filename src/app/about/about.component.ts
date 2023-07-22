import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  linkedInLink = "https://www.linkedin.com/in/aishwarya-mala";
  gitHubLink = "https://github.com/aishwaryamuthuvel";
  emailAddress = "aishwaryamuthuvel@gmail.com";
  emailLink = "mailTo:" + this.emailAddress;
  phoneNumber = "+1 902 989 7106";
  phoneLink = "tel:"+this.phoneNumber;

}
