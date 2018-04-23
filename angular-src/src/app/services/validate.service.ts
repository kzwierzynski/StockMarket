import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateData(user){
    if ((user.name == undefined) || (user.username == undefined) ||(user.email == undefined) ||(user.password == undefined)){
      return false;
    }
      return true;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    if (password === undefined){
      return false;
    } else {
      return true;
    }
  }

  isNormal(num) {
    return /^\+?(0|[1-9]\d*)$/.test(num);
  }

  validateAmounts(obj) {
    for ( let o in obj ) {
        //if empty field
        if ( !obj[o]) {
            obj[o] = 0;
        } 
        if ( !this.isNormal(obj[o]) ) {
            return {
              success: false,
              msg: 'Amount of unit shares of ' + o + ' is not a non-negative integer. Please correct the value.'
            }
        }
    }
    return {
      success: true
    }
  }
}

  