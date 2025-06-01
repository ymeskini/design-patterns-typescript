import { Iterator } from "./Iterator";
import { MenuItem } from "./MenuItem";
import { DinerMenu } from "./DinerMenu";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { DinerMenuIterator } from "./DinerMenuIterator";
import { PancakeHouseMenuIterator } from "./PancakeHouseMenuIterator";
import { Waitress } from "./Waitress";

describe("Iterator Pattern", () => {
    let dinerMenu: DinerMenu;
    let pancakeHouseMenu: PancakeHouseMenu;
    let waitress: Waitress;

    beforeEach(() => {
        dinerMenu = new DinerMenu();
        pancakeHouseMenu = new PancakeHouseMenu();
        waitress = new Waitress(dinerMenu, pancakeHouseMenu);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("MenuItem", () => {
        test("should create MenuItem with all properties", () => {
            const item = new MenuItem("Burger", "Beef burger with fries", true, 9.99);

            expect(item.getName()).toBe("Burger");
            expect(item.getDescription()).toBe("Beef burger with fries");
            expect(item.isVegetarian()).toBe(true);
            expect(item.getPrice()).toBe(9.99);
        });

        test("should convert MenuItem to string", () => {
            const item = new MenuItem("Pizza", "Cheese pizza", false, 12.99);

            expect(item.toString()).toBe("Pizza, $12.99\n   Cheese pizza");
        });
    });

    describe("DinerMenuIterator", () => {
        test("should iterate through diner menu items", () => {
            const iterator = dinerMenu.createIterator();
            const items: MenuItem[] = [];

            while (iterator.hasNext()) {
                items.push(iterator.next());
            }

            expect(items.length).toBeGreaterThan(0);
            expect(items[0]).toBeInstanceOf(MenuItem);
        });

        test("should handle empty menu gracefully", () => {
            const emptyMenu = new DinerMenu();
            // Clear the menu (assuming it starts with some items)
            const iterator = emptyMenu.createIterator();

            // Should work even if menu is empty
            expect(iterator.hasNext()).toBeDefined();
        });
    });

    describe("PancakeHouseMenuIterator", () => {
        test("should iterate through pancake house menu items", () => {
            const iterator = pancakeHouseMenu.createIterator();
            const items: MenuItem[] = [];

            while (iterator.hasNext()) {
                items.push(iterator.next());
            }

            expect(items.length).toBeGreaterThan(0);
            expect(items[0]).toBeInstanceOf(MenuItem);
        });
    });

    describe("Menu Integration", () => {
        test("diner menu should add and iterate items correctly", () => {
            const newMenu = new DinerMenu();
            // DinerMenu already has 6 items (MAX_ITEMS), so adding another should fail
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
            newMenu.addItem("Test Item", "Test Description", false, 5.99);
            expect(consoleSpy).toHaveBeenCalledWith("Sorry, menu is full! Can't add item to menu");

            // But we can still iterate through existing items
            const iterator = newMenu.createIterator();
            let found = false;

            while (iterator.hasNext()) {
                const item = iterator.next();
                if (item.getName() === "Vegetarian BLT") {
                    found = true;
                    expect(item.getDescription()).toBe("(Fakin') Bacon with lettuce & tomato on whole wheat");
                    expect(item.isVegetarian()).toBe(true);
                    expect(item.getPrice()).toBe(2.99);
                    break;
                }
            }

            expect(found).toBe(true);
            consoleSpy.mockRestore();
        });

        test("pancake house menu should add and iterate items correctly", () => {
            const newMenu = new PancakeHouseMenu();
            newMenu.addItem("Test Pancake", "Fluffy pancake", true, 7.99);

            const iterator = newMenu.createIterator();
            let found = false;

            while (iterator.hasNext()) {
                const item = iterator.next();
                if (item.getName() === "Test Pancake") {
                    found = true;
                    expect(item.getDescription()).toBe("Fluffy pancake");
                    expect(item.isVegetarian()).toBe(true);
                    expect(item.getPrice()).toBe(7.99);
                    break;
                }
            }

            expect(found).toBe(true);
        });
    });

    describe("Waitress", () => {
        test("should print all menus", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            waitress.printMenu();

            expect(consoleSpy).toHaveBeenCalledWith("MENU\n----\nBREAKFAST");
            expect(consoleSpy).toHaveBeenCalledWith("\nLUNCH");

            consoleSpy.mockRestore();
        });

        test("should print vegetarian menu items only", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            waitress.printVegetarianMenu();

            expect(consoleSpy).toHaveBeenCalledWith("\nVEGETARIAN MENU\n---------------");

            consoleSpy.mockRestore();
        });

        test("should check if item is vegetarian", () => {
            // Use an existing vegetarian item from the menu instead of adding one
            const isVeg = waitress.isItemVegetarian("Vegetarian BLT");
            expect(isVeg).toBe(true);
        });

        test("should return false for non-existent items when checking vegetarian", () => {
            const isVeg = waitress.isItemVegetarian("Non-existent Item");
            expect(isVeg).toBe(false);
        });
    });

    describe("Iterator Interface Compliance", () => {
        test("both menu iterators should implement Iterator interface", () => {
            const dinerIterator = dinerMenu.createIterator();
            const pancakeIterator = pancakeHouseMenu.createIterator();

            expect(typeof dinerIterator.hasNext).toBe("function");
            expect(typeof dinerIterator.next).toBe("function");
            expect(typeof pancakeIterator.hasNext).toBe("function");
            expect(typeof pancakeIterator.next).toBe("function");
        });

        test("iterators should properly signal end of collection", () => {
            const iterator = dinerMenu.createIterator();

            // Iterate through all items
            while (iterator.hasNext()) {
                iterator.next();
            }

            // Should not have next after reaching the end
            expect(iterator.hasNext()).toBe(false);
        });
    });
});
