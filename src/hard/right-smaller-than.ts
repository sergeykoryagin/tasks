class CustomNode {
    val: number;
    smallerCount: number;
    left: CustomNode | null;
    right: CustomNode | null;

    constructor({
        val = 0,
        smallerCount = 0,
        left = null,
        right = null,
    }: Partial<CustomNode> = {}) {
        this.val = val;
        this.smallerCount = smallerCount;
        this.left = left;
        this.right = right;
    }
}

const addToTreeAndCount = (
    node: CustomNode,
    val: number,
    smallerCount: number,
    result: number[],
    i: number,
): void => {
    if (val < node.val) {
        if (!node.left) {
            node.left = new CustomNode({ val });
            result[i] = smallerCount;
        } else {
            addToTreeAndCount(node.left, val, smallerCount, result, i);
        }
        node.smallerCount++;
        return;
    }

    const newSmallerCount =
        node.smallerCount + smallerCount + (val > node.val ? 1 : 0);

    if (!node.right) {
        node.right = new CustomNode({ val });
        result[i] = newSmallerCount;
    } else {
        addToTreeAndCount(node.right, val, newSmallerCount, result, i);
    }
};

const countSmaller = (nums: number[]): number[] => {
    if (nums.length === 1) {
        return [0];
    }
    const result: number[] = Array(nums.length).fill(0);

    const root = new CustomNode({ val: nums[nums.length - 1] });

    for (let i = nums.length - 2; i >= 0; i--) {
        addToTreeAndCount(root, nums[i], 0, result, i);
    }

    return result;
};

export const nums = [8, 5, 11, -1, 3, 4, 2];

console.log(countSmaller(nums));
