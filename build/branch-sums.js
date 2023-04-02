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
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10))), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const branchSumsHelper = (tree, sum, result) => {
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
const branchSums = (tree) => {
    const result = [];
    branchSumsHelper(tree, 0, result);
    return result;
};
const sums = branchSums(tree);
console.log(sums);
//# sourceMappingURL=branch-sums.js.map