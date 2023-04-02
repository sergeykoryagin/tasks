"use strict";
const reverseBits = (n) => {
    let currentNum = n;
    let bits = '';
    while (currentNum >= 1) {
        bits = `${currentNum % 2}${bits}`;
        currentNum = Math.floor(currentNum / 2);
    }
    bits = `${Array(32 - bits.length).fill(0).join('')}${bits}`;
    return bits
        .split('')
        .reduce((acc, num, index) => {
        return acc + (Number(num) * 2 ** index);
    }, 0);
};
const num = 43261596;
const output = reverseBits(num);
console.log(output);
//# sourceMappingURL=190.reverse-bits.js.map