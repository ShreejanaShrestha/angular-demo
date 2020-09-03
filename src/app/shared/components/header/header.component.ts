import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user;
  profileName;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    // debugger;

    console.log(this.user);
    if(this.user){
      this.profileName = this.user[0].username;
    }
  }
  logout(){
    console.log(this.authService.currentUserValue);
    localStorage.removeItem(this.user[0].token);
    localStorage.clear();
    this.router.navigateByUrl('/login');

  }

}
