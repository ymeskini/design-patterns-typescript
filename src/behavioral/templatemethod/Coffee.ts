import { CaffeineBeverage } from './CaffeineBeverage';

/**
 * Concrete Class - Coffee implementation
 */
export class Coffee extends CaffeineBeverage {

    protected brew(): void {
        console.log('Dripping Coffee through filter');
    }

    protected addCondiments(): void {
        console.log('Adding Sugar and Milk');
    }
}
