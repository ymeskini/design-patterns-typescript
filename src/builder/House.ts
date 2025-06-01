import { HouseType, Wall, Window, Roof } from "./HouseComponents";

export class House {
    name: string = "";
    houseType?: HouseType;
    roof?: Roof;
    walls: Wall[] = [];
    windows: Window[] = [];

    setHouseType(houseType: HouseType): House {
        this.houseType = houseType;
        switch (houseType) {
            case HouseType.WOOD:
                this.name = "My wood house";
                break;
            case HouseType.CLAY:
                this.name = "My clay house";
                break;
            case HouseType.GINGERBREAD:
                this.name = "My holiday gingerbread house";
                break;
            case HouseType.STONE:
                this.name = "My stone house";
                break;
        }
        return this;
    }

    addRoof(roof: Roof): House {
        this.roof = roof;
        return this;
    }

    addWall(wall: Wall): House {
        this.walls.push(wall);
        return this;
    }

    addWindow(window: Window): House {
        this.windows.push(window);
        return this;
    }

    setName(name: string): void {
        this.name = name;
    }

    toString(): string {
        const display: string[] = [];
        display.push(`---- ${this.name} ----`);

        for (const wall of this.walls) {
            display.push(`--- ${wall.name} ---`);
        }

        for (const window of this.windows) {
            display.push(`--- ${window.name} ---`);
        }

        if (this.roof) {
            display.push(`--- ${this.roof.name} ---`);
        }

        return display.join('\n');
    }
}
