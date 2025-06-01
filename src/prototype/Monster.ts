/**
 * Prototype Pattern - Abstract prototype
 * Declares an interface for cloning itself
 */
export abstract class Monster {
    protected eatsChildren: boolean = true;
    protected hasWings: boolean = false;
    protected numHeads: number = 1;
    protected canBreatheFire: boolean = false;
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public spitPoison(): void {
        // Default implementation does nothing
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getCanBreatheFire(): boolean {
        return this.canBreatheFire;
    }

    public setCanBreatheFire(canBreatheFire: boolean): void {
        this.canBreatheFire = canBreatheFire;
    }

    // Abstract clone method - must be implemented by concrete classes
    public abstract copy(): Monster;

    public toString(): string {
        let description = `I'm a monster named ${this.name} with ${this.numHeads} head(s). `;

        if (this.canBreatheFire) {
            description += 'I can breathe fire. ';
        }
        if (this.eatsChildren) {
            description += 'I eat children. ';
        }
        if (this.hasWings) {
            description += 'I have wings. ';
        }

        return description;
    }
}
