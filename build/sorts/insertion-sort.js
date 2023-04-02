"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
const insertionSort = (numbers) => {
    const result = [...numbers];
    for (let i = 1; i < result.length; i++) {
        let j = i;
        while (j > 0 && result[j - 1] > result[j]) {
            const temp = result[j - 1];
            result[j - 1] = result[j];
            result[j] = temp;
            j--;
        }
    }
    return result;
};
exports.insertionSort = insertionSort;
console.log((0, exports.insertionSort)([2, 42, 1, 2, 6, 7]));
//# sourceMappingURL=insertion-sort.js.map