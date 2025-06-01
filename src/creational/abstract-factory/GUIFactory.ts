import { Button } from './Button';
import { Checkbox } from './Checkbox';

/**
 * Abstract Factory interface for creating GUI elements
 */
export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
