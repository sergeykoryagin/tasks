"use strict";
const jopa = (acc, val) => ({ kek15: acc.kek15 + val });
const arr = [2, 2, 1];
console.log(arr.reduce(jopa, { kek15: 0 }));
//# sourceMappingURL=test.js.map