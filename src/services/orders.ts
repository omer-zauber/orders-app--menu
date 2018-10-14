import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth';
import 'rxjs/Rx';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  constructor(private http: Http, private authService: AuthService) {}

  getOrders() {
    return this.orders.slice();
  }

  fetchOrders(token: string) {
    const uid = this.authService.getActiveUser().uid;
    return this.http
      .get(`https://orders-app-d8da1.firebaseio.com/someUid.json?auth=${token}`)
      .map((response: Response) => {
        return response.json();
      })
      .do((orders: Order[]) => {
        if (orders) {
          this.orders = orders;
        }
      })
      .do(() => {
        console.log(this.getOrders());
      });
    // In a real app, replace "someUid" with extracted uid
  }
}
