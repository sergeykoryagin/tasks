export class ListNode<T = number> {
    val: T;
    next: ListNode<T> | null;

    constructor(val: T, next?: ListNode<T> | null) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }

    static fromArray<T>(arr: T[]): ListNode<T> | null {
        if (arr.length === 0) {
            return null;
        }
        const list = new ListNode<T>(arr[0]);
        let current = list;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode<T>(arr[i]);
            current = current.next;
        }
        return list;
    }

    static print<T>(list: ListNode<T> | null, printFn = console.log): void {
        if (!list) {
            return printFn('The list is empty');
        }
        let current: ListNode<T> | null = list;
        const printResult: string[] = [];
        while (current) {
            const hasNext = !!current.next;
            const result = `${current.val}${hasNext ? '->' : ''}`;
            printResult.push(result);
            current = current.next;
        }
        printFn(`${printResult.join('')}\n`);
    }
}
