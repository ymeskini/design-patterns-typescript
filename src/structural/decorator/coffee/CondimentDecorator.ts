import { Beverage } from './Beverage';

export abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;
  abstract getDescription(): string;
}