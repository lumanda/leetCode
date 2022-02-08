/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-08 15:58:19
 * @LastEditTime: 2022-02-08 16:14:59
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let s = (x).toString();
  let i = 0;
  let j = s.length-1;
  while(i<j){
    if(s[i++] !== s[j--]){
      return false
    }  
  }
  return true
};
// @lc code=end

