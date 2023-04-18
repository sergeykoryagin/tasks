const spiralOrder = (matrix: number[][]): number[] => {
    const result: number[] = [];
    const n = matrix.length;
    const m = matrix[0].length;

    let left = 0;
    let right = m - 1;
    let top = 0;
    let bottom = n - 1;

    while (left <= right || top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }

        for (let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }

        if (top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
        }

        if (left < right) {
            for (let i = bottom - 1; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }

        left++;
        right--;
        top++;
        bottom--;
    }

    return result;
};

export const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(spiralOrder(matrix1));

const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(spiralOrder(matrix2));
