# Command Pattern

**Intent:** Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as method arguments, delay or queue a request's execution, and support undoable operations.

*Also known as: Action, Transaction*

## Problem It Solves

The Command pattern addresses several issues in GUI and business logic decoupling:

**Text Editor Example:** You're building a text editor with toolbar buttons, context menus, and keyboard shortcuts. Initially, you might create:
- `CopyButton`, `PasteButton`, `CutButton` subclasses
- Duplicate code for the same operations across different UI elements
- Tight coupling between GUI and business logic
- Difficulty implementing undo/redo functionality

**Restaurant Order Analogy:** A waiter takes your order, writes it on paper, and gives it to the kitchen. The paper order serves as a command - it contains all information needed to prepare the meal and can be queued, prioritized, or cancelled.

## Structure

1. **Sender/Invoker** (`RemoteControl`) - Initiates requests by triggering commands
2. **Command Interface** (`Command`) - Declares execution method (usually `execute()`)
3. **Concrete Commands** (`LightOnCommand`, `GarageDoorOpenCommand`) - Implement specific operations
4. **Receiver** (`Light`, `GarageDoor`) - Contains business logic and performs actual work
5. **Client** - Creates and configures command objects

## Usage Example

### Basic Remote Control
```typescript
// Command interface
interface Command {
    execute(): void;
    undo(): void;
}

// Receiver - contains business logic
class Light {
    private isOn: boolean = false;

    on(): void {
        this.isOn = true;
        console.log("Light is ON");
    }

    off(): void {
        this.isOn = false;
        console.log("Light is OFF");
    }
}

// Concrete Commands
class LightOnCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

class LightOffCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

// Invoker
class RemoteControl {
    private commands: Command[] = [];
    private lastCommand: Command | null = null;

    setCommand(slot: number, command: Command): void {
        this.commands[slot] = command;
    }

    pressButton(slot: number): void {
        if (this.commands[slot]) {
            this.commands[slot].execute();
            this.lastCommand = this.commands[slot];
        }
    }

    pressUndo(): void {
        if (this.lastCommand) {
            this.lastCommand.undo();
        }
    }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(0, lightOn);
remote.setCommand(1, lightOff);

remote.pressButton(0); // Light is ON
remote.pressButton(1); // Light is OFF
remote.pressUndo();    // Light is ON (undo last command)
```

### Advanced: Macro Commands
```typescript
class MacroCommand implements Command {
    constructor(private commands: Command[]) {}

    execute(): void {
        this.commands.forEach(command => command.execute());
    }

    undo(): void {
        // Undo in reverse order
        for (let i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo();
        }
    }
}

// Create a "party mode" macro
const partyMacro = new MacroCommand([
    new LightOnCommand(livingRoomLight),
    new StereoOnCommand(stereo),
    new TVOnCommand(tv)
]);

remote.setCommand(0, partyMacro);
remote.pressButton(0); // Executes all commands
```

## When to Use

✅ **Use Command when:**
- You want to parameterize objects with operations
- You need to queue operations, schedule their execution, or execute them remotely
- You want to implement undo/redo functionality
- You need to log operations for auditing or crash recovery
- You want to support macro operations (combining multiple commands)
- You need to decouple the object that invokes the operation from the object that performs it

❌ **Don't use Command when:**
- You have simple, direct method calls without need for additional features
- The overhead of creating command objects isn't justified
- You don't need undo/redo, queuing, or logging capabilities

## Benefits

- **Single Responsibility Principle** - Decouples classes that invoke operations from classes that perform them
- **Open/Closed Principle** - Introduce new commands without breaking existing code
- **Undo/Redo Support** - Store command history and reverse operations
- **Deferred Execution** - Queue, schedule, or batch operations
- **Logging & Auditing** - Record operations for debugging or compliance
- **Macro Operations** - Combine simple commands into complex ones
- **Remote Execution** - Serialize commands for network transmission

## Implementation Patterns

### 1. Simple Command (No Undo)
```typescript
class SimpleCommand implements Command {
    constructor(private receiver: Receiver, private params: any) {}

    execute(): void {
        this.receiver.action(this.params);
    }
}
```

### 2. Command with Undo
```typescript
class UndoableCommand implements Command {
    private previousState: any;

    execute(): void {
        this.previousState = this.receiver.getState();
        this.receiver.action();
    }

    undo(): void {
        this.receiver.setState(this.previousState);
    }
}
```

### 3. Command with Smart Undo
```typescript
class SmartUndoCommand implements Command {
    execute(): void {
        this.receiver.performAction();
    }

    undo(): void {
        this.receiver.performReverseAction(); // Logical inverse
    }
}
```

### 4. Null Object Command
```typescript
class NoCommand implements Command {
    execute(): void {
        // Do nothing - prevents null checks
    }

    undo(): void {
        // Do nothing
    }
}
```

## Advanced Features

### Command Queue
```typescript
class CommandQueue {
    private commands: Command[] = [];

    add(command: Command): void {
        this.commands.push(command);
    }

    executeAll(): void {
        this.commands.forEach(command => command.execute());
        this.commands = []; // Clear queue
    }
}
```

### Command History with Undo Stack
```typescript
class CommandHistory {
    private history: Command[] = [];
    private currentIndex: number = -1;

    execute(command: Command): void {
        // Remove any commands after current index (redo history)
        this.history = this.history.slice(0, this.currentIndex + 1);

        command.execute();
        this.history.push(command);
        this.currentIndex++;
    }

    undo(): void {
        if (this.currentIndex >= 0) {
            this.history[this.currentIndex].undo();
            this.currentIndex--;
        }
    }

    redo(): void {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            this.history[this.currentIndex].execute();
        }
    }
}
```

## Related Patterns

- **Chain of Responsibility** - Both deal with request handling; Command encapsulates requests as objects
- **Memento** - Often used together for undo functionality; Memento stores state, Command stores operations
- **Strategy** - Similar structure but different intent; Strategy focuses on algorithms, Command on operations
- **Observer** - Commands can be used to implement the Observer pattern's notification mechanism

## Common Use Cases

### GUI Applications
- Button actions, menu items, keyboard shortcuts
- Undo/redo functionality in editors
- Macro recording and playback

### System Operations
- Database transactions
- File operations with rollback capability
- API request queuing and retry logic

### Game Development
- Player action recording and replay
- Turn-based game systems
- Animation sequencing

### Home Automation
- Device control with scheduling
- Scene activation (multiple device operations)
- Voice command processing

## Best Practices

1. **Keep Commands Simple** - Each command should encapsulate one operation
2. **Implement Null Object** - Use NoCommand pattern to avoid null checks
3. **Consider Memory Usage** - For undo functionality, balance between storing state vs. storing reverse operations
4. **Make Commands Immutable** - Initialize all parameters in constructor
5. **Handle Exceptions** - Consider what happens if a command fails during execution or undo
6. **Provide Clear Names** - Command class names should clearly indicate their purpose

## Common Pitfalls

❌ **Memory Leaks** - Storing too many commands in history without cleanup
❌ **Complex Undo Logic** - Making undo operations too complicated or unreliable
❌ **Overuse** - Using Command for simple operations that don't need the extra abstraction
❌ **State Corruption** - Not properly handling partial failures in macro commands

## Pattern Type
**Behavioral Pattern** - Focuses on communication between objects and the assignment of responsibilities.
