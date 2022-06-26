import { TProduct, Producer } from '../types/types'


export class Warehouse {
    private products: TProduct[] = [
        {name: 'oil', price: 60, producer: Producer.Chumak},
        {name: 'butter', price: 72, producer: Producer.Roshen},
        {name: 'cookies', price: 28, producer: Producer.Hrona},
        {name: 'napkins', price: 20, producer: Producer.Premia},
        {name: 'coffee', price: 40, producer: Producer.Halka},
        {name: 'sausages', price: 80, producer: Producer.Hlobino},
        {name: 'sauce', price: 30, producer: Producer.Chumak},
        {name: 'chocolate', price: 30, producer: Producer.Roshen},
        {name: 'waffles', price: 30, producer: Producer.Roshen},
        {name: 'mayonnaise', price: 20, producer: Producer.Premia},
        {name: 'ketchup', price: 30, producer: Producer.Chumak},
        {name: 'bread', price: 20, producer: Producer.Hrona},    
        {name: 'ham', price: 150, producer: Producer.Hlobino},
        {name: 'eggs', price: 25, producer: Producer.Premia},
    ]

    giveProducts() {
        return this.products;
    }

}

