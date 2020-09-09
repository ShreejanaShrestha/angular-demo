import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../_services/auth.service';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('AuthGuard#canActivate called');

      if (localStorage.getItem('token')){
         // logged in so return true
        return true;
      }
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login', { qurryParams: { returnUrl: state.url}} ]);
      return false;
    // It directly redirect to the login page on the reload of the page

    // return this.authService.isLoggedIn.pipe(
    //   take(1),
    //   map((isLoggedIn: boolean) => {
    //     if (!isLoggedIn) {
    //       this.router.navigate(['/login', { qurryParams: { returnUrl: state.url}} ]);
    //       return false;
    //     }
    //     return true;
    //   })
    // );
  }

}
