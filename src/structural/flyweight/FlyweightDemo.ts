import { TreeFactory } from './TreeFactory';
import { Tree } from './Tree';

/**
 * Flyweight Pattern Demo
 * Demonstrates how flyweights are shared to save memory
 */
export class FlyweightDemo {
    public static run(): void {
        // Extrinsic state - locations where trees are planted
        const deciduousLocations: number[][] = [[1, 1], [33, 50], [100, 90]];
        const coniferLocations: number[][] = [[10, 87], [24, 76], [2, 64]];

        // Create the factory that manages flyweights
        const treeFactory = new TreeFactory();

        try {
            // Get the shared flyweight instances
            const deciduousTree: Tree = treeFactory.getTree('deciduous');
            const coniferTree: Tree = treeFactory.getTree('conifer');

            console.log('Displaying deciduous trees:');
            for (const location of deciduousLocations) {
                deciduousTree.display(location[0], location[1]);
            }

            console.log('\nDisplaying conifer trees:');
            for (const location of coniferLocations) {
                coniferTree.display(location[0], location[1]);
            }

            // Demonstrate that the same flyweight instance is reused
            console.log('\nDemonstrating flyweight sharing:');
            const anotherDeciduousTree = treeFactory.getTree('deciduous');
            console.log('Same deciduous instance?', deciduousTree === anotherDeciduousTree);

        } catch (error) {
            console.error(error);
        }
    }
}

// Run the demo if this file is executed directly
if (require.main === module) {
    FlyweightDemo.run();
}
