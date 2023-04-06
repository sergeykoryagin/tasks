const combinationSumHelper = (
    candidates: number[],
    target: number,
    lastIndex: number,
    currentSum: number,
    currentCandidates: number[],
    result: number[][],
) => {
    if (currentSum === target) {
        result.push(currentCandidates);
    }
    if (currentSum >= target) {
        return;
    }

    for (let i = lastIndex; i < candidates.length; i++) {
        const candidate = candidates[i];
        const newCandidates = [...currentCandidates, candidate];
        combinationSumHelper(
            candidates,
            target,
            i,
            currentSum + candidate,
            newCandidates,
            result,
        );
    }
};

export const combinationSum = (
    candidates: number[],
    target: number,
): number[][] => {
    const result: number[][] = [];

    combinationSumHelper(candidates, target, 0, 0, [], result);

    return result;
};

const showResult = (candidates: number[], target: number) => {
    console.log('candidates', candidates);
    console.log('target', target);
    console.log(combinationSum(candidates, target), '\n');
};

const candidates1 = [2, 3, 6, 7];
const target1 = 7;
showResult(candidates1, target1);

const candidates2 = [2, 3, 5];
const target2 = 8;
showResult(candidates2, target2);

const candidates3 = [2];
const target3 = 1;
showResult(candidates3, target3);
