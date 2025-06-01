# Design Patterns in TypeScript

Ref. [Refactoring Guru](https://refactoring.guru/design-patterns/catalog)

## Available Patterns

### Creational Patterns
These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

- **[Abstract Factory](./src/creational/abstract-factory/)** - Create families of related objects without specifying their concrete classes
- **[Builder](./src/creational/builder/)** - Construct complex objects step by step
- **[Factory Method](./src/creational/factory/)** - Create objects without specifying exact classes
- **[Prototype](./src/creational/prototype/)** - Create objects by copying existing instances
- **[Singleton](./src/creational/singleton/)** - Ensure only one instance exists

### Structural Patterns
These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

- **[Adapter](./src/structural/adapter/)** - Make incompatible interfaces work together
- **[Bridge](./src/structural/bridge/)** - Separate abstraction from implementation
- **[Composite](./src/structural/composite/)** - Compose objects into tree structures
- **[Decorator](./src/structural/decorator/)** - Add behavior to objects dynamically
- **[Facade](./src/structural/facade/)** - Provide simplified interface to complex subsystem
- **[Flyweight](./src/structural/flyweight/)** - Share common parts of objects efficiently
- **[Proxy](./src/structural/proxy/)** - Provide placeholder/surrogate for another object

### Behavioral Patterns
These patterns are concerned with algorithms and the assignment of responsibilities between objects.

- **[Command](./src/behavioral/command/)** - Encapsulate requests as objects
- **[Iterator](./src/behavioral/iterator/)** - Access elements sequentially without exposing structure
- **[Observer](./src/behavioral/observer/)** - Define one-to-many dependency between objects
- **[State](./src/behavioral/state/)** - Allow object to change behavior when internal state changes
- **[Strategy](./src/behavioral/strategy/)** - Define family of algorithms and make them interchangeable
- **[Template Method](./src/behavioral/templatemethod/)** - Define skeleton of algorithm, let subclasses override steps

## Getting Started

### Installation
```bash
npm install
```

### Running Tests
```bash
npm test
```

### Running Individual Patterns
Each pattern includes a demo file that can be run directly:

```bash
# Run strategy pattern demo
npx ts-node src/behavioral/strategy/miniDuckSimulator.ts

# Run adapter pattern demo
npx ts-node src/structural/adapter/AdapterDemo.ts

# Run bridge pattern demo
npx ts-node src/structural/bridge/BridgeDemo.ts

# Run command pattern demo
npx ts-node src/behavioral/command/CommandDemo.ts

# Run flyweight pattern demo
npx ts-node src/structural/flyweight/FlyweightDemo.ts

# Run iterator pattern demo
npx ts-node src/behavioral/iterator/IteratorDemo.ts

# Run prototype pattern demo
npx ts-node src/creational/prototype/PrototypeDemo.ts

# Run proxy pattern demo
npx ts-node src/structural/proxy/ProxyDemo.ts

# Run template method pattern demo
npx ts-node src/behavioral/templatemethod/TemplateMethodDemo.ts
```

## Project Structure
```
src/
├── creational/       # Creational patterns
│   ├── builder/      # Builder pattern implementation
│   ├── factory/      # Factory pattern implementation
│   ├── prototype/    # Prototype pattern implementation
│   └── singleton/    # Singleton pattern implementation
├── structural/       # Structural patterns
│   ├── adapter/      # Adapter pattern implementation
│   ├── bridge/       # Bridge pattern implementation
│   ├── composite/    # Composite pattern implementation
│   ├── decorator/    # Decorator pattern implementation
│   ├── facade/       # Facade pattern implementation
│   ├── flyweight/    # Flyweight pattern implementation
│   └── proxy/        # Proxy pattern implementation
└── behavioral/       # Behavioral patterns
    ├── command/      # Command pattern implementation
    ├── iterator/     # Iterator pattern implementation
    ├── observer/     # Observer pattern implementation
    ├── state/        # State pattern implementation
    ├── strategy/     # Strategy pattern implementation
    └── templatemethod/ # Template Method pattern implementation
```

## Key Features
- **TypeScript Implementation**: Full type safety and modern JavaScript features
- **Comprehensive Tests**: Jest tests for all patterns
- **Real-world Examples**: Practical examples demonstrating pattern usage
- **Clean Code**: Well-structured, documented, and maintainable code
- **Pattern Documentation**: README files explaining each pattern with examples
