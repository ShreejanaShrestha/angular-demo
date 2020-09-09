import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user;
  profileName;
  isLoggedIn$: Observable<boolean>;
  token;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(console.log);
    this.token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      this.profileName = user;
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn$.subscribe(console.log)

  }
}
