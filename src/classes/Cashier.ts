import { IPerson } from "../types/types";

export class Cashier implements IPerson {
  private cashBalance = 0;
  constructor(public name: string, public available: boolean) {}

  public receiveMoney(total: number) {
    this.cashBalance += total;
  }

  public collection() {
    const balance = this.cashBalance;
    this.cashBalance = 0;
    return balance;
  }
}
