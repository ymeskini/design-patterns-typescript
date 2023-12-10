export abstract class Beverage {
    private readonly description: string;
    
    getDescription(): string {
        return this.description;
    }
    
    abstract cost(): number;
}