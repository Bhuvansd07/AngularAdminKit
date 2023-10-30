import { Injectable } from '@angular/core';
import { Users } from '../interface/users';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  UserList: Array<Users> = [
    {
      userId: 1,
      firstName: 'Bhuvan',
      lastName: 'Sood',
      contact: 8692080859,
      gender: 'Male',
      age: 22,
      email: 'bhuvansood01@gmail.com'
    }
  ]
  constructor() { }

  addNewUser(newUser: Users)
  {
    newUser.userId = this.UserList.length + 1;
    this.UserList.push(newUser)
  }
}
