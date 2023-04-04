export const threeSum = (nums: number[]): number[][] => {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const fixed = nums[i];
        if (fixed > 0) {
            return result;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let low = i + 1;
        let high = nums.length - 1;
        while (low < high) {
            const lowValue = nums[low];
            const highValue = nums[high];
            const sum = fixed + lowValue + highValue;
            if (sum > 0) {
                high--;
            } else if (sum < 0) {
                low++;
            } else {
                result.push([fixed, lowValue, highValue]);

                while (++low < high && nums[low] === lowValue) void 0;
                while (low < --high && nums[high] === highValue) void 0;
            }
        }
    }

    return result;
};

const nums1 = [-1, 0, 1, 2, -1, -4];
const sums1 = threeSum(nums1);

console.log(sums1);

// const nums1 = [1, 1, -2];
// const sums1 = threeSum(nums1);
//
// console.log(sums1);
