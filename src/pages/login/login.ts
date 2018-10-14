import { Component } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signupPage = SignupPage
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  onLogin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Loging In...'
    });
    loading.present();
    this.authService
      .login(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Login Failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }
}
