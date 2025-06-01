import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private vegetarian: boolean;
    private price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    print(): void {
        process.stdout.write(`  ${this.getName()}`);
        if (this.isVegetarian()) {
            process.stdout.write("(v)");
        }
        console.log(`, ${this.getPrice()}`);
        console.log(`     -- ${this.getDescription()}`);
    }
}
