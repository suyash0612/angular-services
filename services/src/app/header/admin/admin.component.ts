import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.services';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers:[UserService]
})
export class AdminComponent {
  constructor(@Inject(USER_TOKEN) private userservice:UserService){}

  name:string='';
  gender:string='male';
  subType:string='yearly';
  status:string='active';

  onCreateUserClickBtn(){
    this.userservice.createUser(this.name,this.gender,this.subType,this.status);
  }
}
