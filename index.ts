import { Cashier } from "./src/classes/Cashier";
import { Customer } from "./src/classes/Customer";
import { Supermarket } from "./src/classes/Supermarket";
import { Warehouse } from "./src/classes/Warehouse";
import { WarehouseManager } from "./src/classes/WarehouseManager";

const cashier = new Cashier("John", true);
const market = new Supermarket();
const customer = new Customer("Marylyn", 500);
const manager = new WarehouseManager("Chester");
const storage = new Warehouse();

manager.receiveProducts(storage);

market.openMarket(cashier, manager);

market.sell(['bread', 'ham', 'eggs'], customer, cashier);

market.closeMarket(cashier);




