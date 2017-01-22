import { Component } from '@angular/core';
import {authService} from '../../services/auth.service';
import {Router} from '@angular/router';
import $ from 'jquery';
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
    login(event: any, input1, input2){
      event.preventDefault();
      this.authService.authenticate(this.username, this.password).subscribe(
      (result => result.json()), 
      (error) => {
        input1.invalid();      
      });
    }
    checkGroup(token:string){
      this.authService.checkGroup(token).subscribe((result) =>{
        console.log('Group found: '+ result.body);
      });
    }
 }
