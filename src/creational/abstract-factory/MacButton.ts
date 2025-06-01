import { Button } from './Button';

/**
 * Concrete implementation of Mac Button
 */
export class MacButton implements Button {
  paint(): void {
    console.log('Rendering a Mac-style button');
  }

  onClick(f: () => void): void {
    console.log('Mac button clicked');
    f();
  }
}
