const countBits = (n: number): number[] => {
    const result: number[] = [0];
    for (let i = 1; i <= n; i++) {
        result.push(result[Math.floor(i / 2)] + (i % 2));
    }
    return result;
};

console.log(countBits(8));
