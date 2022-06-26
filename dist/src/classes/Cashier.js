"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cashier = void 0;
class Cashier {
    constructor(name, available) {
        this.name = name;
        this.available = available;
        this.cashBalance = 0;
    }
    receiveMoney(total) {
        this.cashBalance += total;
    }
    collection() {
        const balance = this.cashBalance;
        this.cashBalance = 0;
        return balance;
    }
}
exports.Cashier = Cashier;
