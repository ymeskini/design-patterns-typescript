import { Tree, isWithinRange } from './Tree';

/**
 * Concrete Flyweight - Deciduous Tree
 * Stores intrinsic state (tree type) and implements operations
 */
export class DeciduousTree implements Tree {
    // Complex trunk, branch, leaf graphic data would be stored here
    // This represents the intrinsic state shared among all deciduous trees

    public display(x: number, y: number): void {
        console.log(`Deciduous tree is located at ${x}, ${y}`);
        if (!isWithinRange(new Date())) {
            console.log('The tree currently has no leaves');
        }
    }
}
