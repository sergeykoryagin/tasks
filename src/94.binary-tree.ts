
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


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
    null, new TreeNode(
        2, 
        new TreeNode(3, null, null), null
    )
);

console.log(inorderTraversal(root));
