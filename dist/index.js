"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cashier_1 = require("./src/classes/Cashier");
const Customer_1 = require("./src/classes/Customer");
const Supermarket_1 = require("./src/classes/Supermarket");
const Warehouse_1 = require("./src/classes/Warehouse");
const WarehouseManager_1 = require("./src/classes/WarehouseManager");
const cashier = new Cashier_1.Cashier("John", true);
const market = new Supermarket_1.Supermarket();
const customer = new Customer_1.Customer("Marylyn", 500);
const manager = new WarehouseManager_1.WarehouseManager("Chester");
const storage = new Warehouse_1.Warehouse();
manager.receiveProducts(storage);
market.openMarket(cashier, manager);
market.sell(['bread', 'ham', 'eggs'], customer, cashier);
market.closeMarket(cashier);
