import { Monster } from "./Monster";
import { Dragon } from "./Dragon";
import { Drakon } from "./Drakon";
import { Prototype, ConcretePrototype1, ConcretePrototype2 } from "./Prototype";

describe("Prototype Pattern", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("Monster Prototypes", () => {
        test("Dragon should clone correctly", () => {
            const originalDragon = new Dragon("Smaug", true);
            const clonedDragon = originalDragon.copy() as Dragon;

            expect(clonedDragon).toBeInstanceOf(Dragon);
            expect(clonedDragon).not.toBe(originalDragon); // Different instances
            expect(clonedDragon.getName()).toBe("Smaug");
            expect(clonedDragon.getCanBreatheFire()).toBe(true);
        });

        test("Drakon should clone correctly", () => {
            const originalDrakon = new Drakon("Hydra", 5);
            const clonedDrakon = originalDrakon.copy() as Drakon;

            expect(clonedDrakon).toBeInstanceOf(Drakon);
            expect(clonedDrakon).not.toBe(originalDrakon); // Different instances
            expect(clonedDrakon.getName()).toBe("Hydra");
            expect(clonedDrakon.getPoisonLevel()).toBe(5);
        });

        test("Cloned monsters should be independent", () => {
            const originalDragon = new Dragon("Original Dragon", false);
            const clonedDragon = originalDragon.copy() as Dragon;

            // Modify the clone
            clonedDragon.setName("Cloned Dragon");
            clonedDragon.setCanBreatheFire(false);

            // Original should remain unchanged
            expect(originalDragon.getName()).toBe("Original Dragon");
            expect(originalDragon.getCanBreatheFire()).toBe(true); // Dragons always can breathe fire initially

            // Clone should have new values
            expect(clonedDragon.getName()).toBe("Cloned Dragon");
            expect(clonedDragon.getCanBreatheFire()).toBe(false);
        });

        test("Dragon toString should work correctly", () => {
            const dragon = new Dragon("Fafnir", true);
            expect(dragon.toString()).toBe("I'm a monster named Fafnir with 1 head(s). I can breathe fire. I eat children. I have wings. ");

            dragon.setCanBreatheFire(false);
            expect(dragon.toString()).toBe("I'm a monster named Fafnir with 1 head(s). I eat children. I have wings. ");
        });

        test("Drakon toString should work correctly", () => {
            const drakon = new Drakon("Toxic Beast", 8);
            expect(drakon.toString()).toBe("I'm a monster named Toxic Beast with 3 head(s). I eat children. I have wings. ");

            drakon.setPoisonLevel(3);
            expect(drakon.toString()).toBe("I'm a monster named Toxic Beast with 3 head(s). I eat children. I have wings. ");
        });

        test("Drakon poison level modification should work", () => {
            const drakon = new Drakon("Test Drakon", 1);
            expect(drakon.getPoisonLevel()).toBe(1);

            drakon.setPoisonLevel(10);
            expect(drakon.getPoisonLevel()).toBe(10);
        });
    });

    describe("Generic Prototypes", () => {
        test("ConcretePrototype1 should clone correctly", () => {
            const original = new ConcretePrototype1();
            original.setValue("Test Value");

            const clone = original.copy() as ConcretePrototype1;

            expect(clone).toBeInstanceOf(ConcretePrototype1);
            expect(clone).not.toBe(original); // Different instances
            expect(clone.getValue()).toBe("Test Value");
        });

        test("ConcretePrototype2 should clone correctly with deep copy", () => {
            const original = new ConcretePrototype2();
            original.setData([1, 2, 3, 4, 5]);

            const clone = original.copy() as ConcretePrototype2;

            expect(clone).toBeInstanceOf(ConcretePrototype2);
            expect(clone).not.toBe(original); // Different instances
            expect(clone.getData()).toEqual([1, 2, 3, 4, 5]);
            expect(clone.getData()).not.toBe(original.getData()); // Different arrays
        });

        test("ConcretePrototype1 clones should be independent", () => {
            const original = new ConcretePrototype1();
            original.setValue("Original");

            const clone = original.copy() as ConcretePrototype1;
            clone.setValue("Modified Clone");

            expect(original.getValue()).toBe("Original");
            expect(clone.getValue()).toBe("Modified Clone");
        });

        test("ConcretePrototype2 clones should be independent (deep copy)", () => {
            const original = new ConcretePrototype2();
            original.setData([10, 20, 30]);

            const clone = original.copy() as ConcretePrototype2;
            clone.setData([40, 50, 60]);

            expect(original.getData()).toEqual([10, 20, 30]);
            expect(clone.getData()).toEqual([40, 50, 60]);
        });

        test("ConcretePrototype2 should perform deep copy of array", () => {
            const original = new ConcretePrototype2();
            original.setData([1, 2, 3]);

            const clone = original.copy() as ConcretePrototype2;

            // Modify the clone's array
            clone.getData().push(4);

            // Original should be unaffected
            expect(original.getData()).toEqual([1, 2, 3]);
            expect(clone.getData()).toEqual([1, 2, 3, 4]);
        });
    });

    describe("Prototype Interface Compliance", () => {
        test("All prototypes should implement copy method", () => {
            const dragon = new Dragon("Test", true);
            const drakon = new Drakon("Test", 1);
            const proto1 = new ConcretePrototype1();
            const proto2 = new ConcretePrototype2();

            expect(typeof dragon.copy).toBe("function");
            expect(typeof drakon.copy).toBe("function");
            expect(typeof proto1.copy).toBe("function");
            expect(typeof proto2.copy).toBe("function");
        });

        test("Copy method should return Prototype interface", () => {
            const prototypes: Prototype[] = [
                new ConcretePrototype1(),
                new ConcretePrototype2()
            ];

            prototypes.forEach(prototype => {
                const copy = prototype.copy();
                expect(copy).toHaveProperty("copy");
                expect(typeof copy.copy).toBe("function");
            });
        });
    });

    describe("Polymorphic Usage", () => {
        test("Should work with Monster array", () => {
            const monsters: Monster[] = [
                new Dragon("Dragon1", true),
                new Drakon("Drakon1", 5)
            ];

            const clonedMonsters = monsters.map(monster => monster.copy());

            expect(clonedMonsters).toHaveLength(2);
            expect(clonedMonsters[0]).toBeInstanceOf(Dragon);
            expect(clonedMonsters[1]).toBeInstanceOf(Drakon);

            // Each clone should be different from original
            clonedMonsters.forEach((clone, index) => {
                expect(clone).not.toBe(monsters[index]);
            });
        });

        test("Should work with Prototype array", () => {
            const prototypes: Prototype[] = [
                new ConcretePrototype1(),
                new ConcretePrototype2(),
                new Dragon("PrototypeDragon", false)
            ];

            const clones = prototypes.map(prototype => prototype.copy());

            expect(clones).toHaveLength(3);
            expect(clones[0]).toBeInstanceOf(ConcretePrototype1);
            expect(clones[1]).toBeInstanceOf(ConcretePrototype2);
            expect(clones[2]).toBeInstanceOf(Dragon);

            // Each clone should be different from original
            clones.forEach((clone, index) => {
                expect(clone).not.toBe(prototypes[index]);
            });
        });
    });
});
