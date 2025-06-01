# Adapter Pattern

The Adapter Pattern allows incompatible interfaces to work together. It acts as a wrapper between two objects, catching calls for one object and transforming them to format and interface recognizable by the second object.

## Structure

- **Duck**: The target interface that clients expect to work with
- **Turkey**: The existing interface that needs adapting
- **TurkeyAdapter**: The adapter that makes Turkey compatible with Duck interface
- **MallardDuck**: A concrete implementation of Duck
- **WildTurkey**: A concrete implementation of Turkey

## Key Benefits

1. **Interface Compatibility**: Allows existing classes to work with others without modifying their source code
2. **Reusability**: Enables reuse of existing functionality with different interfaces
3. **Separation of Concerns**: Business logic is separated from interface conversion logic

## Usage

```typescript
import { Duck } from "./Duck";
import { MallardDuck } from "./MallardDuck";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

// Use a regular duck
const duck: Duck = new MallardDuck();
duck.quack(); // "Quack"
duck.fly();   // "I'm flying"

// Adapt a turkey to work as a duck
const turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(turkey);
turkeyAdapter.quack(); // "Gobble gobble" (adapted)
turkeyAdapter.fly();   // Flies 5 times (adapted behavior)
```

## Pattern Type
**Structural Pattern** - Deals with object composition and typically identify simple ways to realize relationships between different objects.
