import { Monster } from './Monster';

/**
 * Concrete Prototype - Drakon (another type of dragon)
 * Demonstrates different implementation of the clone operation
 */
export class Drakon extends Monster {
    private poisonLevel: number;

    constructor(name: string, poisonLevel: number = 5) {
        super(name);
        this.hasWings = true;
        this.canBreatheFire = false;
        this.numHeads = 3;
        this.poisonLevel = poisonLevel;
    }

    // Implement the copy method with specific Drakon properties
    public copy(): Monster {
        const drakonCopy = new Drakon(this.name, this.poisonLevel);
        drakonCopy.eatsChildren = this.eatsChildren;
        drakonCopy.hasWings = this.hasWings;
        drakonCopy.numHeads = this.numHeads;
        drakonCopy.canBreatheFire = this.canBreatheFire;
        return drakonCopy;
    }

    public spitPoison(): void {
        console.log(`${this.name} spits poison with level ${this.poisonLevel}!`);
    }

    public getPoisonLevel(): number {
        return this.poisonLevel;
    }

    public setPoisonLevel(level: number): void {
        this.poisonLevel = level;
    }
}
