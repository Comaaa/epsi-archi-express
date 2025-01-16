import Order from "../domain/order.entity";

export default class OrderRepository {
  private orders: Order[] = [];

  create(order: Order): Order {
    const orderWithId = {
      ...order,
      id: (this.orders.length + 1).toString(),
    } as unknown as Order;

    this.orders.push(orderWithId);

    return orderWithId;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findById(id: string): Order | undefined {
    return this.orders.find((order) => order.getId() === id);
  }

  save(order: Order): Order {
    const existingOrderIndex = this.orders.findIndex(
      (orderInList) => orderInList.getId() === order.getId()
    );

    if (existingOrderIndex !== -1) {
      this.orders[existingOrderIndex] = order;
    } else {
      this.orders.push(order);
    }

    return order;
  }
}
