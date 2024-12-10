"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.updateOrder = exports.cencelOrder = exports.placeOrder = void 0;
const placeOrder = (order, newOrder) => {
    return [...order, newOrder];
};
exports.placeOrder = placeOrder;
const cencelOrder = (orders, orderId) => {
    return orders.filter(order => order.id !== orderId);
};
exports.cencelOrder = cencelOrder;
const updateOrder = (orders, orderId, status) => {
    return orders.map(order => order.id == orderId ? Object.assign(Object.assign({}, order), { status }) : order);
};
exports.updateOrder = updateOrder;
const getOrder = (orders) => {
    return orders;
};
exports.getOrder = getOrder;
