export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const swapPairs = (head: ListNode | null): ListNode | null => {
    if (!head?.next) {
        return head;
    }
    
    let current: ListNode | null | undefined = head;
    let next: ListNode | null | undefined = current.next;
    while (current && next) {
        current.next = next.next;
        next.next = current;
        current = current?.next;
        next = current?.next;
    }

    return head;
}

const head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4
            )
        )
    )
);

swapPairs(head);

console.log(head)
