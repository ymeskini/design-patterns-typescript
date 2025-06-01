import { ChocolateBoiler } from "./ChocolateBoiler";
import { ThreadSafeSingleton } from "./ThreadSafeSingleton";

export function singletonPatternDemo(): void {
    console.log("=== Singleton Pattern Demo ===\n");

    // Chocolate Boiler Example
    console.log("--- Chocolate Boiler ---");
    const boiler1 = ChocolateBoiler.getInstance();
    const boiler2 = ChocolateBoiler.getInstance();

    console.log(`Are both instances the same? ${boiler1 === boiler2}`);

    boiler1.fill();
    boiler1.boil();
    boiler1.drain();

    console.log("\n--- Thread Safe Singleton ---");
    const singleton1 = ThreadSafeSingleton.getInstance();
    const singleton2 = ThreadSafeSingleton.getInstance();

    console.log(`Are both instances the same? ${singleton1 === singleton2}`);
    console.log(singleton1.getDescription());
}

// Run the demo if this file is executed directly
if (require.main === module) {
    singletonPatternDemo();
}
