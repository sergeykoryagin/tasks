export const bubbleSort = (numbers: number[]): number[] => {
    const result = [...numbers];

    let isSorted  = false;
    for (let i = 0; i < result.length && !isSorted; i++) {
        isSorted = true;
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
                isSorted = false;
            }
        }
    }

    return result;
}


console.log(bubbleSort([2, 42, 1, 2, 6 ,7]));
