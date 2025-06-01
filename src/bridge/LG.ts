import { TV } from './TV';

/**
 * Concrete Implementor - LG TV
 */
export class LG extends TV {
    private channel: number = 1;

    public on(): void {
        console.log('Turning on the LG TV');
    }

    public off(): void {
        console.log('Turning off the LG TV');
    }

    public tuneChannel(channel: number): void {
        this.channel = channel;
        console.log(`Set the LG TV Channel to ${this.channel}`);
    }

    public getChannel(): number {
        return this.channel;
    }
}
