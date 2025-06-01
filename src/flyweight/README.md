# Flyweight Pattern

## Intent
Use sharing to support large numbers of fine-grained objects efficiently.

## Structure
- **Flyweight**: Declares an interface through which flyweights can receive and act on extrinsic state
- **Concrete Flyweight**: Implements the Flyweight interface and stores intrinsic state
- **Flyweight Factory**: Creates and manages flyweight objects, ensuring they are shared
- **Context**: Contains extrinsic state and references to flyweight objects

## When to Use
- An application uses a large number of objects
- Storage costs are high because of the sheer quantity of objects
- Most object state can be made extrinsic
- Groups of objects may be replaced by relatively few shared objects once extrinsic state is removed

## Example
This implementation demonstrates a tree rendering system that shares tree objects:

- `Tree` (Flyweight) - Interface for tree objects
- `ConiferTree`, `DeciduousTree` (Concrete Flyweights) - Shared tree implementations
- `TreeFactory` (Flyweight Factory) - Manages and shares tree instances
- Location coordinates (Extrinsic State) - Stored separately from flyweights

## Key Benefits
- Reduces memory usage through object sharing
- Improves performance when dealing with large numbers of objects
- Separates intrinsic and extrinsic state

## Demo
Run the demo with:
```bash
npx ts-node src/flyweight/FlyweightDemo.ts
```
