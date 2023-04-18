interface DifferenceData {
    difference: number;
    nums: [number, number];
}

const compareNumbersAsc = (a: number, b: number) => a - b;

export const smallestDifference = (
    nums1: number[],
    nums2: number[],
): DifferenceData['nums'] | null => {
    const minDifference: DifferenceData = {
        difference: Infinity,
        nums: [0, 0],
    };

    nums1.sort(compareNumbersAsc);
    nums2.sort(compareNumbersAsc);

    let p1 = 0;
    let p2 = 0;
    while (p1 < nums1.length && p2 < nums2.length) {
        const num1 = nums1[p1];
        const num2 = nums2[p2];
        const difference = Math.abs(num1 - num2);
        if (difference === 0) {
            return [num1, num2];
        }
        if (difference < minDifference.difference) {
            minDifference.difference = difference;
            minDifference.nums[0] = num1;
            minDifference.nums[1] = num2;
        }
        if (num1 < num2) {
            p1++;
        } else {
            p2++;
        }
    }

    return minDifference.difference === Infinity ? null : minDifference.nums;
};

const nums1 = [-1, 5, 10, 20, 28, 3];
const nums2 = [26, 143, 135, 15, 17];

console.log(smallestDifference(nums1, nums2));
