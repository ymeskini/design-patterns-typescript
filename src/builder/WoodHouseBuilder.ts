import { HouseBuilder } from "./HouseBuilder";
import { House } from "./House";
import { HouseType, Wall, InteriorWall, Window, Roof } from "./HouseComponents";

export class WoodHouseBuilder extends HouseBuilder {
    private numWalls: number = 6;     // 4 exterior walls, 2 interior
    private numWindows: number = 10;
    private windowMaterial: string = "Tempered glass";
    private wallMaterial: string = "Wood, 4x6";
    private interiorWallMaterial: string = "Wood, 2x4";
    private roofMaterial: string = "Metal";

    constructor() {
        super();
        this.builderName = "Wood House Builder";
        this.setHouseType(HouseType.WOOD);
    }

    addWalls(): HouseBuilder {
        // add exterior walls
        for (let i = 0; i < 4; i++) {
            console.log(`Nailing wood for wall made out of ${this.wallMaterial}`);
            this.house.addWall(new Wall(this.wallMaterial));
        }
        // add interior walls
        for (let i = 0; i < this.numWalls - 4; i++) {
            console.log(`Nailing wood for interior wall made out of ${this.interiorWallMaterial}`);
            this.house.addWall(new InteriorWall(this.interiorWallMaterial));
        }
        return this;
    }

    addWindows(): HouseBuilder {
        for (let i = 0; i < this.numWindows; i++) {
            console.log(`Adding window made out of ${this.windowMaterial}`);
            this.house.addWindow(new Window(this.windowMaterial));
        }
        return this;
    }

    addRoof(): HouseBuilder {
        this.house.addRoof(new Roof(this.roofMaterial));
        return this;
    }

    build(): House {
        console.log("Nail everything together");
        return this.house;
    }
}
