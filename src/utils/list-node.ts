export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }

    static fromArray(arr: number[]): ListNode | null {
        if (arr.length === 0) {
            return null;
        }
        const list = new ListNode(arr[0]);
        let current = list;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return list;
    }

    static print(list: ListNode | null, printFn = console.log): void {
        if (!list) {
            return printFn('The list is empty');
        }
        let current: ListNode | null = list;
        let printResult: string[] = [];
        while (current) {
            const hasNext = !!current.next;
            const result = `${current.val}${hasNext ? '->' : ''}`;
            printResult.push(result);
            current = current.next;
        }
        printFn(`${printResult.join('')}\n`);
    }
}

