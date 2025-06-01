import { HouseBuilder } from "./HouseBuilder";
import { House } from "./House";
import { HouseType, Wall, InteriorWall, Window, Roof } from "./HouseComponents";

export class StoneHouseBuilder extends HouseBuilder {
    private numWalls: number = 5;     // Stone houses have 5 walls: 4 exterior, 1 interior
    private numWindows: number = 20;  // Stone houses have a lot of windows
    private windowMaterial: string = "Antique glass";
    private wallMaterial: string = "Stone, 2 feet thick";
    private interiorWallMaterial: string = "Stone, 1 foot thick";
    private roofMaterial: string = "Tile";

    constructor() {
        super();
        this.builderName = "Stone House Builder";
        this.setHouseType(HouseType.STONE);
    }

    addWalls(): HouseBuilder {
        // Add 4 exterior walls
        for (let i = 0; i < this.numWalls - 1; i++) {
            this.house.addWall(new Wall(this.interiorWallMaterial));
        }
        // Add 1 interior wall
        this.house.addWall(new InteriorWall(this.wallMaterial));
        return this;
    }

    addWindows(): HouseBuilder {
        for (let i = 0; i < this.numWindows; i++) {
            this.house.addWindow(new Window(this.windowMaterial));
        }
        return this;
    }

    addRoof(): HouseBuilder {
        this.house.addRoof(new Roof(this.roofMaterial));
        return this;
    }

    build(): House {
        console.log("Putting stone house together with mortar");
        return this.house;
    }
}
