/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-08 16:45:29
 * @LastEditTime: 2022-02-08 17:06:27
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i=0,j=1;
  while(j<nums.length){
    // 和前一个不相等
    if(nums[j] !== nums[j-1]){
      nums[++i] = nums[j];
    }
    j++
  }
  return i+1;
};

// var removeDuplicates = function(nums) {
//   let i=0,j=1;
//   while(j<nums.length){
//     // 如果和前一个相等
//     if(nums[j] == nums[j-1]){
//       j++
//     }else{
//       // 如何和前一个不相等
//       nums[++i] = nums[j++];
//     }
//   }
//   return i+1;
// };
// @lc code=end

