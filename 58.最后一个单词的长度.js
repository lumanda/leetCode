/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-08 16:24:49
 * @LastEditTime: 2022-02-08 16:26:40
 */
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop();
};
// @lc code=end

