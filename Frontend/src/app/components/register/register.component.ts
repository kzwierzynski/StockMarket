import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import {GetPricesService} from '../../services/get-prices.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String = "Name";
  username: String= "user-name";
  email: String = "email@com";
  password: String;
  FP: Number = 0;
  FPL: Number = 0;
  FPC: Number = 0;
  PGB: Number = 0;
  FPA: Number = 0;
  DL24: Number = 0;
  PLN: Number = 5000;
  submitted: boolean;


  constructor(
              private flashMessage: FlashMessagesService,
              private auth: AuthService,
              private prices: GetPricesService,
              private router: Router
            ) { }

  ngOnInit() {
    this.prices.getPrices();
    this.submitted = false;
  }

  onRegisterSubmit(){

    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      wallet: {
        FP: this.FP,
        FPL: this.FPL,
        FPC: this.FPC,
        PGB: this.PGB,
        FPA: this.FPA,
        DL24: this.DL24,
        PLN: this.PLN
      }
    }

    this.auth.registerUser(user)
      .subscribe(data => {
        // console.log(data);
        if (!data.success){
          this.flashMessage.show(data.msg, 
            { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/register']);
            this.submitted = true;
        } else {
          this.flashMessage.show(data.msg, 
            { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['/login']);
        }
      });
  }

  onClickAgain(){
    this.username = "";
    this.submitted = false;
  }

}
