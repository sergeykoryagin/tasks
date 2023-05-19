function isValidSudoku(board: string[][]): boolean {
    const SUDOKU_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowSets = new Map(SUDOKU_NUMBERS.map(num => [num - 1, new Set()]));
    const colSets = new Map(SUDOKU_NUMBERS.map(num => [num - 1, new Set()]));
    const boxSets = new Map(
        SUDOKU_NUMBERS.map(num => [
            `${num % 3}:${Math.floor((num - 1) / 3)}`,
            new Set(),
        ]),
    );

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const num = board[row][col];
            if (num === '.') {
                continue;
            }
            const rowItems = rowSets.get(row);
            const colItems = colSets.get(col);
            const boxItems = boxSets.get(
                `${Math.floor(row / 3)}:${Math.floor(col / 3)}`,
            );
            if (
                rowItems!.has(num) ||
                colItems!.has(num) ||
                boxItems!.has(num)
            ) {
                return false;
            }

            rowItems!.add(num);
            colItems!.add(num);
            boxItems!.add(num);
        }
    }

    return true;
}

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '3', '7', '9'],
];
console.log(isValidSudoku(board));
