/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-09 12:35:55
 * @LastEditTime: 2022-02-09 15:22:21
 */
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var up = 0,
      down = matrix.length -1,
      left=0,
      right =matrix[0].length -1; // 边界
  var i=0,j=0; // i 是行号 j是列号
  var direction = 'right';
  var arr = [];
  while(up<=down&&left<=right){
    switch(direction){
      case 'right':
        if(j==right){
          up++;
          direction = 'down';
          arr.push(matrix[i][j]);
          i++;
        }else{
          arr.push(matrix[i][j]);
          j++;
        }
        break;
      case 'down':
        if(i==down){
          right--;
          direction = 'left';
          arr.push(matrix[i][j]);
          j--;
        }else{
          arr.push(matrix[i][j]);
          i++;
        }
        break;
      case 'left':
        if(j==left){
          down--;
          direction = 'up';
          arr.push(matrix[i][j]);
          i--;
        }else{
          arr.push(matrix[i][j]);
          j--;
        }
      break;
      case 'up':
        if(i==up){
          left++;
          direction = 'right';
          arr.push(matrix[i][j]);
          j++;
        }else{
          arr.push(matrix[i][j]);
          i--;
        }
        break;
    }
  }
  return arr;
};
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// @lc code=end

