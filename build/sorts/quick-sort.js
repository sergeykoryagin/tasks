"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
const quickSort = (numbers) => {
    const result = [...numbers];
    return (0, exports.quickSort)(result);
};
exports.quickSort = quickSort;
console.log((0, exports.quickSort)([2, 42, 1, 2, 6, 7]));
//# sourceMappingURL=quick-sort.js.map