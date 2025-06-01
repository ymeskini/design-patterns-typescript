import { HouseBuilder } from "./HouseBuilder";
import { House } from "./House";
import { WoodHouseBuilder } from "./WoodHouseBuilder";
import { StoneHouseBuilder } from "./StoneHouseBuilder";

export class HouseDirector {
    static buildHouse(builder: HouseBuilder): House {
        return builder.addWalls().addWindows().addRoof().build();
    }
}

export function builderPatternDemo(): void {
    console.log("=== Builder Pattern Demo ===\n");

    // The Director calls the methods in the correct order to build a house.
    // Could make this a lot more complicated to allow number of walls, windows, to be passed in.

    const woodHouseBuilder: HouseBuilder = new WoodHouseBuilder();
    const woodHouse: House = HouseDirector.buildHouse(woodHouseBuilder);
    console.log(woodHouse.toString());
    console.log();

    const stoneHouseBuilder: HouseBuilder = new StoneHouseBuilder();
    const stoneHouse: House = HouseDirector.buildHouse(stoneHouseBuilder);
    console.log(stoneHouse.toString());
    console.log();

    // Builder has similarities to Abstract Factory.
    // But difference is that Builder provides a step by step API for building a product;
    //   the client is responsible for calling the steps, and those can vary in order, etc.
    //   With Builder, the client must have more knowledge of the details of the product being built.
    // Product implementations can be swapped for others; clients don't change because they use the abstract API.
}

// Run the demo if this file is executed directly
if (require.main === module) {
    builderPatternDemo();
}
