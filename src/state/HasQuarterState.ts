import { State } from "./State";
import { GumballMachine } from "./GumballMachine";

export class HasQuarterState implements State {
    private gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        console.log("You can't insert another quarter");
    }

    ejectQuarter(): void {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    turnCrank(): void {
        console.log("You turned...");
        this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }

    dispense(): void {
        console.log("No gumball dispensed");
    }

    refill(): void {
        // No action needed
    }

    toString(): string {
        return "waiting for turn of crank";
    }
}
