import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'client-nav',
  templateUrl: `clientnavigation.template.html`,
})
export class clientNavigationComponent  {
    private activeNumber: number;;
    constructor(private render:Renderer){
    }
  activeMenu(event) {
      console.log(this.render.);
    // if (this.activeNumber === newValue) {
    //   this.activeNumber = 0;
    // }
    // else {
    //   this.activeNumber = newValue;
    // }
  }
}
