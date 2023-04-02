"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
const selectionSort = (numbers) => {
    const result = [...numbers];
    for (let i = 0; i < result.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }
        const temp = result[i];
        result[i] = result[minIndex];
        result[minIndex] = temp;
    }
    return result;
};
exports.selectionSort = selectionSort;
console.log((0, exports.selectionSort)([2, 42, 1, 2, 6, 7]));
//# sourceMappingURL=selection-sort.js.map