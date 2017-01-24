import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {authService} from '../services/auth.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: authService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let token = localStorage.getItem('auth_token');
        if (localStorage.getItem('auth_token')) {
            // logged in so return true
            this.authService.checkGroup(token).subscribe(
                (result) =>{
                    if (result.groups == 3){
                    this.router.navigate(['operator']);
                    }
                    else if (result.groups == 2){
                    this.router.navigate(['client']);
                    }
                    else if (result.groups == 1){
                    this.router.navigate(['administrator'])
                }
      });
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}