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
    if (!(head === null || head === void 0 ? void 0 : head.next)) {
        return head;
    }
    let current = head;
    let next = current.next;
    while (current && next) {
        current.next = next.next;
        next.next = current;
        current = current === null || current === void 0 ? void 0 : current.next;
        next = current === null || current === void 0 ? void 0 : current.next;
    }
    return head;
};
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
swapPairs(head);
console.log(head);
//# sourceMappingURL=24.swap-nodes-in-pairs.js.map