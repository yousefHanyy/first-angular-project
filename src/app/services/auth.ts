import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  loginStatus:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  login(username:string,password:string){
    localStorage.setItem('token','secretToken')
    this.loginStatus.next(true)
  }
  logout(){
    localStorage.removeItem('token')
    this.loginStatus.next(false)
  }

  isLoggedIn():BehaviorSubject<boolean>{
    return this.loginStatus
  }
}
