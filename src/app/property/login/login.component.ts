import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  ngLogin(login:NgForm){
    console.log(login.value);
      const token = this.auth.authUser(login.value)
   if(token){
    localStorage.setItem('token',token.email)
    console.log('Login successful');
    this.router.navigate(['/']);
   }
   else{
    console.log('Login failed');
   }
    }

}
