export class Order {
  constructor(
    public orderId: string,
    public customerAddress: string,
    public customerId: string,
    public customerName: string,
    public productDesc: string,
    public productId: string,
    public imgPath: string
  ) {}
}
