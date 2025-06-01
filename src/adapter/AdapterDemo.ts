import { Duck } from "./Duck";
import { MallardDuck } from "./MallardDuck";
import { Turkey } from "./Turkey";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

function testDuck(duck: Duck): void {
    duck.quack();
    duck.fly();
}

export function adapterPatternDemo(): void {
    const duck: Duck = new MallardDuck();
    const turkey: Turkey = new WildTurkey();
    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

    console.log("The Turkey says...");
    turkey.gobble();
    turkey.fly();

    console.log("\nThe Duck says...");
    testDuck(duck);

    console.log("\nThe TurkeyAdapter says...");
    testDuck(turkeyAdapter);
}

// Run the demo if this file is executed directly
if (require.main === module) {
    adapterPatternDemo();
}
