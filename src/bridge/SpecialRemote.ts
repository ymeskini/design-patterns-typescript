import { RemoteControl } from './RemoteControl';
import { TVFactory } from './TVFactory';

/**
 * Refined Abstraction - Special Remote
 */
export class SpecialRemote extends RemoteControl {
    constructor(tvFactory: TVFactory) {
        super(tvFactory);
    }

    public up(): void {
        const channel = this.getChannel();
        this.setChannel(channel + 1);
    }

    public down(): void {
        const channel = this.getChannel();
        this.setChannel(channel - 1);
    }
}
