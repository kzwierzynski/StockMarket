import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {GetPricesService} from '../../services/get-prices.service';
import {SellBuyService} from '../../services/sell-buy.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-sell-buy',
  templateUrl: './sell-buy.component.html',
  styleUrls: ['./sell-buy.component.css']
})
export class SellBuyComponent implements OnInit {

  buy_units = 1;
  sell_units = 1;
  public popoverTitle: string = 'Confirmation';
  public popoverMessage: string  = "Are you sure you want to make the transaction?"
  // public popoverMessage: string;
  public cancelClicked: boolean = false;

  constructor(
    private auth: AuthService,
    private prices: GetPricesService,
    private sellBuy: SellBuyService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.sellBuy.restoreNumCode();
    this.auth.getUser();
    this.prices.restorePrices();
    // console.log(this.prices.currPrices.items[this.sellBuy.i].price );
  }

  // onClickUpdate(){
  //   this.popoverMessage = `Are you sure you want to buy ${ this.buyUnits * this.prices.currUnits[this.sellBuy.i] } ${ this.prices.currCodes[this.sellBuy.i] } for ${ (this.prices.currPrices.items[this.sellBuy.i].sellPrice * this.buyUnits).toFixed(2)} PLN?`;
  // }
  
  onClickBuy(){
    this.sellBuy.data.units = this.buy_units;
    this.sellBuy.data.num_code = this.sellBuy.i;
    this.sellBuy.data.user_id = this.auth.user.id;

    this.prices.buyUnits(this.sellBuy.data)
    .subscribe(response =>{
      if (!response.success) {  
        // console.log("1");     
        this.flashMessage.show(response.msg, 
          { cssClass: 'alert-danger', timeout: 5000 });
      } else {
        // console.log("2"); 
        this.auth.updateWallet(response.wallet);
        this.flashMessage.show(response.msg, 
          { cssClass: 'alert-success', timeout: 5000 });
        // console.log("Users wallet updated: " + response.wallet);
      }
    },
  (err) =>{
    this.flashMessage.show("Sorry, something went wrong, please try again later.", 
    { cssClass: 'alert-danger', timeout: 5000 });
  });

    // console.log(this.sellBuy.response, this.sellBuy.i, this.prices.currPrices.items[this.sellBuy.i].Price);
  }

  onClickSell(){
    this.sellBuy.data.units = this.sell_units;
    this.sellBuy.data.num_code = this.sellBuy.i;
    this.sellBuy.data.user_id = this.auth.user.id;

    this.prices.sellUnits(this.sellBuy.data)
    .subscribe(response =>{
      if (!response.success) {  
        // console.log("1");     
        this.flashMessage.show(response.msg, 
          { cssClass: 'alert-danger', timeout: 5000 });
      } else {
        // console.log("2"); 
        this.auth.updateWallet(response.wallet);
        this.flashMessage.show(response.msg, 
          { cssClass: 'alert-success', timeout: 5000 });
        // console.log("Users wallet updated: " + response.wallet);
      }
    },
  (err) =>{
    this.flashMessage.show("Sorry, something went wrong, please try again later.", 
    { cssClass: 'alert-danger', timeout: 5000 });
  });
  }

}
