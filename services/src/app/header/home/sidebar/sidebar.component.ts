import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // providers:[SubscribeService]       // WHAT TO PROVIDE
})
export class SidebarComponent {

  constructor(private subservice : SubscribeService){     // HOW TO PROVIDE

  }
  onSubscribe(){
    // let subservice = new SubscribeService();
    this.subservice.onSubscribeClicked();
  }
}