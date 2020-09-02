import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userId;
  userInfo;
  updateUserForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    email: ['',Validators.required],
    title: ['',Validators.required],
    country: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    street: ['',Validators.required],
  });
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    console.log(this.userId)
    this.getEditUserInfo()
  }

getEditUserInfo(){
  this.categoriesService.getFullUser(this.userId).subscribe(data=>{
    this.userInfo = data;
    console.log(this.userInfo)
  console.log(this.userInfo.firstName,'kajhdlfkjasdh')
this.updateUserForm.patchValue({
    firstName: this.userInfo.firstName,
      lastName: this.userInfo.lastName,
      email: this.userInfo.email,
      title: this.userInfo.title,
      country: this.userInfo.location.country,
      city: this.userInfo.location.city,
      state: this.userInfo.location.state,
      street: this.userInfo.location.street,
  })
  })
  
}
  updateUser(){
    console.log(this.updateUserForm.value);
    if (confirm('Are you sure you want to update this data?')) {
      const updatedUser = {
        firstName: this.updateUserForm.get('firstName').value,
      lastName: this.updateUserForm.get('lastName').value,
      email: this.updateUserForm.get('email').value,
      title: this.updateUserForm.get('title').value,
      country: this.updateUserForm.get('country').value,
      city: this.updateUserForm.get('city').value,
      state: this.updateUserForm.get('state').value,
      street: this.updateUserForm.get('street').value
      };

      console.log(updatedUser)
    }
  }  

}
