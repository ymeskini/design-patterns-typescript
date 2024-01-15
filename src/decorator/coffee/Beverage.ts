export enum Size {
  TALL,
  GRANDE,
  VENTI,
}

export abstract class Beverage {
  description: string = 'Unknown Beverage';
  size: Size = Size.TALL;

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;

  setSize(size: Size) {
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}
