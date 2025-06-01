import { GUIFactory } from './GUIFactory';
import { Button } from './Button';
import { Checkbox } from './Checkbox';

/**
 * Application that uses the Abstract Factory pattern
 */
export class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  paint(): void {
    this.button.paint();
    this.checkbox.paint();
  }

  interact(): void {
    this.button.onClick(() => {
      console.log('Button action executed!');
    });

    this.checkbox.toggle();
    console.log(`Checkbox state: ${this.checkbox.isChecked()}`);
  }
}
