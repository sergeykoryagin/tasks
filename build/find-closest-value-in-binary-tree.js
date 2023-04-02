"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
exports.TreeNode = TreeNode;
const tree = new TreeNode(10, new TreeNode(5, new TreeNode(2, new TreeNode(1)), new TreeNode(5)), new TreeNode(15, new TreeNode(13, null, new TreeNode(14)), new TreeNode(22)));
// T O(log(N)) | S O(log(N))
// const findClosestValueInBinaryTreeHelper = (tree: TreeNode | null, target: number, closest: number): number => {
//     if (!tree) {
//         return closest;
//     }
//     const prevDifference = Math.abs(target - closest);
//     const currentDifference = Math.abs(target - tree.val)
//     const newClosest = currentDifference < prevDifference ? tree.val : closest;
//
//     if (tree.val > target) {
//         return findClosestValueInBinaryTreeHelper(tree.left, target, newClosest);
//     }
//     if (tree.val < target) {
//         return findClosestValueInBinaryTreeHelper(tree.right, target, newClosest);
//     }
//     return newClosest;
// };
//
// const findClosestValueInBinaryTree = (tree: TreeNode, target: number): number => {
//     return findClosestValueInBinaryTreeHelper(tree, target, Infinity);
// };
// T O(log(N)) | S O(1)
const findClosestValueInBinaryTree = (tree, target) => {
    let currentNode = tree;
    let closest = Infinity;
    while (currentNode) {
        const prevDifference = Math.abs(target - closest);
        const currentDifference = Math.abs(target - currentNode.val);
        if (currentDifference < prevDifference) {
            closest = currentNode.val;
        }
        if (currentNode.val > target) {
            currentNode = currentNode.left;
        }
        else if (currentNode.val < target) {
            currentNode = currentNode.right;
        }
        else {
            break;
        }
    }
    return closest;
};
const closest = findClosestValueInBinaryTree(tree, 19);
console.log(closest);
//# sourceMappingURL=find-closest-value-in-binary-tree.js.map