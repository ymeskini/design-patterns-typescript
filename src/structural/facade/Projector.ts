export class Projector {
    private description: string;

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    wideScreenMode(): void {
        console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
    }

    tvMode(): void {
        console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
    }

    toString(): string {
        return this.description;
    }
}
