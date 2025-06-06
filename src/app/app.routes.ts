import { Routes } from '@angular/router';
import { LayoutPageComponent } from './dash/layouts/layout-page/layout-page.component';
import { RegisterPageComponent } from './dash/pages/register-page/register-page.component';
import { DashPageComponent } from './dash/pages/dash-page/dash-page.component';

export const routes: Routes = [
    {
        path:'',
        component:LayoutPageComponent,
        children: [
            { path: 'dashboard', component: DashPageComponent },
            { path: 'register', component: RegisterPageComponent },
             { path: 'editer/:id', component: RegisterPageComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
       ]  
    },
    {
        path:'**',
        redirectTo:''
    }
];
