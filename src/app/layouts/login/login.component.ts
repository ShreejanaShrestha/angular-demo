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
  // @ts-ignore
  // @ts-ignore
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)] )
  });

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrservice: ToastrService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {

  }
  get f(){
    return this.loginForm.controls;
  }
  login(){
    this.validate = true;
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(username, password);
  }
}
