import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { Order } from './components/order/order';
import { Notfound } from './components/notfound/notfound';
import { Details } from './components/details/details';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutUs,
    title: 'About Us',
  },
  {
    path: 'contact',
    component: ContactUs,
    title: 'Contact Us',
  },
  {
    path: 'courses',
    component: Order,
    title: 'Courses',canActivate:[authGuard]
  },
  {
    path:'login',
    component: Login, title:'Login', 
  },
  { path: 'details/:id', component: Details, title: 'Details' },{
    path: '**',
    component: Notfound,
  },
];
