const merge = (intervals: [number, number][]): [number, number][] => {
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);

    const result: [number, number][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (result[result.length - 1][1] >= intervals[i][0]) {
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                intervals[i][1],
            );
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
};

const intervals1: [number, number][] = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
console.log(merge(intervals1));

const intervals2: [number, number][] = [
    [1, 4],
    [2, 3],
];
console.log(merge(intervals2));
