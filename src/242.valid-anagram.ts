export const validAnagram = (s: string, t: string) => {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

    return [...map.values()].every(value => value === 0);
};

const s1 = 'anagram';
const t1 = 'nagaram';

console.log(s1, t1, validAnagram(s1, t1));

const s2 = 'rat';
const t2 = 'car';
console.log(s2, t2, validAnagram(s2, t2));
