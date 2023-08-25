import { ListNode } from '../utils/list-node';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || !head.next) {
        return null;
    }

    let range = 0;

    const tempHead = new ListNode(-1, head);

    let prevTarget: ListNode | null = tempHead;
    let fast: ListNode | null = tempHead;

    while (fast.next) {
        if (range == n) {
            prevTarget = prevTarget!.next;
        } else {
            range++;
        }
        fast = fast.next;
    }

    if (prevTarget) {
        prevTarget.next = prevTarget.next?.next || null;
    }

    return tempHead.next;
}

const list = ListNode.fromArray([1, 2, 3, 4, 5]);

ListNode.print(removeNthFromEnd(list, 2));
