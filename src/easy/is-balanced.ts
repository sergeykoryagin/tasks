type OpenBracket = '(' | '[' | '{';
type CloseBracket = ')' | ']' | '}';

const isPair = (bracket1: string, bracket2: string) => {
    return bracket1 === '(' && bracket2 === ')' || bracket1 === '[' && bracket2 === ']' || bracket1 === '{' && bracket2 === '}'; 
};

const isOpenBracket = (bracket: string): bracket is OpenBracket => {
    return ['(', '[', '{'].includes(bracket);
};

const isCloseBracket = (bracket: string): bracket is CloseBracket => {
    return [')', ']', '}'].includes(bracket);
};


const isBalanced = (str: string): boolean => {
    if (str.length % 2 !== 0) {
        return false;
    }

    const bracketsStack: string[] = [];
    for (const currentBracket of str) {
        if (isOpenBracket(currentBracket)) {
            bracketsStack.push(currentBracket);
        } else if (isCloseBracket(currentBracket)) {
            const lastBracket = bracketsStack.pop();
            if (!lastBracket) {
                return false;
            }
            if (!isPair(lastBracket, currentBracket)) {
                return false;
            }
        } else {
            return false;
        }
    }
    return !bracketsStack.length;
};


console.log(isBalanced('([{}]()[]){}}{'));