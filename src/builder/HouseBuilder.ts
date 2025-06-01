import { House } from "./House";
import { HouseType } from "./HouseComponents";

export abstract class HouseBuilder {
    protected builderName: string = "";
    protected houseType?: HouseType;
    protected house: House = new House();

    setHouseType(houseType: HouseType): void {
        this.houseType = houseType;
        this.house.setHouseType(houseType);
    }

    // Each method in the Builder returns the Builder so we can use the Fluent Interface Pattern
    abstract addWalls(): HouseBuilder;
    abstract addRoof(): HouseBuilder;
    abstract addWindows(): HouseBuilder;

    build(): House {
        console.log("Build the house!");
        // Very simple build -- just return the house!
        // We've added all the parts...
        // In a real build, we'd have to nail and screw everything together of course.
        // And add wiring and so on.
        return this.house;
    }
}
