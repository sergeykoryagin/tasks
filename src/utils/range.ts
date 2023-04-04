export const range = (left: number, right: number, step = 1) =>
    Array(right - left + 1)
        .fill(0)
        .map((left: number, i) => left + step * i);
