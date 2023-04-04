import { swap } from "./utils/swap";

function nextPermutation(nums: number[]): void {
    let index = -1;
    const size = nums.length;
    for (let i = size - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index = i - 1;
            break;
        }
    }
    if (index === -1) {
        nums.reverse();
        return;
    }
    for (let i = size - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            swap(nums, i, index);
            break;
        }
    }
    const needReverseItems = nums.splice(index + 1, size - index + 1);
    nums.splice(index + 1, 0, ...needReverseItems.reverse());
};


const nums = [1,3,2];

nextPermutation(nums);

console.log(nums);