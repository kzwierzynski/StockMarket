import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

username: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.auth.user && this.auth.loggedIn()){  //to avoid error, before logging in
      this.auth.getUser();
    }
  }

  onClickLogout(){
    this.flashMessage.show(`You've been logged out. See you soon, ${this.auth.user.name}!`, 
            { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/login']);
    this.auth.logout();
    return false;
  }
}
