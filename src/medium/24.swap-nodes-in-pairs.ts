import { ListNode } from '../utils/list-node';

const swapPairs = (head: ListNode | null): ListNode | null => {
    if (!head || !head.next) {
        return head;
    }
    const tempHead = new ListNode(-1, head);
    let first: ListNode | null = tempHead;
    let second: ListNode | null = head;
    while (second && second.next) {
        const temp: ListNode | null = second.next;
        second.next = temp.next;
        temp.next = second;
        first.next = temp;

        first = second;
        second = first.next;
    }

    return tempHead.next;
};

const list = ListNode.fromArray([0, 10, 1, 2, 3, 4, 5, 6, 7, 8]);

ListNode.print(list);

const newHead = swapPairs(list);

ListNode.print(newHead);
