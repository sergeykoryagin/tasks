/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from '../utils/list-node';

const getEndOfGroup = (start: ListNode, k: number): ListNode | null => {
    let count = 0;
    let current: ListNode | null = start;

    while (current && count < k - 1) {
        count++;
        current = current.next;
    }

    return current;
};

const reverseGroup = (prev: ListNode, start: ListNode, end: ListNode) => {
    let prevCurrent = null;
    let current: ListNode = start;
    let next = start.next;
    start.next = end.next;

    while (current !== end) {
        current.next = prevCurrent;
        prevCurrent = current;
        current = next!;
        next = next!.next;
    }

    return prevCurrent!;
};

const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {
    if (!head || !head.next || k === 1) {
        return head;
    }

    const tempHead = new ListNode(-1, head);

    let current = tempHead;

    while (current.next) {
        const endOfGroup = getEndOfGroup(current.next, k);
        if (endOfGroup === null) {
            break;
        }

        const nextCurrent = reverseGroup(current, current.next, endOfGroup);

        current = nextCurrent;
    }

    return tempHead.next;
};

const list1 = ListNode.fromArray([1, 2, 3, 4, 5]);
const k1 = 3;

const result = reverseKGroup(list1, k1);

ListNode.print(result);
