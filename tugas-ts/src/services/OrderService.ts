import { Order } from "../models/order";

export const placeOrder = (order: Order[], newOrder: Order): Order[] => {
    return [...order, newOrder];
};

export const cencelOrder = (orders: Order[], orderId: number): Order[] => {
    return orders.filter(order => order.id !== orderId)
};

export const updateOrder = (orders: Order[], orderId: number, status: "pending" | "shipped"|"delivered"): Order[] => {
    return orders.map(order => 
        order.id == orderId ? {...order,status} : order
    );
};

export const getOrder = (orders: Order[]): Order[] => {
    return orders;
}