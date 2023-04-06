import { TreeNode } from '../utils/tree-node';

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    if (!root) {
        return result;
    }

    const stack: (TreeNode | null)[] = [];

    let current: TreeNode | null = root;

    while (stack.length || current) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        result.push(current.val);
        current = current.right;
    }
    return result;
}

const root = new TreeNode(
    1,
    null,
    new TreeNode(2, new TreeNode(3, null, null), null),
);

console.log(inorderTraversal(root));
