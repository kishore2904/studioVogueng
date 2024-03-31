import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: 'app-home', pathMatch: "full"},
    { path: 'home', component: HomeComponent },
];
