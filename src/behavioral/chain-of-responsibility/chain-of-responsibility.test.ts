import { Handler } from './Handler';
import { MonkeyHandler, SquirrelHandler, DogHandler } from './ConcreteHandlers';

describe('Chain of Responsibility Pattern', () => {
    let monkey: MonkeyHandler;
    let squirrel: SquirrelHandler;
    let dog: DogHandler;

    beforeEach(() => {
        monkey = new MonkeyHandler();
        squirrel = new SquirrelHandler();
        dog = new DogHandler();

        // Set up the chain
        monkey.setNext(squirrel).setNext(dog);
    });

    test('should handle requests that match handlers in the chain', () => {
        expect(monkey.handle('Banana')).toBe("Monkey: I'll eat the Banana");
        expect(monkey.handle('Nut')).toBe("Squirrel: I'll eat the Nut");
        expect(monkey.handle('MeatBall')).toBe("Dog: I'll eat the MeatBall");
    });

    test('should return null for unhandled requests', () => {
        expect(monkey.handle('Coffee')).toBeNull();
        expect(monkey.handle('Pizza')).toBeNull();
    });

    test('should allow different chain configurations', () => {
        // Create a different chain: dog -> squirrel
        const newDog = new DogHandler();
        const newSquirrel = new SquirrelHandler();
        newDog.setNext(newSquirrel);

        expect(newDog.handle('MeatBall')).toBe("Dog: I'll eat the MeatBall");
        expect(newDog.handle('Nut')).toBe("Squirrel: I'll eat the Nut");
        expect(newDog.handle('Banana')).toBeNull();
    });

    test('should work with single handler', () => {
        const singleMonkey = new MonkeyHandler();

        expect(singleMonkey.handle('Banana')).toBe("Monkey: I'll eat the Banana");
        expect(singleMonkey.handle('Nut')).toBeNull();
    });
});
