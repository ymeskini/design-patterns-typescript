import { PancakeHouseMenu } from './PancakeHouseMenu';
import { DinerMenu } from './DinerMenu';
import { Waitress } from './Waitress';

/**
 * Iterator Pattern Demo
 * Demonstrates how iterators provide a uniform way to traverse different collections
 */
export class IteratorDemo {
    public static run(): void {
        const pancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu = new DinerMenu();

        const waitress = new Waitress(pancakeHouseMenu, dinerMenu);

        console.log('=== ITERATOR PATTERN DEMO ===\n');

        // Print all menus
        waitress.printMenu();

        // Print only vegetarian items
        waitress.printVegetarianMenu();

        // Check if specific items are vegetarian
        console.log('\n=== VEGETARIAN ITEM CHECKS ===');
        console.log(`Is "Blueberry Pancakes" vegetarian? ${waitress.isItemVegetarian('Blueberry Pancakes')}`);
        console.log(`Is "BLT" vegetarian? ${waitress.isItemVegetarian('BLT')}`);
        console.log(`Is "Steamed Veggies and Brown Rice" vegetarian? ${waitress.isItemVegetarian('Steamed Veggies and Brown Rice')}`);
    }
}

// Run the demo if this file is executed directly
if (require.main === module) {
    IteratorDemo.run();
}
