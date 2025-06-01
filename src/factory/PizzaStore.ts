import { Pizza } from "./Pizza";

export abstract class PizzaStore {
    abstract createPizza(item: string): Pizza;

    orderPizza(type: string): Pizza {
        const pizza = this.createPizza(type);
        console.log(`--- Making a ${pizza.getName()} ---`);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
