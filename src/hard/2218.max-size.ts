export function maxValueOfCoins(piles: number[][], k: number): number {
    const counts = piles.map(pile =>
        pile.reduce((sum, coin, i) => {
            return sum + (i + 1 > k ? 0 : coin);
        }),
    );
    const indices = Array(counts.length).fill(0);
    let sum = 0;

    console.log(counts);
    console.log(indices);
    console.log();

    for (let i = 0; i < k; i++) {
        let maxCountIndex = 0;
        for (let j = 0; j < counts.length; j++) {
            if (counts[j] > counts[maxCountIndex]) {
                maxCountIndex = j;
            }
        }

        const coinIndex = indices[maxCountIndex];
        counts[maxCountIndex] -= piles[maxCountIndex][coinIndex];

        indices[maxCountIndex]++;
        sum += piles[maxCountIndex][coinIndex];

        for (let j = 0; j < counts.length; j++) {
            if (j === maxCountIndex) {
                continue;
            }

            const coinIndex = indices[j] + k - i - 1;
            if (coinIndex < piles[j].length) {
                counts[j] -= piles[j][coinIndex];
            }
        }

        console.log(counts);
        console.log(indices);
        console.log(sum);
        console.log();
        console.log();
        console.log();
    }

    return sum;
}

const piles = [[37, 88], [51, 64, 65, 20, 95, 30, 26], [9, 62, 20], [44]];
const k = 9;

console.log(maxValueOfCoins(piles, k));
