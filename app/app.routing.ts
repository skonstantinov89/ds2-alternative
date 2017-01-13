import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {clientComponent} from './components/client/base/client.component';
const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'clients',
        component: clientComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);