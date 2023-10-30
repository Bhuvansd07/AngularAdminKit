import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserserviceService } from '../sharedModule/service/userservice.service'
import { Users } from '../sharedModule/interface/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm: FormGroup | undefined;
  user: Array<Users> = [];
  constructor(private fb: FormBuilder, private userService: UserserviceService,private route : Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.email]]
    })
  }

    get firstName(){
      return this.userForm?.get('firstName');
    }

    get lastName(){
      return this.userForm?.get('lastName');
    }

    get contact(){
      return this.userForm?.get('contact');
    }

    get age(){
      return this.userForm?.get('age');
    }

    get gender(){
      return this.userForm?.get('gender');
    }

    get email(){
      return this.userForm?.get('email')
    }

  addUser() {
    if (this.userForm?.valid) {
      // console.log(this.userForm.value)
      this.userService.addNewUser(this.userForm.value);
      this.route.navigate(['users']);
    }
    else{
      alert("Form Not Valid")
    }
  }

  showMessage(){
    if(this.userForm?.valid)
    {
      alert("User Details Saved")
    }
  }
}
