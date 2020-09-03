import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../core/interface/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User[]>;
  public currentUser: Observable<User[]>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User[]>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():User[] {
    return this.currentUserSubject.value;
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(username:string, password:string){
    const user = [{
      username: username,
      password: password,
      token: "5f4bd90da39b29444be4e09b"
    }]
    // if token (or uname and password) present=> navigate to project
    // and setting username and token in local storage
    if (user && user[0].token){
      localStorage.setItem('token', JSON.stringify(user[0].token));
      localStorage.setItem('user', JSON.stringify(user[0].username));

      this.loggedIn.next(true);
      this.currentUserSubject.next(user);
      this.router.navigate(['/']);
      }
    // return user;
  }

  logout(){
    this.loggedIn.next(false);
    const token = JSON.parse(localStorage.getItem('token'))
    localStorage.removeItem(token);
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
