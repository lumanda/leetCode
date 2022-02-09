/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-09 15:49:54
 * @LastEditTime: 2022-02-09 16:32:52
 */
/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 从 右上角开始判断，
// 这个位置既是一行的最大，同时又是一列的最小
var searchMatrix = function(matrix, target) {
  var xMax = matrix.length - 1;
  var y = matrix[0].length - 1;
  var x = 0;
  while(y>=0&&x<=xMax){
    if(target < matrix[x][y]){
      y--
    }else if(target > matrix[x][y]){
      x++
    }else {
      return true;
    }
  }
  return false;
};
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],27))
// @lc code=end

