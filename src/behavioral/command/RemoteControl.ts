import { Command } from "./Command";
import { NoCommand } from "./NoCommand";

// This is the invoker
export class RemoteControl {
    private onCommands: Command[] = [];
    private offCommands: Command[] = [];

    constructor() {
        const noCommand = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
    }

    offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
    }

    toString(): string {
        const stringBuff: string[] = [];
        stringBuff.push("\n------ Remote Control -------\n");
        for (let i = 0; i < this.onCommands.length; i++) {
            stringBuff.push(`[slot ${i}] ${this.onCommands[i].constructor.name}    ${this.offCommands[i].constructor.name}\n`);
        }
        return stringBuff.join("");
    }
}
