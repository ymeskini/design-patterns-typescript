import { Tree } from './Tree';
import { DeciduousTree } from './DeciduousTree';
import { ConiferTree } from './ConiferTree';

/**
 * Flyweight Factory
 * Creates and manages flyweight instances, ensuring they are shared
 */
export class TreeFactory {
    private deciduousTree: Tree;
    private coniferTree: Tree;

    constructor() {
        // Create the flyweight instances once
        this.deciduousTree = new DeciduousTree();
        this.coniferTree = new ConiferTree();
    }

    public getTree(type: string): Tree {
        if (type === 'deciduous') {
            return this.deciduousTree;
        } else if (type === 'conifer') {
            return this.coniferTree;
        } else {
            throw new Error('Invalid kind of tree');
        }
    }
}
