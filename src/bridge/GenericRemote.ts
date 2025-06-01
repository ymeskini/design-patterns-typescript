import { RemoteControl } from './RemoteControl';
import { TVFactory } from './TVFactory';

/**
 * Refined Abstraction - Generic Remote
 */
export class GenericRemote extends RemoteControl {
    constructor(tvFactory: TVFactory) {
        super(tvFactory);
    }

    public nextChannel(): void {
        const channel = this.getChannel();
        this.setChannel(channel + 1);
    }

    public prevChannel(): void {
        const channel = this.getChannel();
        this.setChannel(channel - 1);
    }
}
