const getRange = (left: number, right: number) =>
    left === right ? `${left}` : `${left}->${right}`;

const summaryRanges = (nums: number[]): string[] => {
    if (nums.length === 0) {
        return [];
    }
    const ranges: string[] = [];
    let left = 0;
    let current = 1;
    while (current < nums.length) {
        if (nums[current] - nums[current - 1] > 1) {
            const range = getRange(nums[left], nums[current - 1]);
            ranges.push(range);
            left = current;
        }
        current++;
    }

    if (current === nums.length) {
        const range = getRange(nums[left], nums[current - 1]);
        ranges.push(range);
    }

    return ranges;
};

const nums = [0, 2, 3, 4, 6, 8, 9];
const ranges = summaryRanges(nums);

console.log(ranges);
