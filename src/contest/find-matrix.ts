const findMatrix = (nums: number[]): number[][] => {
    const result: number[][] = [[]];
    const lastEntries = new Map<number, number>();
    for (const num of nums) {
        const lastEntry = lastEntries.get(num);
        if (lastEntry === undefined) {
            result[0].push(num);
            lastEntries.set(num, 0);
        } else {
            const newLastEntry = lastEntry + 1;
            if (result.length <= newLastEntry) {
                result.push([num]);
            } else {
                result[newLastEntry].push(num);
            }
            lastEntries.set(num, newLastEntry);
        }
    }

    return result;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
