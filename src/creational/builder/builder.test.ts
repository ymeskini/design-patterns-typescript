import { WoodHouseBuilder } from "./WoodHouseBuilder";
import { StoneHouseBuilder } from "./StoneHouseBuilder";
import { HouseDirector } from "./BuilderDemo";
import { HouseType } from "./HouseComponents";

describe("Builder Pattern", () => {
    test("WoodHouseBuilder should build a wood house with correct components", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const builder = new WoodHouseBuilder();
        const house = HouseDirector.buildHouse(builder);

        expect(house.name).toBe("My wood house");
        expect(house.houseType).toBe(HouseType.WOOD);
        expect(house.walls).toHaveLength(6); // 4 exterior + 2 interior
        expect(house.windows).toHaveLength(10);
        expect(house.roof).toBeDefined();

        consoleSpy.mockRestore();
    });

    test("StoneHouseBuilder should build a stone house with correct components", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const builder = new StoneHouseBuilder();
        const house = HouseDirector.buildHouse(builder);

        expect(house.name).toBe("My stone house");
        expect(house.houseType).toBe(HouseType.STONE);
        expect(house.walls).toHaveLength(5); // 4 exterior + 1 interior
        expect(house.windows).toHaveLength(20);
        expect(house.roof).toBeDefined();

        consoleSpy.mockRestore();
    });

    test("House toString should format correctly", () => {
        const builder = new WoodHouseBuilder();
        const house = HouseDirector.buildHouse(builder);

        const houseString = house.toString();
        expect(houseString).toContain("---- My wood house ----");
        expect(houseString).toContain("Wall made out of");
        expect(houseString).toContain("Window made out of");
        expect(houseString).toContain("Roof made out of");
    });

    test("Builder should support fluent interface", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const builder = new WoodHouseBuilder();

        // Test that methods return the builder for chaining
        const result = builder.addWalls().addWindows().addRoof();
        expect(result).toBeInstanceOf(WoodHouseBuilder);

        consoleSpy.mockRestore();
    });
});
