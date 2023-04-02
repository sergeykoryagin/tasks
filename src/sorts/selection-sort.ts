export const selectionSort = (numbers: number[]): number[] => {
    const result = [...numbers];

    for (let i = 0; i < result.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }
        const temp = result[i];
        result[i] = result[minIndex];
        result[minIndex] = temp;
    }

    return result;
}


console.log(selectionSort([2, 42, 1, 2, 6 ,7]));
