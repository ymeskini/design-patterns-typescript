export class ChocolateBoiler {
    private empty: boolean = true;
    private boiled: boolean = false;
    private static uniqueInstance: ChocolateBoiler;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    public static getInstance(): ChocolateBoiler {
        if (!ChocolateBoiler.uniqueInstance) {
            console.log("Creating unique instance of Chocolate Boiler");
            ChocolateBoiler.uniqueInstance = new ChocolateBoiler();
        }
        console.log("Returning instance of Chocolate Boiler");
        return ChocolateBoiler.uniqueInstance;
    }

    public fill(): void {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
            console.log("Filling the boiler with a milk/chocolate mixture");
        }
    }

    public drain(): void {
        if (!this.isEmpty() && this.isBoiled()) {
            console.log("Draining the boiled milk and chocolate");
            this.empty = true;
        }
    }

    public boil(): void {
        if (!this.isEmpty() && !this.isBoiled()) {
            console.log("Bringing the contents to a boil");
            this.boiled = true;
        }
    }

    public isEmpty(): boolean {
        return this.empty;
    }

    public isBoiled(): boolean {
        return this.boiled;
    }
}
