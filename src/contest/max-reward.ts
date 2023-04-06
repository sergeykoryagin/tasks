function miceAndCheese(
    reward1: number[],
    reward2: number[],
    k: number,
): number {
    if (k === reward1.length) {
        return reward1.reduce((acc, reward) => acc + reward);
    }
    if (k === 0) {
        return reward2.reduce((acc, reward) => acc + reward);
    }

    let maxReward = 0;
    let count = 0;

    let minMaxDiffIndex = 0;

    for (let i = 0; i < reward1.length; i++) {
        const diff = reward1[i] - reward2[i];
        const minMaxDiff = reward1[minMaxDiffIndex] - reward2[minMaxDiffIndex];
        if (count < k) {
            count++;
            if (diff > 0) {
                maxReward += reward1[i];
                if (diff < minMaxDiff) {
                    minMaxDiffIndex = i;
                }
            }
        }
    }

    return maxReward;
}

const reward1 = [3, 3, 8, 4];
const reward2 = [4, 4, 4, 4];
const k = 2;

console.log(miceAndCheese(reward1, reward2, k));
