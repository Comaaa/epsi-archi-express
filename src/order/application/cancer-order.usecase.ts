import Order from "../domain/order.entity";
import OrderRepository from "../infrastructure/order.repository";

export class CancelOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  execute(orderId: string): Order {
    const order = this.orderRepository.findById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }

    order.cancel();
    return this.orderRepository.save(order);
  }
}
