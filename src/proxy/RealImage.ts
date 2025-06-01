import { Image } from './Image';

/**
 * RealSubject - The actual image that takes time/resources to load
 */
export class RealImage implements Image {
    private filename: string;
    private width: number;
    private height: number;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImageFromDisk();
    }

    private loadImageFromDisk(): void {
        console.log(`Loading image from disk: ${this.filename}`);
        // Simulate expensive loading operation
        this.simulateSlowLoading();
        this.width = 800;
        this.height = 600;
        console.log(`Image ${this.filename} loaded successfully`);
    }

    private simulateSlowLoading(): void {
        // Simulate a slow loading process
        const start = Date.now();
        while (Date.now() - start < 100) {
            // Busy wait to simulate loading time
        }
    }

    public display(): void {
        console.log(`Displaying image: ${this.filename} (${this.width}x${this.height})`);
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }
}
