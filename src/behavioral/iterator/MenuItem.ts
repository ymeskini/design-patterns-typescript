/**
 * MenuItem class representing an item in a menu
 */
export class MenuItem {
    public name: string;
    public description: string;
    public vegetarian: boolean;
    public price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public isVegetarian(): boolean {
        return this.vegetarian;
    }

    public toString(): string {
        return `${this.name}, $${this.price}\n   ${this.description}`;
    }
}
