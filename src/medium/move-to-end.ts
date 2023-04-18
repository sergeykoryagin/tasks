export const moveToEnd = (nums: number[], target: number) => {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            nums[count++] = nums[i];
        }
    }

    for (let i = count; i < nums.length; i++) {
        nums[i] = target;
    }
};

const nums = [2, 1, 2, 2, 2, 3, 4, 2];
const target = 2;

moveToEnd(nums, target);
console.log(nums);
