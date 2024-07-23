import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';


export const routes: Routes = [
    {path:'',component:SigninComponent},
    {path:'forgot', component:ForgotComponent}
    
];
