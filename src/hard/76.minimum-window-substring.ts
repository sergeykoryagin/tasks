const minWindow = (s: string, t: string): string => {
    if (t.length > s.length) {
        return '';
    }
    let res = '';

    const tMap = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }

    const sMap = new Map<string, number>();
    let left = 0;

    let have = 0;
    const need = t.length;

    while (left < s.length && !tMap.has(s[left])) {
        left++;
    }

    for (let right = left; right < s.length; right++) {
        const char = s[right];

        if (tMap.has(char)) {
            sMap.set(char, (sMap.get(char) || 0) + 1);
            have++;

            if (have < need) {
                continue;
            }

            let isValid = true;
            for (const key of tMap.keys()) {
                if (!sMap.has(key) || sMap.get(key)! < tMap.get(key)!) {
                    isValid = false;
                    break;
                }
            }
            if (!isValid) {
                continue;
            }

            const substring = s.slice(left, right + 1);

            if (!res || substring.length < res.length) {
                res = substring;
            }

            sMap.set(s[left], sMap.get(s[left])! - 1);
            left++;
            have--;

            while (left < right) {
                if (sMap.has(s[left])) {
                    break;
                }
                left++;
            }
        }
    }

    return res;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
