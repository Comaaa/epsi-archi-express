export default class Order {
  id: string;
  createdAt: Date;
  total: number;
  customer: number;
  products: any[];
  status: string;
  paidAt: Date;

  constructor(customerId: number, products: any[]) {
    if (!customerId) {
      throw new Error("customerId is required");
    }

    if (products.length > 2) {
      throw new Error("You can't add more than 2 products");
    }

    this.createdAt = new Date();
    this.customer = customerId;
    this.products = products;
    this.status = "cart";
    this.total = products.reduce((acc, product) => acc + 5, 0);
  }

  getId(): string {
    return this.id;
  }

  pay(): void {
    if (this.products.length === 0) {
      throw new Error("You can't pay an empty cart");
    }

    if (this.status === "paid") {
      throw new Error("Order already paid");
    }

    if (this.status === "canceled") {
      throw new Error("You can't pay a canceled order");
    }

    if (this.total === 0) {
      throw new Error("You can't pay an empty cart");
    }

    this.status = "paid";
    this.paidAt = new Date();
  }

  cancel(): void {
    if (this.status === "canceled") {
      throw new Error("Order is already canceled");
    }

    this.status = "canceled";
  }
}
