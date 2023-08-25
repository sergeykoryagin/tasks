import { ListNode } from '../utils/list-node';

const reverse = (head: ListNode | null): ListNode | null => {
    if (!head) {
        return head;
    }

    let prev = null;
    let next = head.next;

    while (next) {
        head.next = prev;
        prev = head;
        head = next;
        next = next.next;
    }
    head.next = prev;

    return head;
};

const merge = (list1: ListNode | null, list2: ListNode | null): void => {
    let l1 = list1;
    let l2 = list2;

    const tempHead = new ListNode(0);

    let isL1Turn = true;
    let current = tempHead;

    while (l1 || l2) {
        if (!l1) {
            current!.next = l2;
            break;
        }
        if (!l2) {
            current!.next = l1;
            break;
        }
        if (isL1Turn) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current!.next;
        isL1Turn = !isL1Turn;
    }
};

const reorderList = (head: ListNode | null): void => {
    if (!head || !head.next) {
        return;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow!.next;
    }
    const temp = slow!.next;
    slow!.next = null;
    slow = temp;

    const list1 = head;
    const list2 = reverse(slow!);

    merge(list1, list2);
};

const list = ListNode.fromArray([1, 2]);

reorderList(list);

ListNode.print(list);
