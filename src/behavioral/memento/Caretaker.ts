import { Memento } from './Memento';
import { Originator } from './Originator';

export class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            console.log('Caretaker: No mementos to restore.');
            return;
        }

        const memento = this.mementos.pop()!;
        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);

        try {
            this.originator.restore(memento);
        } catch (e) {
            this.undo();
        }
    }

    public showHistory(): void {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }

    public getMementos(): Memento[] {
        return [...this.mementos]; // Return a copy to prevent external modification
    }

    public clear(): void {
        this.mementos = [];
        console.log('Caretaker: History cleared.');
    }
}
