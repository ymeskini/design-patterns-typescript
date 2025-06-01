# Iterator Pattern

## Intent
Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

## Structure
- **Iterator**: Defines an interface for accessing and traversing elements
- **Concrete Iterator**: Implements the Iterator interface and keeps track of current position
- **Aggregate**: Defines an interface for creating an Iterator object
- **Concrete Aggregate**: Implements the Iterator creation interface and returns an instance of the proper ConcreteIterator

## When to Use
- You want to access an aggregate object's contents without exposing its internal representation
- You want to support multiple traversals of aggregate objects
- You want to provide a uniform interface for traversing different aggregate structures

## Example
This implementation demonstrates a menu system with different storage mechanisms:

- `Iterator<T>` (Iterator) - Generic iterator interface
- `DinerMenuIterator`, `PancakeHouseMenuIterator` (Concrete Iterators) - Different iterator implementations
- `Menu` (Aggregate) - Menu interface
- `DinerMenu` (array-based), `PancakeHouseMenu` (list-based) (Concrete Aggregates) - Different menu implementations

## Key Benefits
- Uniform interface for traversing different collections
- Supports variations in traversal
- Simplifies the aggregate interface
- Multiple traversals can be active on the same aggregate

## Demo
Run the demo with:
```bash
npx ts-node src/iterator/IteratorDemo.ts
```
