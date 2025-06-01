# Chain of Responsibility Pattern

## Overview

The Chain of Responsibility pattern lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

## Structure

- **Handler**: Abstract class that defines the interface for handling requests and contains a reference to the next handler in the chain
- **ConcreteHandlers**: Specific handlers that either process the request or pass it along the chain

## Key Benefits

- **Decoupling**: The sender of a request is decoupled from its receivers
- **Flexibility**: You can add or remove handlers dynamically
- **Responsibility**: Each handler has a single responsibility

## Example

In this implementation:
- `MonkeyHandler` handles "Banana" requests
- `SquirrelHandler` handles "Nut" requests
- `DogHandler` handles "MeatBall" requests

Requests are passed through the chain until a handler can process them, or they reach the end unhandled.

## Usage

```typescript
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

// Set up the chain
monkey.setNext(squirrel).setNext(dog);

// Process requests
const result = monkey.handle('Banana'); // "Monkey: I'll eat the Banana"
```

## When to Use

- When you want to give more than one object a chance to handle a request
- When you want to issue a request to one of several objects without specifying the receiver explicitly
- When the set of objects that can handle a request should be specified dynamically
