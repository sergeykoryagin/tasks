import { ListNode } from './utils/list-node';

const deleteMiddleHelper = (
    node: ListNode | null,
    prevIndex: number,
): number => {
    if (!node) {
        return prevIndex + 1;
    }

    const currentIndex = prevIndex + 1;
    const listLength = deleteMiddleHelper(node.next, currentIndex);

    if (currentIndex === Math.floor(listLength / 2) - 1) {
        node.next = node.next?.next || null;
    }

    return listLength;
};

const deleteMiddle = (head: ListNode | null): ListNode | null => {
    if (!head || !head.next) {
        return null;
    }
    deleteMiddleHelper(head, -1);
    return head;
};

const list = ListNode.fromArray([1, 2, 3, 4, 5, 6, 7]);

ListNode.print(list);

deleteMiddle(list);

ListNode.print(list);
