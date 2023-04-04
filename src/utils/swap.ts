
export const swap = <T>(array: T[], index1: number, index2: number) => {
    if (array[index1] === undefined || array[index2] === undefined) {
        return;
    }
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}