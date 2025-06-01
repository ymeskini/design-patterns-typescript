import { Command } from "./Command";

// This is the invoker
export class SimpleRemoteControl {
    private slot?: Command;

    constructor() {}

    setCommand(command: Command): void {
        this.slot = command;
    }

    buttonWasPressed(): void {
        if (this.slot) {
            this.slot.execute();
        }
    }
}
