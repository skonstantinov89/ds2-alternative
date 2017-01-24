import { Component } from '@angular/core';
import {authService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'login',
  templateUrl: `login.component.html`,
})
export class LoginComponent  {
  username: string;
  password: string;
    constructor(private authService: authService, private router: Router){

    }
    login(event: any){
      event.preventDefault();
      this.authService.authenticate(this.username, this.password).subscribe(
      (result => result.json()), 
      (error) => {
        return {'authentication': 'fail'}      
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
