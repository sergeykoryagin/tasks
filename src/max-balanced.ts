export type OpenBracket = '(' | '[' | '{';
type CloseBracket = ')' | ']' | '}';

const isPair = (bracket1: string, bracket2: string) => {
    return bracket1 === '(' && bracket2 === ')' || bracket1 === '[' && bracket2 === ']' || bracket1 === '{' && bracket2 === '}'; 
};

const isOpenBracket = (bracket: string): bracket is OpenBracket => {
    return ['(', '[', '{'].includes(bracket);
};



function longestValidParentheses(str: string): number {
    let max = 0;
    let currentValidLength = 0;
    const bracketsStack: string[] = [];
    
    for (const currentBracket of str) {
        if (isOpenBracket(currentBracket)) {
            bracketsStack.push(currentBracket);
        } else {
            const lastBracket = bracketsStack.pop();

            if (lastBracket && isPair(lastBracket, currentBracket)) {
                currentValidLength += 2;
            } else {
                max = Math.max(max, currentValidLength)
                currentValidLength = 0;
            }
            
        }
    }
    
    return Math.max(currentValidLength, max);
};

console.log(longestValidParentheses('()(()'));