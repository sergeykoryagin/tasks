"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (numbers) => {
    const result = [...numbers];
    let isSorted = false;
    for (let i = 0; i < result.length && !isSorted; i++) {
        isSorted = true;
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
                isSorted = false;
            }
        }
    }
    return result;
};
exports.bubbleSort = bubbleSort;
console.log((0, exports.bubbleSort)([2, 42, 1, 2, 6, 7]));
//# sourceMappingURL=bubble-sort.js.map