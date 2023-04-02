"use strict";
function subsets(nums) {
    const n = nums.length;
    const result = [];
    for (let mask = 0; mask < (1 << n); mask++) {
        const subset = [];
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                subset.push(nums[i]);
            }
        }
        result.push(subset);
    }
    return result;
}
console.log(subsets([1, 2, 3]));
//# sourceMappingURL=78.subsets.js.map