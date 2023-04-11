const between = (target: number, left: number, right: number): boolean =>
    target >= left && target <= right;

export const findBall = (grid: number[][]): number[] => {
    const n = grid.length;
    const m = grid[0].length;
    if (m === 1) {
        return [-1];
    }

    const result: number[] = [];

    for (let j = 0; j < m; j++) {
        let col = j;
        let row = 0;
        while (between(col, 0, m - 1) && row < n) {
            const direction = grid[row][col];
            if (direction === -1 && (col === 0 || grid[row][col - 1] === 1)) {
                break;
            }
            if (
                direction === 1 &&
                (col === m - 1 || grid[row][col + 1] === -1)
            ) {
                break;
            }
            col += direction;
            row++;
        }

        result.push(between(col, 0, m - 1) && row === n ? col : -1);
    }

    return result;
};
//
// const grid1 = [
//     [1, 1, 1, -1, -1],
//     [1, 1, 1, -1, -1],
//     [-1, -1, -1, 1, 1],
//     [1, 1, 1, 1, -1],
//     [-1, -1, -1, -1, -1],
// ];
// console.log(findBall(grid1));

const grid2 = [
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
];
console.log(findBall(grid2));
