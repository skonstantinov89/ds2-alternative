import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

import {operatorComponent} from './components/operator/base/operator.component';
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
        path:'operator',
        component: operatorComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
