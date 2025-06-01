import { Application } from './Application';
import { WindowsFactory } from './WindowsFactory';
import { MacFactory } from './MacFactory';
import { GUIFactory } from './GUIFactory';

/**
 * Demo for Abstract Factory pattern
 */
function getFactory(osType: string): GUIFactory {
  switch (osType.toLowerCase()) {
    case 'windows':
      return new WindowsFactory();
    case 'mac':
      return new MacFactory();
    default:
      throw new Error(`Unsupported OS: ${osType}`);
  }
}

function runDemo(): void {
  console.log('=== Abstract Factory Pattern Demo ===\n');

  // Simulate different operating systems
  const osTypes = ['windows', 'mac'];

  osTypes.forEach(osType => {
    console.log(`\n--- Running on ${osType.toUpperCase()} ---`);

    const factory = getFactory(osType);
    const app = new Application(factory);

    console.log('Painting UI elements:');
    app.paint();

    console.log('\nInteracting with UI elements:');
    app.interact();
  });
}

// Run the demo if this file is executed directly
if (require.main === module) {
  runDemo();
}

export { runDemo };
