export enum HouseType {
    WOOD = "WOOD",
    CLAY = "CLAY",
    GINGERBREAD = "GINGERBREAD",
    STONE = "STONE"
}

export class Wall {
    name: string;
    material: string;

    constructor(material: string) {
        this.material = material;
        this.name = `Wall made out of ${material}`;
    }

    setName(name: string): void {
        this.name = name;
    }

    toString(): string {
        return this.name;
    }
}

export class InteriorWall extends Wall {
    constructor(material: string) {
        super(material);
        this.name = `Interior wall made out of ${material}`;
    }
}

export class Window {
    name: string;
    material: string;

    constructor(material: string) {
        this.material = material;
        this.name = `Window made out of ${material}`;
    }

    setName(name: string): void {
        this.name = name;
    }

    toString(): string {
        return this.name;
    }
}

export class Roof {
    name: string;
    material: string;

    constructor(material: string) {
        this.material = material;
        this.name = `Roof made out of ${material}`;
    }

    setName(name: string): void {
        this.name = name;
    }

    toString(): string {
        return this.name;
    }
}
