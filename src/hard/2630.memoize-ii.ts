type Fn = (...params: any) => any;

export interface Trie {
    val?: any;
    map?: Map<any, Trie>;
}

function memoize(fn: Fn): Fn {
    const results: Map<any, Trie> = new Map();
    return function (...params: any) {
        let current = results;
        for (let i = 0; i < params.length; i++) {
            const param = params[i];
            if (!current.has(param)) {
                if (i === params.length - 1) {
                    const result = fn(...params);
                    current.set(param, {
                        val: result,
                    });
                    return result;
                } else {
                    const next = new Map();
                    current.set(param, {
                        map: next,
                    });
                    current = current.get(param)!.map!;
                }
            } else {
                if (i === params.length - 1) {
                    if (current.get(param)?.val === undefined) {
                        const result = fn(...params);
                        current.set(param, {
                            ...current.get(param)!.map,
                            val: result,
                        });
                        return result;
                    }
                    return current.get(param)!.val;
                } else {
                    current = current.get(param)!.map!;
                }
            }
        }
    };
}

const memoized = memoize(function (...arr: number[]) {
    return arr.reduce((a: number, b: number) => a + b, 0);
});

memoized(1, 1, 1);
memoized(1, 1);
memoized(1);
memoized(1, 1);
memoized(1, 1, 1);

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
