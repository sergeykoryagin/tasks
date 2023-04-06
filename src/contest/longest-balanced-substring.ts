const findTheLongestBalancedSubstring = (s: string): number => {
    let maxOnes = 0;
    let zeroes = 0;
    let ones = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i - 1] === '1' && s[i] === '0') {
            ones = 0;
            zeroes = 0;
        }

        if (zeroes > ones && s[i] === '1') {
            ones++;
            if (ones > maxOnes) {
                maxOnes = ones;
            }
        }

        if (s[i] === '0') {
            zeroes++;
        }
    }
    return maxOnes * 2;
};

console.log(findTheLongestBalancedSubstring('00111100001111'));
