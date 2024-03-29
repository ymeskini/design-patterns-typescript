import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost() {
    return 0.1 + this.beverage.cost();
  }
}
