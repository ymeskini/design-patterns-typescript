import { Checkbox } from './Checkbox';

/**
 * Concrete implementation of Mac Checkbox
 */
export class MacCheckbox implements Checkbox {
  private checked: boolean = false;

  paint(): void {
    console.log('Rendering a Mac-style checkbox');
  }

  isChecked(): boolean {
    return this.checked;
  }

  toggle(): void {
    this.checked = !this.checked;
    console.log(`Mac checkbox is now ${this.checked ? 'checked' : 'unchecked'}`);
  }
}
