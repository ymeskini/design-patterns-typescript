/**
 * Flyweight Pattern - Flyweight Interface
 * Defines operations that can be performed on flyweight objects
 */
export interface Tree {
    display(x: number, y: number): void;

    // Default method implementation for checking if tree has leaves
    isWithinRange?(date: Date): boolean;
}

/**
 * Helper function to check if date is within growing season
 */
export function isWithinRange(date: Date): boolean {
    const month = date.getMonth(); // 0-based (0 = January, 11 = December)
    return month > 1 && month < 10; // March (2) to October (9)
}
