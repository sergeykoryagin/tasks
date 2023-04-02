"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
const swapPairs = (head) => {
    let current = head;
    let next = current === null || current === void 0 ? void 0 : current.next;
    while (current && next) {
        current.next = next.next;
        next.next = current;
        current = current === null || current === void 0 ? void 0 : current.next;
        next = current === null || current === void 0 ? void 0 : current.next;
    }
    return head;
};
console.log('kek');
//# sourceMappingURL=24.%20Swap%20Nodes%20in%20Pairs.js.map