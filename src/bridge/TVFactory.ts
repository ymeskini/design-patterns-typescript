import { TV } from './TV';
import { LG } from './LG';
import { Sony } from './Sony';

/**
 * Factory for creating TV instances
 */
export class TVFactory {
    public getTV(type: string): TV {
        if (type === 'LG') {
            return new LG();
        } else if (type === 'Sony') {
            return new Sony();
        } else {
            throw new Error('Invalid TV Type');
        }
    }
}
