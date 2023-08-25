/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode } from '../utils/tree-node';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const isSameTree = (
    tree1: TreeNode | null,
    tree2: TreeNode | null,
): boolean => {
    if (!tree1 && !tree2) {
        return true;
    }
    if (!tree1 || !tree2) {
        return false;
    }
    if (tree1.val !== tree2.val) {
        return false;
    }
    return (
        isSameTree(tree1.left, tree2.left) &&
        isSameTree(tree1.right, tree2.right)
    );
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (isSameTree(root, subRoot)) {
        return true;
    }
    if (!root) {
        return !subRoot;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

const tree1 = new TreeNode(
    3,
    new TreeNode(4, new TreeNode(1), new TreeNode(2)),
    new TreeNode(5),
);

const subTree1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));

const tree2 = new TreeNode(1);
const subTree2 = new TreeNode(0);

console.log(isSubtree(tree2, subTree2));
