import { TreeNode } from '../utils/tree-node';

const tree = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4, new TreeNode(8), new TreeNode(9)),
        new TreeNode(5, new TreeNode(10)),
    ),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
);

const branchSumsHelper = (tree: TreeNode, sum: number, result: number[]) => {
    if (!tree.left && !tree.right) {
        result.push(sum + tree.val);
        return;
    }
    if (tree.left) {
        branchSumsHelper(tree.left, sum + tree.val, result);
    }
    if (tree.right) {
        branchSumsHelper(tree.right, sum + tree.val, result);
    }
};

const branchSums = (tree: TreeNode): number[] => {
    const result: number[] = [];
    branchSumsHelper(tree, 0, result);
    return result;
};

const sums = branchSums(tree);

console.log(sums);
