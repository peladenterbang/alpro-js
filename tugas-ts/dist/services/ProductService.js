"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.updateProduct = exports.removeProduct = exports.addProduct = void 0;
const addProduct = (products, newProduct) => {
    return [...products, newProduct];
};
exports.addProduct = addProduct;
const removeProduct = (products, productId) => {
    return products.filter(product => product.id !== productId);
};
exports.removeProduct = removeProduct;
const updateProduct = (products, updateProduct) => {
    return products.map(product => product.id === updateProduct.id ? updateProduct : product);
};
exports.updateProduct = updateProduct;
const getProducts = (products) => {
    return products;
};
exports.getProducts = getProducts;
