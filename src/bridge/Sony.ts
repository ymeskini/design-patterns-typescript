import { TV } from './TV';

/**
 * Concrete Implementor - Sony TV
 */
export class Sony extends TV {
    private station: number = 0;

    public on(): void {
        console.log('Turning on the Sony TV');
    }

    public off(): void {
        console.log('Turning off the Sony TV');
    }

    public tuneChannel(channel: number): void {
        this.station = channel;
        console.log(`Set the Sony TV station to ${this.station}`);
    }

    public getChannel(): number {
        return this.station;
    }
}
