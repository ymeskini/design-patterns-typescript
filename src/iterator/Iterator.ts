/**
 * Iterator Pattern - Iterator Interface
 * Defines the interface for accessing and traversing elements
 */
export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}
