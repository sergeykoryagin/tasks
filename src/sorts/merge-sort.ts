
export const merge = (arr1: number[], arr2: number[]): number[] => {
    const result = [];
    let ptr1 = 0;
    let ptr2 = 0;
    while (ptr1 < arr1.length || ptr2 < arr2.length) {
        if (ptr2 >= arr2.length) {
            result.push(arr1[ptr1++]);
        } else if (ptr1 >= arr1.length) {
            result.push(arr2[ptr2++]);
        } else if (arr1[ptr1] < arr2[ptr2]) {
            result.push(arr1[ptr1++]);
        } else {
            result.push(arr2[ptr2++]);
        }
    }
    return result;
};

export const mergeSort = (numbers: number[]): number[] => {
    if (numbers.length <= 1) {
        return numbers;
    }

    return merge(
        mergeSort(numbers.slice(0, numbers.length / 2)),
        mergeSort(numbers.slice(numbers.length / 2))
    );
}


console.log(mergeSort([2, 42, 1, 2, 6 ,7]));
