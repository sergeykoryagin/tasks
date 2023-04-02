"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPair = (bracket1, bracket2) => {
    return bracket1 === '(' && bracket2 === ')' || bracket1 === '[' && bracket2 === ']' || bracket1 === '{' && bracket2 === '}';
};
const isOpenBracket = (bracket) => {
    return ['(', '[', '{'].includes(bracket);
};
function longestValidParentheses(str) {
    let max = 0;
    let currentValidLength = 0;
    const bracketsStack = [];
    for (const currentBracket of str) {
        if (isOpenBracket(currentBracket)) {
            bracketsStack.push(currentBracket);
        }
        else {
            const lastBracket = bracketsStack.pop();
            if (lastBracket && isPair(lastBracket, currentBracket)) {
                currentValidLength += 2;
            }
            else {
                max = Math.max(max, currentValidLength);
                currentValidLength = 0;
            }
        }
    }
    return Math.max(currentValidLength, max);
}
;
console.log(longestValidParentheses('()(()'));
//# sourceMappingURL=max-balanced.js.map