/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    let arr = [];
    let temp;
    for (let i = 0, len = nums.length; i < len; i++) {
        obj[nums[i]] = target - nums[i]
        if (target - nums[i] in obj) {
            if (nums[i] == target - nums[i]) {
                // 如果相等,并且以后也有
                temp = nums.indexOf(target - nums[i], i + 1)
                if (temp > 0) {
                    arr.push(temp, i);
                    break;
                }
            } else {
                arr.push(nums.indexOf(target - nums[i], 0), i);
                break;
            }
        }
    }
    return arr;
};
// @lc code=end

//64 ms  39.2MB 
// var twoSum = function(nums, target) {
//     let obj ={};
//     let arr =[];
//     let temp;
//     for (let i=0,len=nums.length; i<len;i++) {
//         obj[nums[i]] = target-nums[i]
//         if(target-nums[i] in obj){
//             if(nums[i] == target -nums[i]){
//                 // 如果相等,并且以后也有
//                 temp = nums.indexOf(target-nums[i], i+1)
//                 if(temp > 0){
//                     arr.push(temp,i);
//                     break;
//                 }
//             }else{
//                 arr.push(nums.indexOf(target-nums[i],0),i);
//                 break;
//             }      
//         }
//     }
//     return arr;
// };

// 120ms 38.4MB
// var twoSum = function(nums, target) {
//     let arr =[];
//     let temp;
//     for (let i = 0,len=nums.length; i < len; i++) {
//         temp = nums.indexOf(target-nums[i],i+1) 
//         if( temp > i ){
//             arr.push(i,temp)
//         }
//     }
//     return arr;
// };