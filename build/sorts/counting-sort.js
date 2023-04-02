"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countingSort = void 0;
const countingSort = (numbers) => {
    const result = [];
    let min = Infinity;
    let max = -Infinity;
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    const range = max - min + 1;
    const counts = Array(range).fill(0);
    for (const num of numbers) {
        counts[num - min]++;
    }
    for (let i = 0; i < counts.length; i++) {
        for (let j = 0; j < counts[i]; j++) {
            result.push(i + min);
        }
    }
    return result;
};
exports.countingSort = countingSort;
console.log((0, exports.countingSort)([2, 42, 1, 2, 6, 7]));
//# sourceMappingURL=counting-sort.js.map