import { Command } from "./Command";

export class NoCommand implements Command {
    execute(): void {
        // Do nothing
    }
}
