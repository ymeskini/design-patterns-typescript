import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Iterator } from './Iterator';
import { PancakeHouseMenuIterator } from './PancakeHouseMenuIterator';

/**
 * Concrete Aggregate - PancakeHouseMenu (uses ArrayList/Array)
 */
export class PancakeHouseMenu implements Menu {
    private menuItems: MenuItem[];

    constructor() {
        this.menuItems = [];

        this.addItem("K&B's Pancake Breakfast",
            'Pancakes with scrambled eggs and toast',
            true,
            2.99);

        this.addItem('Regular Pancake Breakfast',
            'Pancakes with fried eggs, sausage',
            false,
            2.99);

        this.addItem('Blueberry Pancakes',
            'Pancakes made with fresh blueberries',
            true,
            3.49);

        this.addItem('Waffles',
            'Waffles with your choice of blueberries or strawberries',
            true,
            3.59);
    }

    public addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        const menuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.push(menuItem);
    }

    public getMenuItems(): MenuItem[] {
        return this.menuItems;
    }

    public createIterator(): Iterator<MenuItem> {
        return new PancakeHouseMenuIterator(this.menuItems);
    }

    public toString(): string {
        return 'Objectville Pancake House Menu';
    }
}
