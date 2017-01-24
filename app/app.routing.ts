import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';

import {operatorComponent} from './components/operator/base/operator.component';
import {LoginAuthGuard} from './guards/auth.guard'

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
        path: 'logout',
        component: LogoutComponent
    },
    {
        path:'operator',
        component: operatorComponent,
        canActivate: [LoginAuthGuard]
    },
    {
        path:'client',
        component: operatorComponent,
        canActivate:[LoginAuthGuard]
    },
    {
        path:'administrator',
        component: operatorComponent,
        canActivate: [LoginAuthGuard]
    },
    {
        path:'**',
        component: HomeComponent,
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
