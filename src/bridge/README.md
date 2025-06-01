# Bridge Pattern

## Intent
Decouple an abstraction from its implementation so that the two can vary independently.

## Structure
- **Abstraction**: Defines the abstraction's interface and maintains a reference to an object of type Implementor
- **Refined Abstraction**: Extends the interface defined by Abstraction
- **Implementor**: Defines the interface for implementation classes
- **Concrete Implementor**: Implements the Implementor interface

## When to Use
- You want to avoid a permanent binding between an abstraction and its implementation
- Both the abstractions and their implementations should be extensible by subclassing
- Changes in the implementation of an abstraction should have no impact on clients
- You want to share an implementation among multiple objects

## Example
This implementation demonstrates a remote control system that can work with different TV brands:

- `RemoteControl` (Abstraction) - Base remote control
- `GenericRemote`, `SpecialRemote` (Refined Abstractions) - Different remote types
- `TV` (Implementor) - TV interface
- `Sony`, `LG` (Concrete Implementors) - Different TV implementations

## Key Benefits
- Separates interface from implementation
- Improved extensibility
- Hiding implementation details from clients
- Platform independence

## Demo
Run the demo with:
```bash
npx ts-node src/bridge/BridgeDemo.ts
```
