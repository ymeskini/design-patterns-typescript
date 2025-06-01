import { Handler } from './Handler';
import { MonkeyHandler, SquirrelHandler, DogHandler } from './ConcreteHandlers';

export class ChainOfResponsibilityDemo {
    public static run(): void {
        console.log('Chain of Responsibility Pattern Demo\n');

        const monkey = new MonkeyHandler();
        const squirrel = new SquirrelHandler();
        const dog = new DogHandler();

        // Set up the chain: monkey -> squirrel -> dog
        monkey.setNext(squirrel).setNext(dog);

        console.log('Chain: Monkey > Squirrel > Dog\n');

        const requests = ['Nut', 'Banana', 'Cup of coffee', 'MeatBall'];

        for (const request of requests) {
            console.log(`Client: Who wants a ${request}?`);
            const result = monkey.handle(request);
            if (result) {
                console.log(`  ${result}`);
            } else {
                console.log(`  ${request} was left untouched.`);
            }
            console.log();
        }
    }
}

// Demo execution
if (require.main === module) {
    ChainOfResponsibilityDemo.run();
}
