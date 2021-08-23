/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n];
};
// @lc code=end


// var climbStairs = function(n) {
//     if (n == 1) {
//         return 1;
//     } else if (n == 2) {
//         return 2
//     } else {
//         var a = 1;
//         var b = 2;
//         var temp = 0
//         for (var i = 3; i <= n; i++) {
//             temp = a + b;
//             a = b;
//             b = temp;
//         }
//     }
//     return temp;
// };


// var climbStairs = function(n) {
//     const arr = [1, 1];
//     for (let i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr[n];
// };