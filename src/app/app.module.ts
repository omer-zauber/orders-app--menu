import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { OrdersPage } from '../pages/orders/orders';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';
import { OrdersService } from '../services/orders';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OrderDetailsPage,
    OrdersPage,
    SignupPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule, FormsModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OrderDetailsPage,
    OrdersPage,
    SignupPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    OrdersService,
    BarcodeScanner
  ]
})
export class AppModule {}
