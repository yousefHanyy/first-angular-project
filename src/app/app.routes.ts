import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { Order } from './components/order/order';
import { Notfound } from './components/notfound/notfound';
import { Details } from './components/details/details';

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
    title: 'Courses',
  },
  { path: 'details/:id', component: Details, title: 'Details' },
  {
    path: '**',
    component: Notfound,
  },
];
