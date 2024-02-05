import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  // providers:[SubscribeService]
})
export class HeroComponent {
  // constructor(private subservice : SubscribeService){     // HOW TO PROVIDE DEPENDENCY -- METHOD 1

  // }

  subservice : SubscribeService = inject(SubscribeService);                     // HOW TO PROVIDE DEPENDENCY -- METHOD 2 
  onSubscribe(){
    // let subservice = new SubscribeService();
    this.subservice.onSubscribeClicked();
  }
}