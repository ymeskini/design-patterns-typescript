import { Button } from './Button';

/**
 * Concrete implementation of Windows Button
 */
export class WindowsButton implements Button {
  paint(): void {
    console.log('Rendering a Windows-style button');
  }

  onClick(f: () => void): void {
    console.log('Windows button clicked');
    f();
  }
}
