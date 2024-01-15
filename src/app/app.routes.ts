import { Routes } from '@angular/router';
import { LoginComponent } from './webpage/login/login.component';
import { HomeComponent } from './webpage/home/home.component';
import { AboutComponent } from './webpage/about/about.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {
        path:'home',component:HomeComponent
    },
    {
        path: '',
        component:HomeComponent,
        children:[
            {
                path:'about',
                component:AboutComponent
            },
            {
                path:'home',
                component:HomeComponent
            },
            {
                path: 'login',
                component:LoginComponent
            },
            {
                path: '**',
                redirectTo: '/home'
            }

        ]
    }

];
