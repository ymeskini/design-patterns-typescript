import { TV } from './TV';
import { TVFactory } from './TVFactory';

/**
 * Bridge Pattern - Abstraction
 * Base remote control class that uses the TV interface
 */
export abstract class RemoteControl {
    protected tv?: TV;
    protected tvFactory: TVFactory;

    constructor(tvFactory: TVFactory) {
        this.tvFactory = tvFactory;
    }

    public on(): void {
        if (this.tv) {
            this.tv.on();
        }
    }

    public off(): void {
        if (this.tv) {
            this.tv.off();
        }
    }

    public setChannel(channel: number): void {
        if (this.tv) {
            this.tv.tuneChannel(channel);
        }
    }

    public getChannel(): number {
        return this.tv ? this.tv.getChannel() : 0;
    }

    public setTV(type: string): void {
        try {
            this.tv = this.tvFactory.getTV(type);
        } catch (error) {
            console.log(error);
        }
    }
}
