/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * s = ["h","e","l","l","o"]
 * s = ["H","a","n","n","a","h"]
 */
var val = ["H","a","n","n","a","h"]
var reverseString = function(s) {
    for(let i = 0; i < Math.ceil(s.length / 2); i++) {
        let temp = s[i]
        s[i] = s[(s.length - 1) - i]
        s[(s.length - 1) - i] = temp
    }
    return s
};

console.log(reverseString(val))