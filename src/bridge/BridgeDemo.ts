import { TVFactory } from './TVFactory';
import { SpecialRemote } from './SpecialRemote';
import { GenericRemote } from './GenericRemote';

/**
 * Bridge Pattern Demo
 * Demonstrates the separation of abstraction (remote) from implementation (TV)
 */
export class BridgeDemo {
    public static run(): void {
        const tvFactory = new TVFactory();

        // Test with Sony TV and Special Remote
        const remoteSony = new SpecialRemote(tvFactory);
        console.log('Connect your remote to the TV');
        remoteSony.setTV('Sony');
        remoteSony.on();
        remoteSony.up();
        remoteSony.down();
        remoteSony.off();

        console.log();

        // Test with LG TV and Generic Remote
        const remoteLG = new GenericRemote(tvFactory);
        console.log('Connect your remote to the TV');
        remoteLG.setTV('LG');
        remoteLG.on();
        remoteLG.nextChannel();
        remoteLG.prevChannel();
        remoteLG.off();
    }
}

// Run the demo if this file is executed directly
if (require.main === module) {
    BridgeDemo.run();
}
