import { Component } from "@angular/core";
import { Platform, MenuController } from "ionic-angular";
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from "firebase";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { AuthService } from "../services/auth";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = LoginPage;
  // isAuthenticated = false;

  constructor(platform: Platform, private authService: AuthService, private menuCtrl:MenuController) {
    firebase.initializeApp({
      apiKey: "AIzaSyBrblsIgjjQ6pwqRJ5sJzMY7_MdpOvIu_0",
      authDomain: "orders-app-d8da1.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // this.isAuthenticated = true;
        console.log(user);
        this.rootPage = HomePage;
      } else {
        // this.isAuthenticated = false;
        this.rootPage = LoginPage;
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
  }
}
