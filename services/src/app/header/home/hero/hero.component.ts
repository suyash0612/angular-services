import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  providers:[SubscribeService]
})
export class HeroComponent {
  constructor(private subservice : SubscribeService){     // HOW TO PROVIDE

  }
  onSubscribe(){
    // let subservice = new SubscribeService();
    this.subservice.onSubscribeClicked();
  }
}