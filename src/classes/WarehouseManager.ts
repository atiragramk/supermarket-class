import { IPerson, TProduct } from "../types/types";
import { Warehouse } from './Warehouse'


export class WarehouseManager implements IPerson {
    protected productList:TProduct[] = []

    constructor(public name: string){}

    receiveProducts(warehouse: Warehouse) {
        this.productList = warehouse.giveProducts()
    }

    get product () {
        return this.productList
    }
}