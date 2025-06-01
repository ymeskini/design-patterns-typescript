import { MallardDuck } from "./MallardDuck";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

describe("Adapter Pattern", () => {
    test("Duck should quack and fly", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const duck = new MallardDuck();
        duck.quack();
        duck.fly();

        expect(consoleSpy).toHaveBeenCalledWith("Quack");
        expect(consoleSpy).toHaveBeenCalledWith("I'm flying");

        consoleSpy.mockRestore();
    });

    test("Turkey should gobble and fly short distance", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const turkey = new WildTurkey();
        turkey.gobble();
        turkey.fly();

        expect(consoleSpy).toHaveBeenCalledWith("Gobble gobble");
        expect(consoleSpy).toHaveBeenCalledWith("I'm flying a short distance");

        consoleSpy.mockRestore();
    });

    test("TurkeyAdapter should adapt turkey to duck interface", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const turkey = new WildTurkey();
        const adapter = new TurkeyAdapter(turkey);

        adapter.quack(); // Should call turkey.gobble()
        adapter.fly();   // Should call turkey.fly() 5 times

        expect(consoleSpy).toHaveBeenCalledWith("Gobble gobble");
        expect(consoleSpy).toHaveBeenCalledTimes(6); // 1 gobble + 5 fly calls

        consoleSpy.mockRestore();
    });
});
