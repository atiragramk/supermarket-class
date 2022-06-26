"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.products = [];
    }
    giveMoney(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            throw new Error('Not enough money...');
        }
    }
    receiveProducts(products) {
        this.products = products;
    }
}
exports.Customer = Customer;
