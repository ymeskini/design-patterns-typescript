# Prototype Pattern

## Intent
Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

## Structure
- **Prototype**: Declares an interface for cloning itself
- **Concrete Prototype**: Implements an operation for cloning itself
- **Client**: Creates a new object by asking a prototype to clone itself

## When to Use
- When the classes to instantiate are specified at run-time
- To avoid building a class hierarchy of factories that parallels the class hierarchy of products
- When instances of a class can have one of only a few different combinations of state
- When object creation is expensive and you want to avoid the cost

## Example
This implementation demonstrates object cloning:

### Monster Prototype System
- `Monster` (Abstract Prototype) - Defines cloning interface
- `Dragon`, `Drakon` (Concrete Prototypes) - Implement specific cloning behavior

### Generic Prototype System
- `Prototype` (Interface) - Generic cloning interface
- `ConcretePrototype1`, `ConcretePrototype2` (Concrete Prototypes) - Different prototype implementations

## Key Benefits
- Reduces the need for subclassing
- Allows adding and removing objects at runtime
- Specifies new objects by varying values
- Reduces initialization costs

## Types of Cloning
- **Shallow Copy**: Copies object references
- **Deep Copy**: Copies object values recursively

## Demo
Run the demo with:
```bash
npx ts-node src/prototype/PrototypeDemo.ts
```
