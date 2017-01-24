import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'operator-nav',
  templateUrl: 'operatornavigation.template.html',
})
export class operatorNavigationComponent  {
    private activeNumber: number;;
    constructor(){
    }
  activeMenu(newValue:any) {
      console.log(newValue);
    if (this.activeNumber === newValue) {
      this.activeNumber = 0;
    }
    else {
      this.activeNumber = newValue;
    }
  }
}
