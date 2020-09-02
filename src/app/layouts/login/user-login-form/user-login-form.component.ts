import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {CategoriesService} from '../../../shared/services/categories.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  @Input() name;
  loadSpinner = false;
  validate = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrservice: ToastrService,
    private categoriesService: CategoriesService
    ) { }

  ngOnInit(): void {
    console.log(this.name);
    this.categoriesService.getUser().subscribe(data => {
      console.log(data);
    });
  }

  login(){
    this.validate = true;
    this.loadSpinner = true;
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    console.log(this.authenticationService.login(username, password))
    const user = this.authenticationService.login(username, password)

    console.log(this.authenticationService.currentUserValue)
    // if token or uname and password present=> navigate to project
    if (user && user[0].token){
      localStorage.setItem('token', JSON.stringify(user[0].token));
      this.router.navigateByUrl('user').then();
      this.toastrservice.success('Logged in successfully!!!')
      this.loadSpinner= false;
      }
  }
}
