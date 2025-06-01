import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class TurkeyAdapter implements Duck {
    private turkey: Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
