export const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b);

    let closest = nums[0] + nums[1] + nums[2];
    if (nums[0] >= target) {
        return closest;
    }

    for (let i = 0; i < nums.length; i++) {
        const fixed = nums[i];
        let low = i + 1;
        let high = nums.length - 1;
        while (low < high) {
            const lowValue = nums[low];
            const highValue = nums[high];
            const sum = fixed + lowValue + highValue;
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }
            if (sum < target) {
                low++;
            } else if (sum > target) {
                high--;
            } else {
                return closest;
            }
        }
    }

    return closest;
};

// const nums = [-1, 2, 1, -4];
const nums = [0, 0, 0];
const target = 1;

const result = threeSumClosest(nums, target);

console.log(result);
