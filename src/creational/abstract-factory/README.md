# Abstract Factory Pattern

## Intent
The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

## Problem
When you need to create families of products that are related or dependent on each other, and you want to ensure that products from the same family are used together.

## Solution
The Abstract Factory pattern suggests that you explicitly declare interfaces for each distinct product of the product family. Then you can make all variants of products follow those interfaces. The next move is to declare the Abstract Factory—an interface with a list of creation methods for all products that are part of the product family.

## Structure
- **Abstract Factory**: Declares a set of methods for creating each of the abstract product objects.
- **Concrete Factory**: Implements the operations to create concrete product objects.
- **Abstract Product**: Declares an interface for a type of product object.
- **Concrete Product**: Implements the abstract product interface.
- **Client**: Uses only interfaces declared by Abstract Factory and Abstract Product classes.

## Example
In this implementation, we create a GUI factory that can produce different families of UI elements (Windows and Mac styles). Each factory creates buttons and checkboxes that are consistent with their respective platforms.

### Key Components:
- `GUIFactory`: Abstract factory interface
- `WindowsFactory` & `MacFactory`: Concrete factories
- `Button` & `Checkbox`: Abstract products
- `WindowsButton`, `MacButton`, `WindowsCheckbox`, `MacCheckbox`: Concrete products
- `Application`: Client that uses the factory

## Benefits
- **Consistency**: Ensures that products from the same family are used together
- **Isolation**: Isolates concrete classes from the client
- **Easy to exchange**: Easy to exchange product families
- **Promotes consistency**: When products in a family are designed to work together

## Drawbacks
- **Complexity**: Can be complex if you have many product families
- **Extensibility**: Adding new products requires extending all factories

## When to Use
- Your system should be independent of how its products are created
- Your system should be configured with one of multiple families of products
- A family of related product objects is designed to be used together
- You want to provide a class library of products, and you want to reveal just their interfaces, not their implementations

## Example Usage
```typescript
// Create factory based on configuration
const factory = getFactory('windows'); // or 'mac'

// Create application with the factory
const app = new Application(factory);

// Use the application
app.paint();
app.interact();
```

This ensures that all UI elements created will be consistent with the chosen platform style.
