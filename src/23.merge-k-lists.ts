import {ListNode} from "./utils/list-node";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const ptrs = new Set<ListNode | null>(lists);
    let result: ListNode | null = null;
    let ptr: ListNode | null = null;
    ptrs.delete(null);
    while (ptrs.size) {
        let minList: ListNode | null = null;

        for (const list of ptrs.values()) {
            if (!minList || list!.val < minList.val) {
                minList = list;
            }
        }

        if (!ptr) {
            result = minList;
            ptr = result;
        } else {
            ptr.val = minList!.val;
        }

        ptrs.add(minList!.next);
        ptrs.delete(minList);
        ptrs.delete(null);

        if (ptrs.size) {
            ptr!.next = new ListNode();
            ptr = ptr!.next;
        }
    }

    return result;
}


// Input: lists = [[1,4,5],[1,3,4],[2,6]]
const lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6,)),
];

console.log(mergeKLists(lists));
