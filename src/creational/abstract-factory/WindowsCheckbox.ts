import { Checkbox } from './Checkbox';

/**
 * Concrete implementation of Windows Checkbox
 */
export class WindowsCheckbox implements Checkbox {
  private checked: boolean = false;

  paint(): void {
    console.log('Rendering a Windows-style checkbox');
  }

  isChecked(): boolean {
    return this.checked;
  }

  toggle(): void {
    this.checked = !this.checked;
    console.log(`Windows checkbox is now ${this.checked ? 'checked' : 'unchecked'}`);
  }
}
