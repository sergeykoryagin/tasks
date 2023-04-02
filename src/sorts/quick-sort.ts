

export const quickSort = (numbers: number[]): number[] => {
    const result: number[] = [...numbers];



    return quickSort(result);
};


console.log(quickSort([2, 42, 1, 2, 6, 7]));
