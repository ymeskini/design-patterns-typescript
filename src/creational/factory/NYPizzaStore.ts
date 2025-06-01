import { PizzaStore } from "./PizzaStore";
import { Pizza } from "./Pizza";
import {
    NYStyleCheesePizza,
    NYStylePepperoniPizza,
    NYStyleClamPizza,
    NYStyleVeggiePizza
} from "./NYStylePizzas";

export class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        switch (item) {
            case "cheese":
                return new NYStyleCheesePizza();
            case "veggie":
                return new NYStyleVeggiePizza();
            case "clam":
                return new NYStyleClamPizza();
            case "pepperoni":
                return new NYStylePepperoniPizza();
            default:
                throw new Error(`Unknown pizza type: ${item}`);
        }
    }
}
