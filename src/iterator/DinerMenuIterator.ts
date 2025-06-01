import { Iterator } from './Iterator';
import { MenuItem } from './MenuItem';

/**
 * Concrete Iterator for DinerMenu (array-based)
 */
export class DinerMenuIterator implements Iterator<MenuItem> {
    private items: MenuItem[];
    private position: number = 0;

    constructor(items: MenuItem[]) {
        this.items = items;
    }

    public next(): MenuItem {
        return this.items[this.position++];
    }

    public hasNext(): boolean {
        return this.items.length > this.position && this.items[this.position] !== null;
    }
}
