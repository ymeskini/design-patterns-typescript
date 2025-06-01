import { Pizza } from "./Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Deep Dish Cheese Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings.push("Shredded Mozzarella Cheese");
    }

    cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}

export class ChicagoStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Pepperoni Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Black Olives");
        this.toppings.push("Spinach");
        this.toppings.push("Eggplant");
        this.toppings.push("Sliced Pepperoni");
    }

    cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}

export class ChicagoStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Clam Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Frozen Clams from Chesapeake Bay");
    }

    cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Deep Dish Veggie Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Black Olives");
        this.toppings.push("Spinach");
        this.toppings.push("Eggplant");
    }

    cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}
