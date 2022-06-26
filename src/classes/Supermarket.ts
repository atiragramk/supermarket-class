import { TProduct } from "../types/types";
import { Cashier } from "./Cashier";
import { Customer } from "./Customer";

import { WarehouseManager } from "./WarehouseManager";

export class Supermarket {
  private productList: TProduct[] = [];
  private balance = 12000;
  public isOpen = false;

  public openMarket(cashier: Cashier, manager: WarehouseManager) {
    if (cashier.available && manager.product.length) {
      this.productList = manager.product;
      this.isOpen = true;
    } else {
      throw new Error("Sorry we still close");
    }
  }

  public sell(products: Array<string>, customer: Customer, cashier: Cashier) {
    if (this.isOpen) {
      const wishList = this.productList.reduce(
        (filtered: TProduct[], product) => {
          products.forEach((item) => {
            if (product.name === item) {
              filtered.push(product);
            }
          });
          return filtered;
        },
        []
      );

      if (wishList.length == 0) {
        throw new Error("Sorry, there are no such products in our store");
      }

      const totalSum = wishList.reduce((sum, product) => {
        return sum + product.price;
      }, 0);
      this.takeMoneyFromCustomer(customer, totalSum, cashier);
      this.giveCustomerProducts(customer, wishList);
    } else {
      throw new Error("Sorry, we are closed");
    }
  }

  public closeMarket(cashier: Cashier) {
    this.balance += cashier.collection();
    this.isOpen = false;
  }

  protected takeMoneyFromCustomer(
    customer: Customer,
    amount: number,
    cashier: Cashier
  ) {
    customer.giveMoney(amount);
    cashier.receiveMoney(amount);
  }

  protected giveCustomerProducts(customer: Customer, products: TProduct[]) {
    customer.receiveProducts(products);
  }
}
