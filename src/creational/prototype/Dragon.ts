import { Monster } from './Monster';

/**
 * Concrete Prototype - Dragon
 * Implements the clone operation for creating copies of itself
 */
export class Dragon extends Monster {

    constructor(name: string, hasWings: boolean) {
        super(name);
        this.hasWings = hasWings;
        this.canBreatheFire = true;
    }

    // Implement the copy method for deep cloning
    public copy(): Monster {
        const dragonCopy = new Dragon(this.name, this.hasWings);
        dragonCopy.eatsChildren = this.eatsChildren;
        dragonCopy.numHeads = this.numHeads;
        dragonCopy.canBreatheFire = this.canBreatheFire;
        return dragonCopy;
    }

    public roar(): void {
        console.log(`${this.name} roars loudly!`);
    }
}
