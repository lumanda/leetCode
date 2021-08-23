/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var temp = nums[0];
    for (var i = 1; i < nums.length; i++) {
        temp ^= nums[i]
    }
    return temp;
};
// @lc code=end

// var singleNumber = function(nums) {
//     return nums.reduce((a,b)=>a^b);
//  };