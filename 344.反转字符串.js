/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var low = 0,
        high = s.length - 1,
        temp;
    while (low < high) {
        temp = s[low];
        s[low] = s[high];
        s[high] = temp;
        low++
        high--
    }
};
// @lc code=end

// var reverseString = function(s) {
//     var temp
//     for (var i = 0, len = s.length; i < ~~(len / 2); i++) {
//         temp = s[i];
//         s[i] = s[len - i - 1];
//         s[len - i - 1] = temp
//     }
// };