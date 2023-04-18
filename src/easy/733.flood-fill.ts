const toKey = (r: number, c: number) => `${r},${c}`;

const floodFill = (
    image: number[][],
    sr: number,
    sc: number,
    color: number,
): number[][] => {
    const m = image.length;
    const n = image[0].length;
    const currentColor = image[sr][sc];
    const stack: string[] = [];
    if (currentColor !== color) {
        stack.push(toKey(sr, sc));
    }
    while (stack.length) {
        const key = stack.pop()!;
        const [r, c] = key.split(',').map(val => +val);
        if (
            r > 0 &&
            !stack.includes(toKey(r - 1, c)) &&
            image[r - 1][c] === currentColor
        ) {
            stack.push(toKey(r - 1, c));
        }
        if (
            r < m - 1 &&
            !stack.includes(toKey(r + 1, c)) &&
            image[r + 1][c] === currentColor
        ) {
            stack.push(toKey(r + 1, c));
        }
        if (
            c > 0 &&
            !stack.includes(toKey(r, c - 1)) &&
            image[r][c - 1] === currentColor
        ) {
            stack.push(toKey(r, c - 1));
        }
        if (
            c < n - 1 &&
            !stack.includes(toKey(r, c + 1)) &&
            image[r][c + 1] === currentColor
        ) {
            stack.push(toKey(r, c + 1));
        }
        image[r][c] = color;
    }

    return image;
};

const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
];
const sr = 1;
const sc = 1;
const color = 2;

console.log(image);
floodFill(image, sr, sc, color);

console.log(image);
