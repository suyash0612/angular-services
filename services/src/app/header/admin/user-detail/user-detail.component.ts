import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.services';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  selectedUser!: User;
  userService = inject(USER_TOKEN);
  ngOnInit(){
    this.userService.onUserDetailsClicked.subscribe((data: User)=>{
      this.selectedUser = data;
      // console.log(this.selectedUser);
    });
  }
}
