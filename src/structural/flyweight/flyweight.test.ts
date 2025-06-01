import { Tree } from "./Tree";
import { ConiferTree } from "./ConiferTree";
import { DeciduousTree } from "./DeciduousTree";
import { TreeFactory } from "./TreeFactory";

describe("Flyweight Pattern", () => {
    let treeFactory: TreeFactory;

    beforeEach(() => {
        treeFactory = new TreeFactory();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("Tree Flyweights", () => {
        test("ConiferTree should display correctly with extrinsic state", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();
            const coniferTree = new ConiferTree();

            coniferTree.display(10, 20);

            expect(consoleSpy).toHaveBeenCalledWith(
                "Conifer tree is located at 10, 20"
            );

            consoleSpy.mockRestore();
        });

        test("DeciduousTree should display correctly with extrinsic state", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();
            const deciduousTree = new DeciduousTree();

            deciduousTree.display(30, 40);

            expect(consoleSpy).toHaveBeenCalledWith(
                "Deciduous tree is located at 30, 40"
            );

            consoleSpy.mockRestore();
        });
    });

    describe("TreeFactory", () => {
        test("should create and return ConiferTree instances", () => {
            const tree1 = treeFactory.getTree("conifer");
            const tree2 = treeFactory.getTree("conifer");

            expect(tree1).toBeInstanceOf(ConiferTree);
            expect(tree2).toBeInstanceOf(ConiferTree);
            expect(tree1).toBe(tree2); // Same instance (flyweight pattern)
        });

        test("should create and return DeciduousTree instances", () => {
            const tree1 = treeFactory.getTree("deciduous");
            const tree2 = treeFactory.getTree("deciduous");

            expect(tree1).toBeInstanceOf(DeciduousTree);
            expect(tree2).toBeInstanceOf(DeciduousTree);
            expect(tree1).toBe(tree2); // Same instance (flyweight pattern)
        });

        test("should maintain separate instances for different tree types", () => {
            const coniferTree = treeFactory.getTree("conifer");
            const deciduousTree = treeFactory.getTree("deciduous");

            expect(coniferTree).not.toBe(deciduousTree);
            expect(coniferTree).toBeInstanceOf(ConiferTree);
            expect(deciduousTree).toBeInstanceOf(DeciduousTree);
        });

        test("should throw error for unknown tree type", () => {
            expect(() => treeFactory.getTree("Oak")).toThrow("Invalid kind of tree");
        });

        test("should demonstrate memory efficiency through object sharing", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            // Create multiple references to the same flyweight types
            const trees: Tree[] = [];
            for (let i = 0; i < 10; i++) {
                trees.push(treeFactory.getTree("conifer"));
                trees.push(treeFactory.getTree("deciduous"));
            }

            // All Conifer trees should be the same instance
            const coniferInstances = trees.filter(tree => tree instanceof ConiferTree);
            expect(coniferInstances.length).toBe(10);
            expect(coniferInstances.every(tree => tree === coniferInstances[0])).toBe(true);

            // All Deciduous trees should be the same instance
            const deciduousInstances = trees.filter(tree => tree instanceof DeciduousTree);
            expect(deciduousInstances.length).toBe(10);
            expect(deciduousInstances.every(tree => tree === deciduousInstances[0])).toBe(true);

            consoleSpy.mockRestore();
        });
    });
});
