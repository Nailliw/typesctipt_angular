import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private email: string = 'usuario@email.com';
  private password: string = '12345';

  auth = false


  login(email: string, password: string): boolean {
    if (this.email === email && this.password === password) {
      this.auth = true
      return true;
    }
    return false;
  }
}
