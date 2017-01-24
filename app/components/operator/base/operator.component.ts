import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { smoothlyMenu } from '../../../app.helpers';
import {authService} from '../../../services/auth.service';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'operator',
  templateUrl: `operator.template.html`,
})
export class operatorComponent  {
    constructor(private authService: authService){
      
    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
}
