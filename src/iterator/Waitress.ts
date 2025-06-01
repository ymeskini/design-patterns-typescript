import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Iterator } from './Iterator';

/**
 * Client class that uses iterators to traverse different menu implementations
 */
export class Waitress {
    private pancakeHouseMenu: Menu;
    private dinerMenu: Menu;

    constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
    }

    public printMenu(): void {
        const pancakeIterator = this.pancakeHouseMenu.createIterator();
        const dinerIterator = this.dinerMenu.createIterator();

        console.log('MENU\n----\nBREAKFAST');
        this.printMenuItems(pancakeIterator);
        console.log('\nLUNCH');
        this.printMenuItems(dinerIterator);
    }

    private printMenuItems(iterator: Iterator<MenuItem>): void {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            console.log(`${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
        }
    }

    public printVegetarianMenu(): void {
        console.log('\nVEGETARIAN MENU\n---------------');
        console.log('BREAKFAST');
        this.printVegetarianMenuItems(this.pancakeHouseMenu.createIterator());
        console.log('\nLUNCH');
        this.printVegetarianMenuItems(this.dinerMenu.createIterator());
    }

    private printVegetarianMenuItems(iterator: Iterator<MenuItem>): void {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            if (menuItem.isVegetarian()) {
                console.log(`${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
            }
        }
    }

    public isItemVegetarian(name: string): boolean {
        const breakfastIterator = this.pancakeHouseMenu.createIterator();
        if (this.isVegetarian(name, breakfastIterator)) {
            return true;
        }
        const dinerIterator = this.dinerMenu.createIterator();
        return this.isVegetarian(name, dinerIterator);
    }

    private isVegetarian(name: string, iterator: Iterator<MenuItem>): boolean {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            if (menuItem.getName() === name) {
                return menuItem.isVegetarian();
            }
        }
        return false;
    }
}
