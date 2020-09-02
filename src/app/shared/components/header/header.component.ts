import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
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
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue;
    console.log(this.user);
    if(this.user){
      this.profileName = this.user[0].username;
    }
  }
  logout(){
    console.log(this.authenticationService.currentUserValue);
    localStorage.removeItem(this.user[0].token);
    localStorage.clear();
    this.router.navigateByUrl('/login');

  }

}
