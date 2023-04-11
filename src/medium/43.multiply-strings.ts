const multiply = (num1: string, num2: string): string => {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    const multiplyProduct = Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            multiplyProduct[i + j + 1] += Number(num1[i]) * Number(num2[j]);
            multiplyProduct[i + j] += Math.trunc(
                multiplyProduct[i + j + 1] / 10,
            );
            multiplyProduct[i + j + 1] %= 10;
        }
    }
    let i = 0;
    while (multiplyProduct[i] === 0) {
        i++;
    }

    let result = '';
    while (i < multiplyProduct.length) {
        result += `${multiplyProduct[i++]}`;
    }

    return result;
};

// export const num1_1 = '21';
// export const num2_1 = '13';
// console.log(multiply(num1_1, num2_1));

export const num1_2 = '123';
export const num2_2 = '456';
console.log(multiply(num1_2, num2_2));
