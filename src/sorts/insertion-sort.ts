export const insertionSort = (numbers: number[]): number[] => {
    const result = [...numbers];

    for (let i = 1; i < result.length; i++) {
        let j = i;
        while (j > 0 && result[j - 1] > result[j]) {
            const temp = result[j - 1];
            result[j - 1] = result[j];
            result[j] = temp;
            j--;
        }
    }

    return result;
}


console.log(insertionSort([2, 42, 1, 2, 6 ,7]));
