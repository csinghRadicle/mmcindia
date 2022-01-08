import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public opened: boolean = true;
  public bgPopup:boolean = false;
  public events: string[] = [];
  public showFiller = false;
  public mobileMenu = true;
  public user = "chandan singh";
  public title = 'mmcindia';


  constructor(){
    if (window.innerWidth < 1024) {
      this.bgPopup = true;
      this.opened = false;
    } else {
      this.opened = true;
      this.bgPopup = false;
    }
  }
}
