"use strict";
const isPair = (bracket1, bracket2) => {
    return bracket1 === '(' && bracket2 === ')' || bracket1 === '[' && bracket2 === ']' || bracket1 === '{' && bracket2 === '}';
};
const isOpenBracket = (bracket) => {
    return ['(', '[', '{'].includes(bracket);
};
const isCloseBracket = (bracket) => {
    return [')', ']', '}'].includes(bracket);
};
const isBalanced = (str) => {
    if (str.length % 2 !== 0) {
        return false;
    }
    const bracketsStack = [];
    for (const currentBracket of str) {
        if (isOpenBracket(currentBracket)) {
            bracketsStack.push(currentBracket);
        }
        else if (isCloseBracket(currentBracket)) {
            const lastBracket = bracketsStack.pop();
            if (!lastBracket) {
                return false;
            }
            if (!isPair(lastBracket, currentBracket)) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return !bracketsStack.length;
};
console.log(isBalanced('([{}]()[]){}}{'));
//# sourceMappingURL=is-balanced.js.map