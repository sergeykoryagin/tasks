const addStrings = (num1: string, num2: string): string => {
    if (num1 === '0') {
        return num2;
    }
    if (num2 === '0') {
        return num1;
    }

    if (num1.length < num2.length) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    num2 = `${Array(num1.length - num2.length)
        .fill(0)
        .join('')}${num2}`;

    let curry = 0;
    let result = '';

    for (let i = num1.length - 1; i >= 0; i--) {
        const sum = Number(num1[i]) + Number(num2[i]) + curry;
        result = `${sum % 10}${result}`;
        curry = Math.trunc(sum / 10);
    }

    return curry ? curry + result : result;
};

export const num1 = '8123';
export const num2 = '4912';
console.log(addStrings(num1, num2));
