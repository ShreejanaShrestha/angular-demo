import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formType="Login";
  loadSpinner = false;
  validate = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrservice: ToastrService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
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
    console.log(this.authService.login(username, password))
    const user = this.authService.currentUserValue;

    console.log(this.authService.currentUserValue)
    // if token or uname and password present=> navigate to project
    if (user && user[0].token){
      localStorage.setItem('token', JSON.stringify(user[0].token));
      this.router.navigateByUrl('user');
      this.toastrservice.success('Logged in successfully!!!')
      this.loadSpinner= false;
      }
  }
}
