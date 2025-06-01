import { Image } from './Image';
import { RealImage } from './RealImage';

/**
 * Proxy - Controls access to the RealImage and provides lazy loading
 */
export class ImageProxy implements Image {
    private realImage?: RealImage;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    public display(): void {
        if (!this.realImage) {
            console.log('Proxy: Creating real image...');
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }

    public getWidth(): number {
        if (!this.realImage) {
            // Return default dimensions without loading the image
            return 800;
        }
        return this.realImage.getWidth();
    }

    public getHeight(): number {
        if (!this.realImage) {
            // Return default dimensions without loading the image
            return 600;
        }
        return this.realImage.getHeight();
    }
}
