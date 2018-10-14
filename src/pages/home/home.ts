import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { OrdersPage } from "../orders/orders";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  ordersPage = OrdersPage;

  constructor(public navCtrl: NavController) {}
}
