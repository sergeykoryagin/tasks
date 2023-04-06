import { TreeNode } from '../utils/tree-node';

const binaryTreePathsHelper = (
    node: TreeNode | null,
    paths: string[],
    currentPath?: string,
): void => {
    if (!node) {
        return;
    }

    const newPath = currentPath ? `${currentPath}->${node.val}` : `${node.val}`;

    if (!node.left && !node.right) {
        paths.push(newPath);
        return;
    }
    if (node.left) {
        binaryTreePathsHelper(node.left, paths, newPath);
    }
    if (node.right) {
        binaryTreePathsHelper(node.right, paths, newPath);
    }
};

function binaryTreePaths(root: TreeNode | null): string[] {
    const paths: string[] = [];
    binaryTreePathsHelper(root, paths);
    return paths;
}
