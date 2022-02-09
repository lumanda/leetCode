/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-09 10:13:43
 * @LastEditTime: 2022-02-09 12:22:27
 */
/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var len = matrix.length;
  // 对角线交换
  for(var n = len-1;n>0;n--){
    var x = len - 1 - n; // 水平轴坐标
    for(var y = 0;y < n; y++){ // 垂直轴坐标
      [matrix[x][y],matrix[x+n-y][n]] = [matrix[x+n-y][n],matrix[x][y]];  
    }
  }
  // 上下交换
  // i 是行，j是列
  for(var j = 0;j<len;j++){
    for(var i = 0;i<Math.floor(len/2);i++){
      [matrix[i][j],matrix[len-1-i][j]] = [matrix[len-1-i][j],matrix[i][j]];  
    }
  }
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
// @lc code=end

