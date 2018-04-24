import { Component, OnInit } from '@angular/core';
import {GetPricesService} from '../../services/get-prices.service';
import {SellBuyService} from '../../services/sell-buy.service';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';



@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(
    private prices: GetPricesService,
    private sellBuy: SellBuyService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.prices.restorePrices();
    this.auth.getUser();
  }

  buyCurrency(i : number){
    this.prices.updatePrices();
    this.sellBuy.buy = true;
    this.sellBuy.i = i;
    this.sellBuy.storeNumCode(i);
    this.router.navigate(['transaction']);
  }
  

}
