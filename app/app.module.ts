import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";


// Components
import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

// Services
import {UserService} from './services/auth.service';

// Some global routing
import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [ 
                  AppComponent, 
                  HomeComponent,
                  LoginComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [
                  UserService
                ]
})
export class AppModule { }
