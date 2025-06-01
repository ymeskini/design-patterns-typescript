import { Originator } from './Originator';
import { Caretaker } from './Caretaker';

export class MementoDemo {
    public static run(): void {
        console.log('Memento Pattern Demo\n');

        const originator = new Originator();
        const caretaker = new Caretaker(originator);

        // Set initial state
        originator.setState('State-1');
        caretaker.backup();

        // Change state and backup
        originator.setState('State-2');
        caretaker.backup();

        // Change state and backup
        originator.setState('State-3');
        caretaker.backup();

        // Do some work that changes state randomly
        originator.doSomething();
        originator.doSomething();

        console.log('\nCurrent state: ' + originator.getState());

        // Show history
        console.log();
        caretaker.showHistory();

        // Restore previous states
        console.log('\nClient: Now, let\'s rollback!\n');
        caretaker.undo();

        console.log('\nClient: Once more!\n');
        caretaker.undo();

        console.log('\nClient: One more time!\n');
        caretaker.undo();

        console.log('\nTrying to undo when no more mementos:');
        caretaker.undo();
    }
}

// Demo execution
if (require.main === module) {
    MementoDemo.run();
}
