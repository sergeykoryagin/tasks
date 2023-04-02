"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeKLists = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function mergeKLists(lists) {
    const ptrs = new Set(lists);
    let result = null;
    let ptr = null;
    ptrs.delete(null);
    while (ptrs.size) {
        let minList = null;
        for (const list of ptrs.values()) {
            if (!minList || list.val < minList.val) {
                minList = list;
            }
        }
        if (!ptr) {
            result = minList;
            ptr = result;
        }
        else {
            ptr.val = minList.val;
        }
        ptrs.add(minList.next);
        ptrs.delete(minList);
        ptrs.delete(null);
        if (ptrs.size) {
            ptr.next = new ListNode();
            ptr = ptr.next;
        }
    }
    return result;
}
exports.mergeKLists = mergeKLists;
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
const lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
];
console.log(mergeKLists(lists));
//# sourceMappingURL=23.merge-k-lists.js.map