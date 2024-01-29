import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  onSubscribe(){
    let subservice = new SubscribeService();
    subservice.onSubscribeClicked();
  }
}