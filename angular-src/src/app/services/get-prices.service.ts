import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class GetPricesService{

  currPrices: any;
  srvBlocked: boolean;
  Codes = ["FP", "FPL", "FPC", "PGB", "FPA", "DL24"];
  Units = [1, 100, 1, 50, 50, 100];
  timer = 3000;

  constructor(
    private http: Http,
    private auth: AuthService,
    private flashMessage: FlashMessagesService
  ) {
    this.updatePrices();
    setInterval(() => { 
      this.updatePrices(); 
    }, this.timer);
   }


    

  getPrices(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/stocks/current', {headers: headers})
      .map(res => res.json());
  }

  buyUnits(data){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.auth.getToken();
    headers.append('Authorization', this.auth.authToken);

    return this.http.post('http://localhost:3000/stocks/buy', data, {headers: headers})
      .map(res => res.json());
  }

  sellUnits(data){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.auth.getToken();
    headers.append('Authorization', this.auth.authToken);

    return this.http.post('http://localhost:3000/stocks/sell', data, {headers: headers})
      .map(res => res.json());
  }

  storePrices(prices){
    localStorage.setItem('prices', JSON.stringify(prices));
    this.currPrices = prices;
  }

  restorePrices(){
    this.currPrices = JSON.parse(localStorage.getItem('prices'));
  }

  updatePrices(){
    this.getPrices()
      .subscribe(data =>{
        if (!data.success) {  
          // console.log("1", data.srvBlocked);     
          this.srvBlocked = data.srvBlocked;
          this.flashMessage.show(data.msg, 
            { cssClass: 'alert-danger', timeout: 5000 });
        } else if (data.srvBlocked) {
          // console.log("2", data.srvBlocked); 
          this.srvBlocked = data.srvBlocked;
          this.flashMessage.show("Our servers are currently under maintenace. Temporarily all transactions are suspended. Sorry for the inconvenience.", 
            { cssClass: 'alert-danger', timeout: this.timer });
        } else {
          // console.log("3", data.srvBlocked); 
          this.srvBlocked = data.srvBlocked;
          this.storePrices(data.current);
          console.log(data.msg, data.current.publicationDate);
        }
      },
    (err) =>{
      this.flashMessage.show("Our servers are currently under maintenace. Temporarily all transactions are suspended. Sorry for the inconvenience.", 
      { cssClass: 'alert-danger', timeout: this.timer });
      this.srvBlocked = true;
    });
  }

}
