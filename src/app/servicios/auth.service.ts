import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;  

  constructor() {}

  
  login(username: string, password: string): boolean {
    
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated = true;  // 
      return true;
    }
    return false;  
  }

  
  logout(): void {
    this.isAuthenticated = false;  
  }

  
  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }
}
