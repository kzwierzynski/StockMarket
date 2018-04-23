import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken : any;
  user: any;

  constructor(private http: Http ) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log("auth registerUser fired");
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res.json());
      // .toPromise()
      // .then(res => res.json());
  }
  
  loginUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.getToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res.json());
  }

  storeData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getToken(){
    this.authToken = localStorage.getItem('id_token');
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  updateWallet(wallet){
    this.user.wallet = wallet;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }  

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
