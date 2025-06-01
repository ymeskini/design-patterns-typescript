# Memento Pattern

## Overview

The Memento pattern captures and externalizes an object's internal state so that the object can be restored to this state later, without violating encapsulation. It's also known as the "Token" pattern.

## Structure

- **Memento**: Interface that defines what state can be stored and retrieved
- **Originator**: The object whose state needs to be saved and restored
- **Caretaker**: Manages mementos and is responsible for the memento's safekeeping, but never operates on or examines the contents of a memento

## Key Benefits

- **Encapsulation**: The originator's internal state remains encapsulated
- **Simplicity**: Saves and restores state without exposing implementation details
- **Undo Operations**: Enables undo/redo functionality
- **Snapshots**: Provides checkpointing capabilities

## Example

In this implementation:
- `Originator` is an object that can change its state and create snapshots (mementos)
- `ConcreteMemento` stores the state snapshot with timestamp information
- `Caretaker` manages the collection of mementos and provides undo functionality

## Usage

```typescript
const originator = new Originator();
const caretaker = new Caretaker(originator);

// Set state and save
originator.setState('State 1');
caretaker.backup();

// Change state
originator.setState('State 2');

// Restore previous state
caretaker.undo(); // Back to 'State 1'
```

## When to Use

- When you need to provide undo functionality
- When you want to save snapshots of an object's state
- When direct access to an object's state would violate encapsulation
- When you need to implement checkpointing mechanisms

## Real-world Examples

- Text editors (undo/redo functionality)
- Game save states
- Database transaction rollbacks
- Configuration management systems
