import { ListNode } from '../utils/list-node';

const rotateHelper = (head: ListNode): ListNode => {
    if (!head.next) {
        return head;
    }
    let current: ListNode = head;
    while (current.next!.next) {
        current = current.next!;
    }

    const newHead = current.next;
    current.next!.next = head;
    current.next = null;

    return newHead!;
};

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
    if (!head || !head.next || k === 0) {
        return head;
    }
    const tempHead = new ListNode(-1, head);

    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }

    const count = k % length;

    for (let i = 0; i < count; i++) {
        tempHead.next = rotateHelper(tempHead.next!);
    }

    return tempHead.next;
};

const list = ListNode.fromArray([1, 2, 3, 4, 5, 6]);
console.log(rotateRight(list, 7));
