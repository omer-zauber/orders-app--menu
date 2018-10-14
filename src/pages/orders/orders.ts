import { Component, SimpleChanges } from "@angular/core";
import { OrdersService } from "../../services/orders";
import { AuthService } from "../../services/auth";
import {
  LoadingController,
  AlertController,
  ModalController
} from "ionic-angular";
import { Order } from "../../models/order";
import { OrderDetailsPage } from "../order-details/order-details";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";

@Component({
  selector: "page-orders",
  templateUrl: "orders.html"
})
export class OrdersPage {
  orders: Order[] = [];
  barcodeOptions: BarcodeScannerOptions;
  search: string = "";

  constructor(
    private ordersService: OrdersService,
    private authservice: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private barcode: BarcodeScanner
  ) {}

  ionViewDidLoad() {
    const loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.authservice
      .getActiveUser()
      .getIdToken()
      .then((token: string) => {
        this.ordersService.fetchOrders(token).subscribe(
          (list: Order[]) => {
            loading.dismiss();
            if (list) {
              this.orders = list;
            } else {
              this.orders = [];
            }
          },
          error => {
            loading.dismiss();

            const alert = this.alertCtrl.create({
              title: "An error occurred!",
              message: error.json().error,
              buttons: ["Ok"]
            });
            alert.present();
          }
        );
      });
  }

  onOrderDetails(order: Order) {
    const modal = this.modalCtrl.create(OrderDetailsPage, order);
    modal.present();
  }
  
  filterOrders(eventText: string) {
    console.log(eventText);
    this.orders = this.ordersService.getOrders();

    if (eventText && eventText.trim() !== "") {
      this.orders = this.orders.filter(function(order: Order) {
        const searchInsideText = `${order.orderId} ${order.customerName} ${
          order.productDesc
        }`;
        return searchInsideText.toLowerCase().includes(eventText.toLowerCase());
      });
    }
  }

  async scanBarcode() {
    const results = await this.barcode.scan();
    if (!results.cancelled && results.text) {
      this.search = results.text;
    }
    // this.search = "0000276"; //for testing purposes

    this.filterOrders(this.search);
  }
}
