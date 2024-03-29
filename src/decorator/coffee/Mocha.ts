import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost() {
    return 0.2 + this.beverage.cost();
  }
}
