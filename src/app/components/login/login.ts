import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  authService = inject(Auth);
  isLoggedIn:boolean=false;
  
  ngOnInit(): void {
   this.authService.isLoggedIn().subscribe((val)=>{this.isLoggedIn=val})
  }


  login(){
    this.authService.login('yousef111222','72980')
  }
  logout(){
    this.authService.logout()
  }
}
