import { CaffeineBeverage } from './CaffeineBeverage';

/**
 * Concrete Class - Tea implementation
 */
export class Tea extends CaffeineBeverage {

    protected brew(): void {
        console.log('Steeping the tea');
    }

    protected addCondiments(): void {
        console.log('Adding Lemon');
    }
}
