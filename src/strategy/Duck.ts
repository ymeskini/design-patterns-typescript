import { FlyBehavior } from "./FlyBehavior";
import { QuackBehavior } from "./QuackBehavior";

export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    constructor() {}

    abstract display(): void;

    performQuack(): void {
        this.quackBehavior.quack();
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

    setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }

    setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }

    swim(): void {
        console.log("All ducks float, even decoys!");
    }
}

