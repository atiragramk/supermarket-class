"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supermarket = void 0;
class Supermarket {
    constructor() {
        this.productList = [];
        this.balance = 12000;
        this.isOpen = false;
    }
    openMarket(cashier, manager) {
        if (cashier.available && manager.product.length) {
            this.productList = manager.product;
            this.isOpen = true;
        }
        else {
            throw new Error("Sorry we still close");
        }
    }
    sell(products, customer, cashier) {
        if (this.isOpen) {
            const wishList = this.productList.reduce((filtered, product) => {
                products.forEach((item) => {
                    if (product.name === item) {
                        filtered.push(product);
                    }
                });
                return filtered;
            }, []);
            if (wishList.length == 0) {
                throw new Error("Sorry, there are no such products in our store");
            }
            const totalSum = wishList.reduce((sum, product) => {
                return sum + product.price;
            }, 0);
            this.takeMoneyFromCustomer(customer, totalSum, cashier);
            this.giveCustomerProducts(customer, wishList);
        }
        else {
            throw new Error("Sorry, we are closed");
        }
    }
    closeMarket(cashier) {
        this.balance += cashier.collection();
        this.isOpen = false;
    }
    takeMoneyFromCustomer(customer, amount, cashier) {
        customer.giveMoney(amount);
        cashier.receiveMoney(amount);
    }
    giveCustomerProducts(customer, products) {
        customer.receiveProducts(products);
    }
}
exports.Supermarket = Supermarket;
