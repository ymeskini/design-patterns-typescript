import { Iterator } from './Iterator';

/**
 * Menu interface that all menus must implement
 */
export interface Menu {
    createIterator(): Iterator<any>;
}
