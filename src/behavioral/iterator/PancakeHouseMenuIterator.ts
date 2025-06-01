import { Iterator } from './Iterator';
import { MenuItem } from './MenuItem';

/**
 * Concrete Iterator for PancakeHouseMenu (ArrayList-based)
 */
export class PancakeHouseMenuIterator implements Iterator<MenuItem> {
    private items: MenuItem[];
    private position: number = 0;

    constructor(items: MenuItem[]) {
        this.items = items;
    }

    public next(): MenuItem {
        return this.items[this.position++];
    }

    public hasNext(): boolean {
        return this.position < this.items.length;
    }
}
