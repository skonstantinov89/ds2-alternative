import { Component } from '@angular/core';
import {authService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId:module.id,
  selector: 'login',
  templateUrl: `login.component.html`,
})
export class LoginComponent  {
  username: string;
  password: string;
  error: boolean;
    constructor(private authService: authService, private router: Router){
    }
    login(event: any){
      event.preventDefault();
      this.authService.authenticate(this.username, this.password).subscribe(
        (result: any) =>{
          if (result){
            this.checkGroup(result.token);
          }
        },
        (err) =>{
            this.error = true;
            this.router.navigate(['login']);
        });
    }
    checkGroup(token:string){
      this.authService.checkGroup(token).subscribe((result) =>{
        console.log('checkGroup: '+result.groups);
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
    }
 }
