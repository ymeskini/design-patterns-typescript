import { PizzaStore } from "./PizzaStore";
import { Pizza } from "./Pizza";
import {
    ChicagoStyleCheesePizza,
    ChicagoStylePepperoniPizza,
    ChicagoStyleClamPizza,
    ChicagoStyleVeggiePizza
} from "./ChicagoStylePizzas";

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        switch (item) {
            case "cheese":
                return new ChicagoStyleCheesePizza();
            case "veggie":
                return new ChicagoStyleVeggiePizza();
            case "clam":
                return new ChicagoStyleClamPizza();
            case "pepperoni":
                return new ChicagoStylePepperoniPizza();
            default:
                throw new Error(`Unknown pizza type: ${item}`);
        }
    }
}
