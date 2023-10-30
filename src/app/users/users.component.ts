import { Component, OnInit } from '@angular/core';
import { Users } from '../sharedModule/interface/users';
import { UserserviceService } from '../sharedModule/service/userservice.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{
  userData: Array<Users> = [];
  constructor(private userservice: UserserviceService){ }
  ngOnInit(){
    this.userData = this.userservice.UserList
  }
}
