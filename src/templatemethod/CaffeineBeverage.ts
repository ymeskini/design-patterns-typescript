/**
 * Template Method Pattern - Abstract Class
 * Defines the skeleton of an algorithm in a method, deferring some steps to subclasses
 */
export abstract class CaffeineBeverage {

    // Template method - defines the algorithm skeleton
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    // Abstract methods - must be implemented by subclasses
    protected abstract brew(): void;
    protected abstract addCondiments(): void;

    // Concrete methods - same for all subclasses
    protected boilWater(): void {
        console.log('Boiling water');
    }

    protected pourInCup(): void {
        console.log('Pouring into cup');
    }
}
