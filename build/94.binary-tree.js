"use strict";
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function inorderTraversal(root) {
    const result = [];
    if (!root) {
        return result;
    }
    const stack = [];
    let current = root;
    while (stack.length || current) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
console.log(inorderTraversal(root));
//# sourceMappingURL=94.binary-tree.js.map