import { GUIFactory } from './GUIFactory';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { WindowsButton } from './WindowsButton';
import { WindowsCheckbox } from './WindowsCheckbox';

/**
 * Concrete Factory for Windows GUI elements
 */
export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}
