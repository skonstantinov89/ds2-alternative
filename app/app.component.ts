import { Component } from '@angular/core';
import {authService} from './services/auth.service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [authService]

})
export class AppComponent  { }
