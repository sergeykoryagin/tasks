import { ListNode } from '../utils/list-node';

const mergeLists = (list1: ListNode | null, list2: ListNode | null) => {
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    let l1: ListNode | null = list1;
    let l2: ListNode | null = list2;

    const head = l1.val < l2.val ? l1 : l2;
    if (head === l1) {
        l1 = l1.next;
    } else {
        l2 = l2.next;
    }

    let current: ListNode = head;
    while (l1 || l2) {
        if (!l1) {
            current.next = l2;
            l2 = l2!.next;
        } else if (!l2) {
            current.next = l1;
            l1 = l1!.next;
        } else if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1!.next;
        } else {
            current.next = l2;
            l2 = l2!.next;
        }
        current = current.next!;
    }

    return head;
};

const sortList = (head: ListNode | null): ListNode | null => {
    if (!head || !head.next) {
        return head;
    }

    let prevSlow: ListNode | null = null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast?.next) {
        fast = fast.next?.next || null;
        prevSlow = slow;
        slow = slow.next!;
    }
    prevSlow!.next = null;

    return mergeLists(sortList(head), sortList(slow));
};

export const list = ListNode.fromArray([2, 4, 1, 6, 3, 5, 11]);
ListNode.print(list);
const newHead = sortList(list);
ListNode.print(newHead);
