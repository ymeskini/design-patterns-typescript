import { Beverage, Size } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription() {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost() {
    const size = this.beverage.getSize();

    switch (size) {
      case Size.TALL:
        return 0.10 + this.beverage.cost();
      case Size.GRANDE:
        return 0.15 + this.beverage.cost();
      case Size.VENTI:
        return 0.20 + this.beverage.cost();
      default:
        return 0.10 + this.beverage.cost();
    }
  }
}
