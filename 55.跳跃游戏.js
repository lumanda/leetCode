/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-08 17:17:33
 * @LastEditTime: 2022-02-09 09:53:40
 */
/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 记录一个可达Max，
// 大于最后一个位置下标即可证明到达
var canJump = function(nums) {
  let len = nums.length
  let i = 0;
  let reachMax = 0;
  while(i<=len-1&&i<=reachMax){
    let temp = nums[i]
    if(temp+i>=reachMax) {
      reachMax = temp +i;
      if(reachMax >= len-1){
        return true;
      }
    }
    i++;
  }
  return false;
};
console.log(canJump([3,2,1,0,4]))


// // 维护一个可达数组，记录每一个位置是否可达
// // 如果可达就可以从这里触发
// var canJump = function(nums) {
//   let len = nums.length
//   let i = 0;
//   let cacheArray = [1];
//   while(i<=len-1&&cacheArray[i]==1){
//     let temp = nums[i]
//     while(temp>=0){
//       if(temp+i>=len - 1) return true;
//       cacheArray[temp+i] = 1;
//       temp--
//     }
//     i++
//   }
//   return false;
// };
// console.log(canJump([3,2,1,0,4]))

// @lc code=end

