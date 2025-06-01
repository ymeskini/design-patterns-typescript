import { State } from "./State";
import { NoQuarterState } from "./NoQuarterState";
import { HasQuarterState } from "./HasQuarterState";
import { SoldState } from "./SoldState";
import { SoldOutState } from "./SoldOutState";

export class GumballMachine {
    private soldOutState: State;
    private noQuarterState: State;
    private hasQuarterState: State;
    private soldState: State;
    private state: State;
    private count: number = 0;

    constructor(numberGumballs: number) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);

        this.count = numberGumballs;
        if (numberGumballs > 0) {
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
    }

    insertQuarter(): void {
        this.state.insertQuarter();
    }

    ejectQuarter(): void {
        this.state.ejectQuarter();
    }

    turnCrank(): void {
        this.state.turnCrank();
        this.state.dispense();
    }

    releaseBall(): void {
        console.log("A gumball comes rolling out the slot...");
        if (this.count > 0) {
            this.count = this.count - 1;
        }
    }

    getCount(): number {
        return this.count;
    }

    refill(count: number): void {
        this.count += count;
        console.log(`The gumball machine was just refilled; its new count is: ${this.count}`);
        this.state.refill();
    }

    setState(state: State): void {
        this.state = state;
    }

    getSoldOutState(): State {
        return this.soldOutState;
    }

    getNoQuarterState(): State {
        return this.noQuarterState;
    }

    getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    getSoldState(): State {
        return this.soldState;
    }

    toString(): string {
        const result: string[] = [];
        result.push("\nMighty Gumball, Inc.");
        result.push("TypeScript-enabled Standing Gumball Model #2004");
        result.push(`Inventory: ${this.count} gumball${this.count !== 1 ? 's' : ''}`);
        result.push("Machine is waiting for quarter");
        return result.join('\n');
    }
}
