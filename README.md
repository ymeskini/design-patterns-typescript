# Design Patterns in TypeScript

Ref. [Refactoring Guru](https://refactoring.guru/design-patterns/catalog)

## Available Patterns

### Creational Patterns
- **[Builder](./src/builder/)** - Construct complex objects step by step
- **[Factory Method](./src/factory/)** - Create objects without specifying exact classes
- **[Prototype](./src/prototype/)** - Create objects by copying existing instances
- **[Singleton](./src/singleton/)** - Ensure only one instance exists

### Structural Patterns
- **[Adapter](./src/adapter/)** - Make incompatible interfaces work together
- **[Bridge](./src/bridge/)** - Separate abstraction from implementation
- **[Composite](./src/composite/)** - Compose objects into tree structures
- **[Decorator](./src/decorator/)** - Add behavior to objects dynamically
- **[Facade](./src/facade/)** - Provide simplified interface to complex subsystem
- **[Flyweight](./src/flyweight/)** - Share common parts of objects efficiently
- **[Proxy](./src/proxy/)** - Provide placeholder/surrogate for another object

### Behavioral Patterns
- **[Command](./src/command/)** - Encapsulate requests as objects
- **[Iterator](./src/iterator/)** - Access elements sequentially without exposing structure
- **[Observer](./src/observer/)** - Define one-to-many dependency between objects
- **[State](./src/state/)** - Allow object to change behavior when internal state changes
- **[Strategy](./src/strategy/)** - Define family of algorithms and make them interchangeable
- **[Template Method](./src/templatemethod/)** - Define skeleton of algorithm, let subclasses override steps

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
npx ts-node src/strategy/miniDuckSimulator.ts

# Run adapter pattern demo
npx ts-node src/adapter/AdapterDemo.ts

# Run bridge pattern demo
npx ts-node src/bridge/BridgeDemo.ts

# Run command pattern demo
npx ts-node src/command/CommandDemo.ts

# Run flyweight pattern demo
npx ts-node src/flyweight/FlyweightDemo.ts

# Run iterator pattern demo
npx ts-node src/iterator/IteratorDemo.ts

# Run prototype pattern demo
npx ts-node src/prototype/PrototypeDemo.ts

# Run proxy pattern demo
npx ts-node src/proxy/ProxyDemo.ts

# Run template method pattern demo
npx ts-node src/templatemethod/TemplateMethodDemo.ts
```

## Project Structure
```
src/
├── adapter/          # Adapter pattern implementation
├── bridge/           # Bridge pattern implementation
├── builder/          # Builder pattern implementation
├── command/          # Command pattern implementation
├── composite/        # Composite pattern implementation
├── decorator/        # Decorator pattern implementation
├── facade/           # Facade pattern implementation
├── factory/          # Factory pattern implementation
├── flyweight/        # Flyweight pattern implementation
├── iterator/         # Iterator pattern implementation
├── observer/         # Observer pattern implementation
├── prototype/        # Prototype pattern implementation
├── proxy/            # Proxy pattern implementation
├── singleton/        # Singleton pattern implementation
├── state/            # State pattern implementation
├── strategy/         # Strategy pattern implementation
└── templatemethod/   # Template Method pattern implementation
```

## Key Features
- **TypeScript Implementation**: Full type safety and modern JavaScript features
- **Comprehensive Tests**: Jest tests for all patterns
- **Real-world Examples**: Practical examples demonstrating pattern usage
- **Clean Code**: Well-structured, documented, and maintainable code
- **Pattern Documentation**: README files explaining each pattern with examples
