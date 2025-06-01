import { GUIFactory } from './GUIFactory';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { MacButton } from './MacButton';
import { MacCheckbox } from './MacCheckbox';

/**
 * Concrete Factory for Mac GUI elements
 */
export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
