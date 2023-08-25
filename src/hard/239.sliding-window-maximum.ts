interface DequeNode<T> {
    value: T;
    next: DequeNode<T> | null;
    prev: DequeNode<T> | null;
}

class Deque<T> {
    first: DequeNode<T> | null = null;
    last: DequeNode<T> | null = null;

    constructor() {}

    getFirst(): T | null {
        return this.first === null ? null : this.first.value;
    }

    getLast(): T | null {
        return this.last === null ? null : this.last.value;
    }

    push(value: T): void {
        if (!this.last) {
            this.last = {
                value,
                next: null,
                prev: null,
            };
            this.first = this.last;
        } else {
            this.last.next = {
                value,
                prev: this.last,
                next: null,
            };
            this.last = this.last.next;
        }
    }

    pop(): T | null {
        if (!this.last) {
            return null;
        }

        const value = this.last.value;
        this.last = this.last.prev;
        if (this.last) {
            this.last.next = null;
        } else {
            this.first = null;
        }

        return value;
    }

    shift(): T | null {
        if (!this.first) {
            return null;
        }

        const value = this.first.value;
        this.first = this.first.next;

        if (this.first) {
            this.first.prev = null;
        } else {
            this.last = null;
        }

        return value;
    }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque = new Deque<number>();

    let left = 0;
    let right = 0;

    while (right < nums.length) {
        while (
            deque.getLast() !== null &&
            nums[deque.getLast()!] < nums[right]
        ) {
            deque.pop();
        }
        deque.push(right);

        if (deque.getFirst() !== null && left > deque.getFirst()!) {
            deque.shift();
        }

        if (right + 1 >= k) {
            result.push(nums[deque.getFirst()!]);
            left++;
        }
        right++;
    }

    return result;
}

const nums1 = [1, 3, -1, -3, 5, 3, 6, 7];
const k1 = 3;

const result = maxSlidingWindow(nums1, k1);

console.log(result);
