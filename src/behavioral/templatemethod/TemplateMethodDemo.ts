import { Coffee } from './Coffee';
import { Tea } from './Tea';
import { CoffeeWithHook } from './CoffeeWithHook';
import { TeaWithHook } from './TeaWithHook';

/**
 * Template Method Pattern Demo
 * Demonstrates the template method pattern with and without hooks
 */
export class TemplateMethodDemo {
    public static run(): void {
        console.log('=== TEMPLATE METHOD PATTERN DEMO ===\n');

        // Basic Template Method Demo
        console.log('1. Basic Template Method (without hooks):');
        console.log('\nMaking coffee...');
        const coffee = new Coffee();
        coffee.prepareRecipe();

        console.log('\nMaking tea...');
        const tea = new Tea();
        tea.prepareRecipe();

        // Template Method with Hooks Demo
        console.log('\n\n2. Template Method with Hooks:');
        console.log('\nMaking coffee with customer preference...');
        const coffeeWithHook = new CoffeeWithHook();
        coffeeWithHook.prepareRecipe();

        console.log('\nMaking another coffee...');
        const anotherCoffee = new CoffeeWithHook();
        anotherCoffee.prepareRecipe();

        console.log('\nMaking tea with customer preference...');
        const teaWithHook = new TeaWithHook();
        teaWithHook.prepareRecipe();

        console.log('\nMaking another tea...');
        const anotherTea = new TeaWithHook();
        anotherTea.prepareRecipe();
    }
}

// Run the demo if this file is executed directly
if (require.main === module) {
    TemplateMethodDemo.run();
}
