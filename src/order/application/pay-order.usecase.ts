import Order from "../domain/order.entity";
import OrderRepository from "../infrastructure/order.repository";
import { OrderContainer } from "../order.container";

export class PayOrderUseCase {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = OrderContainer.getOrderRepository();
  }

  payOrder(orderId: string): Order {
    const order = this.orderRepository.findById(orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    order.pay();

    const orderUpdated = this.orderRepository.save(order);

    return orderUpdated;
  }
}
