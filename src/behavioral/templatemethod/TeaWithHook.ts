import { CaffeineBeverageWithHook } from './CaffeineBeverageWithHook';

/**
 * Tea implementation with hook for customer preference
 */
export class TeaWithHook extends CaffeineBeverageWithHook {

    protected brew(): void {
        console.log('Steeping the tea');
    }

    protected addCondiments(): void {
        console.log('Adding Lemon');
    }

    protected customerWantsCondiments(): boolean {
        // Simulate user input for lemon preference
        console.log('Would you like lemon with your tea (y/n)?');

        const responses = ['yes', 'no', 'y', 'n'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        console.log(`Simulated user input: ${randomResponse}`);

        return randomResponse.toLowerCase().startsWith('y');
    }
}
