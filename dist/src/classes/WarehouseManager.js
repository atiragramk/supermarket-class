"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseManager = void 0;
class WarehouseManager {
    constructor(name) {
        this.name = name;
        this.productList = [];
    }
    receiveProducts(warehouse) {
        this.productList = warehouse.product;
    }
    get product() {
        return this.productList;
    }
}
exports.WarehouseManager = WarehouseManager;
