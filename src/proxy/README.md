# Proxy Pattern

## Intent
Provide a placeholder or surrogate for another object to control access to it.

## Structure
- **Subject**: Defines the common interface for RealSubject and Proxy
- **RealSubject**: The real object that the proxy represents
- **Proxy**: Maintains a reference to RealSubject and controls access to it

## Types of Proxies
1. **Virtual Proxy**: Controls access to expensive objects (lazy loading)
2. **Protection Proxy**: Controls access based on permissions
3. **Remote Proxy**: Controls access to remote objects
4. **Smart Reference**: Performs additional actions when an object is accessed

## When to Use
- You need lazy loading of expensive objects
- You need access control to objects
- You need to add functionality when accessing objects
- You need to represent remote objects locally

## Example
This implementation demonstrates two types of proxies:

### Virtual Proxy (Lazy Loading)
- `Image` (Subject) - Common interface
- `RealImage` (RealSubject) - Expensive image object
- `ImageProxy` (Proxy) - Controls loading of real image

### Protection Proxy (Access Control)
- `BankAccount` (Subject) - Bank account interface
- `RealBankAccount` (RealSubject) - Actual bank account
- `BankAccountProxy` (Proxy) - Controls access based on user role

## Key Benefits
- Controls access to objects
- Provides lazy loading capabilities
- Adds security and access control
- Can add caching and logging

## Demo
Run the demo with:
```bash
npx ts-node src/proxy/ProxyDemo.ts
```
