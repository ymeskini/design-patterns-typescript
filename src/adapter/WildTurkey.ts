import { Turkey } from "./Turkey";

export class WildTurkey implements Turkey {
    gobble(): void {
        console.log("Gobble gobble");
    }

    fly(): void {
        console.log("I'm flying a short distance");
    }
}
