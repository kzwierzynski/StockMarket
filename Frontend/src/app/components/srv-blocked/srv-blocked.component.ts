import { Component, OnInit } from '@angular/core';
import {GetPricesService} from '../../services/get-prices.service';

@Component({
  selector: 'app-srv-blocked',
  templateUrl: './srv-blocked.component.html',
  styleUrls: ['./srv-blocked.component.css']
})
export class SrvBlockedComponent implements OnInit {

  constructor(
    public prices: GetPricesService,
  ) { }

  ngOnInit() {
  }

}
