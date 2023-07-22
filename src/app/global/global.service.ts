import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class GlobalService { 

    public navClickToScroll(sectionName : string){
        document.getElementById(sectionName)?.scrollIntoView({ behavior: 'smooth' });
    }

}
