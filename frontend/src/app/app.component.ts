import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private apiService: ApiService,private jwtService: JwtService, private router: Router) {}
  ngOnInit() {
  }
  logOut() {
    this.jwtService.logout();
    this.router.navigate(['login'])
  }
}
