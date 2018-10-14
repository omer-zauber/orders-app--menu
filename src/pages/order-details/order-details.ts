import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html'
})
export class OrderDetailsPage {
  public orderId: string;
  public productDesc: string;
  public productId: string;
  public imgPath: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.orderId = this.navParams.get('orderId');
    this.productDesc = this.navParams.get('productDesc');
    this.productId = this.navParams.get('productId');
    this.imgPath=this.navParams.get('imgPath');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
