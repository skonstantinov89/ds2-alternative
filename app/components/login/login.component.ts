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
      this.authService.authenticate(this.username, this.password).subscribe((result) =>{
          // console.log('Authentication: '+ result.token);
          if (result){
            this.checkGroup(result);
              this.router.navigate(['login'])
          }
      });
    }
    checkGroup(token:string){
      this.authService.checkGroup(token).subscribe((result) =>{
        console.log('Group found: '+ result);
      });
    }
 }
