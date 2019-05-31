import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpCliente: HttpClient) { }

  login(email: string, password: string) {
    return this.httpCliente.post<{access_token: string}>('auth/login', {email, password}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token)
    }))
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
