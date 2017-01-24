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
  message: number;
    constructor(private authService: authService, private router: Router){
      Observable.interval(5000)
        .map((x) =>x+1)
        .subscribe((x) =>{
            this.message = x;
            });

    }
    login(event: any){
      event.preventDefault();
      this.authService.authenticate(this.username, this.password).subscribe((result, err) =>{
          console.log('Login: '+ result.status);

          console.log(err)
          if (result){
            this.checkGroup(result);
            this.router.navigate(['login'])
          }
      });
    }
    checkGroup(token:string){
      this.authService.checkGroup(token).subscribe((result) =>{
        console.log('checkGroup: '+result);
        if (result.groups == 3){
          this.router.navigate(['clients']);
        }
        else if (result.groups == 2){
          this.router.navigate(['operator']);
        }
        else if (result.groups == 1){
          this.router.navigate(['administrator'])
        }
      });
    }
 }
