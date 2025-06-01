import { Pizza } from "./Pizza";

export class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce and Cheese Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings.push("Grated Reggiano Cheese");
    }
}

export class NYStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Pepperoni Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings.push("Grated Reggiano Cheese");
        this.toppings.push("Sliced Pepperoni");
        this.toppings.push("Garlic");
        this.toppings.push("Onion");
        this.toppings.push("Mushrooms");
        this.toppings.push("Red Pepper");
    }
}

export class NYStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Clam Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings.push("Grated Reggiano Cheese");
        this.toppings.push("Fresh Clams from Long Island Sound");
    }
}

export class NYStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Veggie Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings.push("Grated Reggiano Cheese");
        this.toppings.push("Garlic");
        this.toppings.push("Onion");
        this.toppings.push("Mushrooms");
        this.toppings.push("Red Pepper");
    }
}
