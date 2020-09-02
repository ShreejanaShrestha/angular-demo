import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addBtn:boolean = true;
  addUserForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    email: ['',Validators.required],
    title: ['',Validators.required],
    country: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    street: ['',Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.addUserForm.value)
    const newUser = {
      firstName: this.addUserForm.get('firstName').value,
      lastName: this.addUserForm.get('lastName').value,
      email: this.addUserForm.get('email').value,
      title: this.addUserForm.get('title').value,
      country: this.addUserForm.get('country').value,
      city: this.addUserForm.get('city').value,
      state: this.addUserForm.get('state').value,
      street: this.addUserForm.get('street').value

    };
    console.log(newUser)
  }
  
}
