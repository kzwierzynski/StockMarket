import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import {FlashMessagesModule} from 'angular2-flash-messages';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {GetPricesService} from './services/get-prices.service';
import { AuthGuard } from './services/auth-guard.service';
import {SellBuyService} from './services/sell-buy.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { LogdivComponent } from './components/logdiv/logdiv.component';
import { SellBuyComponent } from './components/sell-buy/sell-buy.component';
import { MaxCtrlDirective } from './max-ctrl.directive';
import { SrvBlockedComponent } from './components/srv-blocked/srv-blocked.component';


const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'transaction', component: SellBuyComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BuyComponent,
    SellComponent,
    LogdivComponent,
    SellBuyComponent,
    MaxCtrlDirective,
    SrvBlockedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'info' // set defaults here
    })
  ],
  providers: [ValidateService, AuthService, AuthGuard, GetPricesService, SellBuyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
