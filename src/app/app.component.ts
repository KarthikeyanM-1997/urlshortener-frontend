import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }

  loginStatus = false;

  constructor(private userService: UserServiceService) {
    
    this.userService.currentLoginStatus.subscribe(status => this.loginStatus = status);

  }

  title = 'URL Shortener';

  logout() {
    this.userService.logOut();
  }

}
