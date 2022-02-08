/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-08 16:24:49
 * @LastEditTime: 2022-02-08 16:43:22
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
  let j = s.length -1;
  let sum = 0;
  let start = false; // 标记位
  while(j>=0){
    if(s[j]== ' '){  
      if(start){ // 最终停止的地方
        return sum;
      }
    }else{
      start = true;
      sum++
    }
    j--;
  }
  return sum;
};
// var lengthOfLastWord = function(s) {
//     return s.trim().split(' ').pop();
// };
// @lc code=end

