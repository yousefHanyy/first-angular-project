import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  authService = inject(Auth);
  isLoggedIn:boolean=false;
  
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((val)=>{this.isLoggedIn=val})
  }

  
}
