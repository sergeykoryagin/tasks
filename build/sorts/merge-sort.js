"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = exports.merge = void 0;
const merge = (arr1, arr2) => {
    const result = [];
    let ptr1 = 0;
    let ptr2 = 0;
    while (ptr1 < arr1.length || ptr2 < arr2.length) {
        if (ptr2 >= arr2.length) {
            result.push(arr1[ptr1++]);
        }
        else if (ptr1 >= arr1.length) {
            result.push(arr2[ptr2++]);
        }
        else if (arr1[ptr1] < arr2[ptr2]) {
            result.push(arr1[ptr1++]);
        }
        else {
            result.push(arr2[ptr2++]);
        }
    }
    return result;
};
exports.merge = merge;
const mergeSort = (numbers) => {
    if (numbers.length <= 1) {
        return numbers;
    }
    return (0, exports.merge)((0, exports.mergeSort)(numbers.slice(0, numbers.length / 2)), (0, exports.mergeSort)(numbers.slice(numbers.length / 2)));
};
exports.mergeSort = mergeSort;
console.log((0, exports.mergeSort)([2, 42, 1, 2, 6, 7]));
//# sourceMappingURL=merge-sort.js.map