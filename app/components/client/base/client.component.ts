import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { smoothlyMenu } from '../../../app.helpers';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'client',
  templateUrl: `client.template.html`,
})
export class clientComponent  {
      toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
}
