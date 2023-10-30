import { Component } from '@angular/core';
import { UserserviceService } from '../sharedModule/service/userservice.service';
import { Users } from '../sharedModule/interface/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  viewIndex?: number;
  viewdata: Users = {
    firstName: '',
    lastName: '',
    contact: 0,
    gender: '',
    age: 0,
    email: ''
  };
  constructor(private activeRoute: ActivatedRoute, private userService: UserserviceService){
    // console.log(this.activeRoute.snapshot.params)
    this.viewIndex = this.activeRoute.snapshot.params['id']
    this.viewdata = this.userService.UserList[this.viewIndex!-1]

  }
}
