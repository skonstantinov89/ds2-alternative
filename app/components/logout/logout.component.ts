import { Component } from '@angular/core';
import {authService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId:module.id,
  selector: 'login',
  template: `<p> You've been logged out </p>`,
})
export class LogoutComponent  {
  username: string;
  password: string;
  error: boolean;
    constructor(private authService: authService, private router: Router){
        event.preventDefault();
        this.authService.logout().subscribe(
            (result: any) =>{
                this.router.navigate(['']);
                },
            (err) =>{
                this.error = true;
                this.router.navigate(['login']);
        });
    }
 }
