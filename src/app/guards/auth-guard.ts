import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(Auth);
  let router= inject(Router)
  let isLoggedIn:boolean = false;

  authService.isLoggedIn().subscribe((val)=>{
    isLoggedIn=val
  })
  if(!isLoggedIn){
    router.navigateByUrl('/login')
    return false
  }
  return isLoggedIn
};
