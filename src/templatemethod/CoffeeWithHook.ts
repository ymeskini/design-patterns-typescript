import { CaffeineBeverageWithHook } from './CaffeineBeverageWithHook';
import * as readline from 'readline';

/**
 * Coffee implementation with hook for customer preference
 */
export class CoffeeWithHook extends CaffeineBeverageWithHook {

    protected brew(): void {
        console.log('Dripping Coffee through filter');
    }

    protected addCondiments(): void {
        console.log('Adding Sugar and Milk');
    }

    protected customerWantsCondiments(): boolean {
        // In a real application, this would get user input
        // For demo purposes, we'll simulate the response
        const answer = this.getUserInput();
        return answer.toLowerCase().startsWith('y');
    }

    private getUserInput(): string {
        // Simulate user input for demo purposes
        // In a real Node.js application, you might use readline or inquirer
        console.log('Would you like milk and sugar with your coffee (y/n)?');

        // For demonstration, let's simulate different responses
        const responses = ['yes', 'no', 'y', 'n'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        console.log(`Simulated user input: ${randomResponse}`);

        return randomResponse;
    }

    // Alternative implementation using async readline (commented for demo simplicity)
    /*
    private async getUserInputAsync(): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            rl.question('Would you like milk and sugar with your coffee (y/n)? ', (answer) => {
                rl.close();
                resolve(answer || 'no');
            });
        });
    }
    */
}
