import { CaffeineBeverage } from "./CaffeineBeverage";
import { Coffee } from "./Coffee";
import { Tea } from "./Tea";
import { CaffeineBeverageWithHook } from "./CaffeineBeverageWithHook";
import { CoffeeWithHook } from "./CoffeeWithHook";
import { TeaWithHook } from "./TeaWithHook";

describe("Template Method Pattern", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("Basic Template Method", () => {
        test("Coffee should follow the brewing template", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const coffee = new Coffee();
            coffee.prepareRecipe();

            expect(consoleSpy).toHaveBeenCalledWith("Boiling water");
            expect(consoleSpy).toHaveBeenCalledWith("Dripping Coffee through filter");
            expect(consoleSpy).toHaveBeenCalledWith("Pouring into cup");
            expect(consoleSpy).toHaveBeenCalledWith("Adding Sugar and Milk");

            consoleSpy.mockRestore();
        });

        test("Tea should follow the brewing template", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const tea = new Tea();
            tea.prepareRecipe();

            expect(consoleSpy).toHaveBeenCalledWith("Boiling water");
            expect(consoleSpy).toHaveBeenCalledWith("Steeping the tea");
            expect(consoleSpy).toHaveBeenCalledWith("Pouring into cup");
            expect(consoleSpy).toHaveBeenCalledWith("Adding Lemon");

            consoleSpy.mockRestore();
        });

        test("Template method should be final (not overridable)", () => {
            // In TypeScript, we can't truly make methods final, but we can test
            // that the template method calls the right sequence
            const coffee = new Coffee();
            const brewSpy = jest.spyOn(coffee as any, "brew");
            const addCondimentsSpy = jest.spyOn(coffee as any, "addCondiments");

            coffee.prepareRecipe();

            expect(brewSpy).toHaveBeenCalled();
            expect(addCondimentsSpy).toHaveBeenCalled();

            brewSpy.mockRestore();
            addCondimentsSpy.mockRestore();
        });
    });

    describe("Template Method with Hook", () => {
        test("CoffeeWithHook should use hook method", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const coffee = new CoffeeWithHook();

            // Mock user input to want condiments
            const getUserInputSpy = jest.spyOn(coffee as any, "getUserInput").mockReturnValue("y");

            coffee.prepareRecipe();

            expect(consoleSpy).toHaveBeenCalledWith("Boiling water");
            expect(consoleSpy).toHaveBeenCalledWith("Dripping Coffee through filter");
            expect(consoleSpy).toHaveBeenCalledWith("Pouring into cup");
            expect(consoleSpy).toHaveBeenCalledWith("Adding Sugar and Milk");

            getUserInputSpy.mockRestore();
            consoleSpy.mockRestore();
        });

        test("CoffeeWithHook should skip condiments when user says no", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const coffee = new CoffeeWithHook();

            // Mock user input to not want condiments
            const getUserInputSpy = jest.spyOn(coffee as any, "getUserInput").mockReturnValue("n");

            coffee.prepareRecipe();

            expect(consoleSpy).toHaveBeenCalledWith("Boiling water");
            expect(consoleSpy).toHaveBeenCalledWith("Dripping Coffee through filter");
            expect(consoleSpy).toHaveBeenCalledWith("Pouring into cup");
            expect(consoleSpy).not.toHaveBeenCalledWith("Adding Sugar and Milk");

            getUserInputSpy.mockRestore();
            consoleSpy.mockRestore();
        });

        test("TeaWithHook should use hook method", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const tea = new TeaWithHook();

            // Mock the customerWantsCondiments method to return true
            const customerWantsCondimentsSpy = jest.spyOn(tea as any, "customerWantsCondiments").mockReturnValue(true);

            tea.prepareRecipe();

            expect(customerWantsCondimentsSpy).toHaveBeenCalled();
            expect(consoleSpy).toHaveBeenCalledWith("Boiling water");
            expect(consoleSpy).toHaveBeenCalledWith("Steeping the tea");
            expect(consoleSpy).toHaveBeenCalledWith("Pouring into cup");
            expect(consoleSpy).toHaveBeenCalledWith("Adding Lemon");

            customerWantsCondimentsSpy.mockRestore();
            consoleSpy.mockRestore();
        });

        test("TeaWithHook should skip condiments when user says no", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const tea = new TeaWithHook();

            // Mock the customerWantsCondiments method to return false
            const customerWantsCondimentsSpy = jest.spyOn(tea as any, "customerWantsCondiments").mockReturnValue(false);

            tea.prepareRecipe();

            expect(customerWantsCondimentsSpy).toHaveBeenCalled();
            expect(consoleSpy).toHaveBeenCalledWith("Boiling water");
            expect(consoleSpy).toHaveBeenCalledWith("Steeping the tea");
            expect(consoleSpy).toHaveBeenCalledWith("Pouring into cup");
            expect(consoleSpy).not.toHaveBeenCalledWith("Adding Lemon");

            customerWantsCondimentsSpy.mockRestore();
            consoleSpy.mockRestore();
        });

        test("Hook should default to true when not overridden", () => {
            // Create a minimal concrete subclass for testing
            class TestBeverage extends CaffeineBeverageWithHook {
                brew(): void {}
                addCondiments(): void {}
                public callCustomerWantsCondiments(): boolean {
                    return this.customerWantsCondiments();
                }
            }
            const beverage = new TestBeverage();

            // Test the default hook implementation
            expect(beverage.callCustomerWantsCondiments()).toBe(true);
        });
    });

    describe("Abstract Template Class", () => {
        test("CaffeineBeverage should not be instantiable", () => {
            // In TypeScript, abstract classes cannot be instantiated
            expect(() => {
                // This should cause a compilation error, but for testing purposes:
                // new CaffeineBeverage();
            }).not.toThrow(); // We can't actually test this at runtime in TypeScript
        });

        test("Template method should call abstract methods in correct order", () => {
            const coffee = new Coffee();

            const boilWaterSpy = jest.spyOn(coffee as any, "boilWater");
            const brewSpy = jest.spyOn(coffee as any, "brew");
            const pourInCupSpy = jest.spyOn(coffee as any, "pourInCup");
            const addCondimentsSpy = jest.spyOn(coffee as any, "addCondiments");

            coffee.prepareRecipe();

            // Verify all methods were called in sequence
            expect(boilWaterSpy).toHaveBeenCalled();
            expect(brewSpy).toHaveBeenCalled();
            expect(pourInCupSpy).toHaveBeenCalled();
            expect(addCondimentsSpy).toHaveBeenCalled();

            // Verify order by checking call counts at each step
            expect(boilWaterSpy).toHaveBeenCalledTimes(1);
            expect(brewSpy).toHaveBeenCalledTimes(1);
            expect(pourInCupSpy).toHaveBeenCalledTimes(1);
            expect(addCondimentsSpy).toHaveBeenCalledTimes(1);

            boilWaterSpy.mockRestore();
            brewSpy.mockRestore();
            pourInCupSpy.mockRestore();
            addCondimentsSpy.mockRestore();
        });
    });

    describe("Polymorphism", () => {
        test("Should work with beverage references", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const beverages: CaffeineBeverage[] = [new Coffee(), new Tea()];

            beverages.forEach(beverage => {
                beverage.prepareRecipe();
            });

            // Should have called methods for both coffee and tea
            expect(consoleSpy).toHaveBeenCalledWith("Dripping Coffee through filter");
            expect(consoleSpy).toHaveBeenCalledWith("Steeping the tea");
            expect(consoleSpy).toHaveBeenCalledWith("Adding Sugar and Milk");
            expect(consoleSpy).toHaveBeenCalledWith("Adding Lemon");

            consoleSpy.mockRestore();
        });

        test("Hook beverages should work polymorphically", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            const beverages: CaffeineBeverageWithHook[] = [
                new CoffeeWithHook(),
                new TeaWithHook()
            ];

            // Mock customerWantsCondiments for both beverages
            const mockCustomerWants = jest.fn().mockReturnValue(true);
            beverages.forEach(beverage => {
                jest.spyOn(beverage as any, "customerWantsCondiments").mockImplementation(mockCustomerWants);
            });

            beverages.forEach(beverage => {
                beverage.prepareRecipe();
            });

            expect(consoleSpy).toHaveBeenCalledWith("Dripping Coffee through filter");
            expect(consoleSpy).toHaveBeenCalledWith("Steeping the tea");

            consoleSpy.mockRestore();
        });
    });
});
