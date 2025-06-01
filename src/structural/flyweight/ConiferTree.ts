import { Tree } from './Tree';

/**
 * Concrete Flyweight - Conifer Tree
 * Stores intrinsic state (tree type) and implements operations
 */
export class ConiferTree implements Tree {
    // Complex trunk, branch, needle graphic data would be stored here
    // This represents the intrinsic state shared among all conifer trees

    public display(x: number, y: number): void {
        console.log(`Conifer tree is located at ${x}, ${y}`);
    }
}
