import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {GetPricesService} from '../../services/get-prices.service';
import {SellBuyService} from '../../services/sell-buy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private prices: GetPricesService,
    private sellBuy: SellBuyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.getUser();
    this.prices.restorePrices();
  }

  sellCurrency(i : number){
    this.prices.updatePrices();
    this.sellBuy.buy = false;
    this.sellBuy.i = i;
    this.sellBuy.storeNumCode(i);
    this.router.navigate(['transaction']);
  }

}
