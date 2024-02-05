import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // providers:[UserService],
})
export class UserListComponent {
  constructor(private userservice:UserService){}   // angular will inject an instance of the service class itself

  userList = this.userservice.getAllUsers(); 
}
