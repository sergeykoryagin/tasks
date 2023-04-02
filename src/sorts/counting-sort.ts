export const countingSort = (numbers: number[]): number[] => {
    const result: number[] = [];

    let min = Infinity;
    let max = -Infinity;
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }

    const range = max - min + 1;

    const counts = Array(range).fill(0);

    for (const num of numbers) {
        counts[num - min]++;
    }

    for (let i = 0; i < counts.length; i++) {
        for (let j = 0; j < counts[i]; j++) {
            result.push(i + min);
        }
    }

    return result;
}


console.log(countingSort([2, 42, 1, 2, 6 ,7]));


