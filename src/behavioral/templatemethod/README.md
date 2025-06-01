# Template Method Pattern

## Intent
Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

## Structure
- **Abstract Class**: Defines the template method and primitive operations
- **Concrete Class**: Implements the primitive operations to carry out subclass-specific steps

## Components
- **Template Method**: Defines the algorithm skeleton by calling primitive operations
- **Primitive Operations**: Abstract methods that must be implemented by subclasses
- **Hook Operations**: Optional methods that can be overridden by subclasses

## When to Use
- You want to implement the invariant parts of an algorithm once and let subclasses implement varying behavior
- You want to control how subclasses extend functionality
- You want to factor out common behavior among subclasses

## Example
This implementation demonstrates a beverage preparation system:

### Basic Template Method
- `CaffeineBeverage` (Abstract Class) - Defines the preparation algorithm
- `Coffee`, `Tea` (Concrete Classes) - Implement specific preparation steps

### Template Method with Hooks
- `CaffeineBeverageWithHook` (Abstract Class) - Includes optional steps
- `CoffeeWithHook`, `TeaWithHook` (Concrete Classes) - Can customize optional behavior

## Key Benefits
- Code reuse through inheritance
- Control over algorithm extension
- Inversion of control ("Hollywood Principle")
- Easy to add new variations

## Demo
Run the demo with:
```bash
npx ts-node src/templatemethod/TemplateMethodDemo.ts
```
