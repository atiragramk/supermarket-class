"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
const types_1 = require("../types/types");
class Warehouse {
    constructor() {
        this.products = [
            { name: 'oil', price: 60, producer: types_1.Producer.Chumak },
            { name: 'butter', price: 72, producer: types_1.Producer.Roshen },
            { name: 'cookies', price: 28, producer: types_1.Producer.Hrona },
            { name: 'napkins', price: 20, producer: types_1.Producer.Premia },
            { name: 'coffee', price: 40, producer: types_1.Producer.Halka },
            { name: 'sausages', price: 80, producer: types_1.Producer.Hlobino },
            { name: 'sauce', price: 30, producer: types_1.Producer.Chumak },
            { name: 'chocolate', price: 30, producer: types_1.Producer.Roshen },
            { name: 'waffles', price: 30, producer: types_1.Producer.Roshen },
            { name: 'mayonnaise', price: 20, producer: types_1.Producer.Premia },
            { name: 'ketchup', price: 30, producer: types_1.Producer.Chumak },
            { name: 'bread', price: 20, producer: types_1.Producer.Hrona },
            { name: 'ham', price: 150, producer: types_1.Producer.Hlobino },
            { name: 'eggs', price: 25, producer: types_1.Producer.Premia },
        ];
    }
    giveProducts() {
        return this.products;
    }
}
exports.Warehouse = Warehouse;
