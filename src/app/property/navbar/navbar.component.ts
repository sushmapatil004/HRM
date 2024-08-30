import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedInUser:any;
  constructor() { }

  ngOnInit(): void {
  }
  LoggedIn(){
    this.loggedInUser= localStorage.getItem('token');
    return this.loggedInUser;
    alert('User Logged In')
    
    }
     logout(){
      localStorage.removeItem('token')
      alert('User Logged Out')
     }

}
