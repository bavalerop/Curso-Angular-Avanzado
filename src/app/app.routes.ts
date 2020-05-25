import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Error404Component } from './error/error404/error404.component';
import { RegisterComponent } from './login/register/register.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Error404Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
