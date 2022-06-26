import { IPerson, TProduct } from "../types/types";
import { Warehouse } from './Warehouse'


export class WarehouseManager implements IPerson {
    protected productList:TProduct[] = []

    constructor(public name: string){}

    receiveProducts(warehouse: Warehouse) {
        this.productList = warehouse.product
    }

    get product () {
        return this.productList
    }
}