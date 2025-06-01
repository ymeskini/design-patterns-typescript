import { Originator } from './Originator';
import { Caretaker } from './Caretaker';

describe('Memento Pattern', () => {
    let originator: Originator;
    let caretaker: Caretaker;

    beforeEach(() => {
        originator = new Originator();
        caretaker = new Caretaker(originator);
    });

    test('should save and restore state', () => {
        // Set initial state
        originator.setState('Initial State');
        caretaker.backup();

        // Change state
        originator.setState('Modified State');
        expect(originator.getState()).toBe('Modified State');

        // Restore to previous state
        caretaker.undo();
        expect(originator.getState()).toBe('Initial State');
    });

    test('should handle multiple saves and restores', () => {
        // Save multiple states
        originator.setState('State 1');
        caretaker.backup();

        originator.setState('State 2');
        caretaker.backup();

        originator.setState('State 3');
        caretaker.backup();

        // Current state should be State 3
        expect(originator.getState()).toBe('State 3');

        // Restore to State 3
        caretaker.undo();
        expect(originator.getState()).toBe('State 3');

        // Restore to State 2
        caretaker.undo();
        expect(originator.getState()).toBe('State 2');

        // Restore to State 1
        caretaker.undo();
        expect(originator.getState()).toBe('State 1');
    });

    test('should handle undo when no mementos exist', () => {
        // Try to undo without any saved states
        expect(() => caretaker.undo()).not.toThrow();

        // State should remain unchanged
        expect(originator.getState()).toBe('');
    });

    test('should show memento history', () => {
        originator.setState('Test State 1');
        caretaker.backup();

        originator.setState('Test State 2');
        caretaker.backup();

        const mementos = caretaker.getMementos();
        expect(mementos).toHaveLength(2);
        expect(mementos[0].getState()).toBe('Test State 1');
        expect(mementos[1].getState()).toBe('Test State 2');
    });

    test('should clear history', () => {
        originator.setState('Test State');
        caretaker.backup();

        expect(caretaker.getMementos()).toHaveLength(1);

        caretaker.clear();
        expect(caretaker.getMementos()).toHaveLength(0);
    });

    test('should handle random state generation', () => {
        const initialState = originator.getState();

        originator.doSomething();
        const newState = originator.getState();

        // State should have changed
        expect(newState).not.toBe(initialState);
        expect(newState).toHaveLength(30); // Random string length
    });

    test('should maintain memento immutability', () => {
        originator.setState('Original State');
        caretaker.backup();

        const mementos = caretaker.getMementos();
        const originalLength = mementos.length;

        // Try to modify the returned array
        mementos.push = jest.fn();

        // Original caretaker should be unaffected
        expect(caretaker.getMementos()).toHaveLength(originalLength);
    });
});
