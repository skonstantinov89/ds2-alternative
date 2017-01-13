import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import {FormsModule} from "@angular/forms"

// base Components
import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {NavHomeComponent} from './components/home/nav-home/nav-home.component';
import {SliderComponent} from './components/home/slider/slider.component';
// Clients Components 
import {clientComponent} from './components/client/base/client.component';

// Services
import {authService} from './services/auth.service';

// Some global routing
import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ 
                  AppComponent, 
                  HomeComponent,
                  LoginComponent,
                  NavHomeComponent,
                  SliderComponent,
                  clientComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [
                  authService
                ]
})
export class AppModule { }
