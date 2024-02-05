import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers:[UserService]
})
export class AdminComponent {
  constructor(private userservice:UserService){}

  name:string='';
  gender:string='male';
  subType:string='yearly';
  status:string='active';

  onCreateUserClickBtn(){
    this.userservice.createUser(this.name,this.gender,this.subType,this.status);
  }
}
