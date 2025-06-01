/**
 * Template Method Pattern with Hook - Abstract Class
 * Includes hooks that subclasses can override to alter parts of the algorithm
 */
export abstract class CaffeineBeverageWithHook {

    // Template method with hook
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    // Abstract methods
    protected abstract brew(): void;
    protected abstract addCondiments(): void;

    // Concrete methods
    protected boilWater(): void {
        console.log('Boiling water');
    }

    protected pourInCup(): void {
        console.log('Pouring into cup');
    }

    // Hook method - subclasses can override this
    protected customerWantsCondiments(): boolean {
        return true;
    }
}
