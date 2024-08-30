import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  authUser(user: any): any {
    let Userarray: any[] = [];
  
    // Handle the case where localStorage might return null
    const storedUsers = localStorage.getItem('Users');
    
    if (storedUsers) {
      Userarray = JSON.parse(storedUsers); // Only parse if not null
    }
  
    // Define the type of 'p' as an object with the expected properties
    return Userarray.find((p: { email: string; password: string }) => 
      p.email === user.email && p.password === user.password
    );
  }
}
