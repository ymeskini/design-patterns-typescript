import { Monster } from './Monster';
import { Dragon } from './Dragon';
import { Drakon } from './Drakon';
import { Prototype, ConcretePrototype1, ConcretePrototype2 } from './Prototype';

/**
 * Prototype Pattern Demo
 * Demonstrates object cloning without knowing the specific classes
 */
export class PrototypeDemo {
    public static run(): void {
        console.log('=== PROTOTYPE PATTERN DEMO ===\n');

        // Monster prototype demo
        console.log('1. Monster Prototype Demo:');

        // Create original monsters
        const originalDragon = new Dragon('Smaug', true);
        const originalDrakon = new Drakon('Hydra', 8);

        console.log('Original monsters:');
        console.log(originalDragon.toString());
        console.log(originalDrakon.toString());

        // Clone the monsters
        const clonedDragon = originalDragon.copy() as Dragon;
        const clonedDrakon = originalDrakon.copy() as Drakon;

        // Modify clones to show they are independent
        clonedDragon.setName('Smaug Jr.');
        clonedDrakon.setName('Mini Hydra');
        clonedDrakon.setPoisonLevel(3);

        console.log('\nCloned and modified monsters:');
        console.log(clonedDragon.toString());
        console.log(clonedDrakon.toString());

        console.log('\nOriginal monsters (unchanged):');
        console.log(originalDragon.toString());
        console.log(originalDrakon.toString());

        // Generic prototype demo
        console.log('\n\n2. Generic Prototype Demo:');

        const p1 = new ConcretePrototype1();
        const p2 = new ConcretePrototype2();

        console.log('Operating with prototypes...');
        PrototypeDemo.operation(p1);
        PrototypeDemo.operation(p2);
    }

    public static operation(prototype: Prototype): Prototype {
        // This code doesn't know or care what the concrete type of prototype is
        const prototypeCopy = prototype.copy();
        console.log('Operating with prototype copy!');

        // Demonstrate that the copy is independent
        if (prototypeCopy instanceof ConcretePrototype1) {
            prototypeCopy.setValue('Modified Copy');
            console.log(`Copy value: ${prototypeCopy.getValue()}`);
        } else if (prototypeCopy instanceof ConcretePrototype2) {
            prototypeCopy.setData([10, 20, 30]);
            console.log(`Copy data: [${prototypeCopy.getData().join(', ')}]`);
        }

        return prototypeCopy;
    }
}

// Run the demo if this file is executed directly
if (require.main === module) {
    PrototypeDemo.run();
}
