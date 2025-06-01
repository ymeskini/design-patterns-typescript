import { NYPizzaStore } from "./NYPizzaStore";
import { ChicagoPizzaStore } from "./ChicagoPizzaStore";

export function factoryPatternDemo(): void {
    console.log("=== Factory Method Pattern Demo ===\n");

    const nyStore = new NYPizzaStore();
    const chicagoStore = new ChicagoPizzaStore();

    let pizza = nyStore.orderPizza("cheese");
    console.log(`Ethan ordered a ${pizza.getName()}\n`);

    pizza = chicagoStore.orderPizza("cheese");
    console.log(`Joel ordered a ${pizza.getName()}\n`);

    pizza = nyStore.orderPizza("clam");
    console.log(`Ethan ordered a ${pizza.getName()}\n`);

    pizza = chicagoStore.orderPizza("clam");
    console.log(`Joel ordered a ${pizza.getName()}\n`);

    pizza = nyStore.orderPizza("pepperoni");
    console.log(`Ethan ordered a ${pizza.getName()}\n`);

    pizza = chicagoStore.orderPizza("pepperoni");
    console.log(`Joel ordered a ${pizza.getName()}\n`);

    pizza = nyStore.orderPizza("veggie");
    console.log(`Ethan ordered a ${pizza.getName()}\n`);

    pizza = chicagoStore.orderPizza("veggie");
    console.log(`Joel ordered a ${pizza.getName()}\n`);
}

// Run the demo if this file is executed directly
if (require.main === module) {
    factoryPatternDemo();
}
