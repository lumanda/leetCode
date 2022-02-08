/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-08 14:42:55
 * @LastEditTime: 2022-02-08 15:45:18
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let i = 0;
  let j = s.length-1;
  while(i<j){
    if(s[i++] !== s[j--]) return false;
  }
  return true;
};
//  var isPalindrome = function(s) {
//   // 特殊处理空的情况 ''
//   if(s.length==0) return true
//   s = s.toLowerCase(); // 变为小写
//   let i = 0;
//   let j = s.length-1;
//   while(i<j){
//     if(!checkchar(s[i])){
//       i++;
//       continue;
//     }
//     if(!checkchar(s[j])){
//       j--;
//       continue;
//     }
//     if(s[i] == s[j]){
//       i++;
//       j--;
//     }else{
//       return false;
//     }
//   }
//   return true;
// };

// // 校验是否是数字或字母
// function checkchar(sub){
//   return sub>='a'&&sub<='z'||sub>='0'&&sub<='9'
// }

// var isPalindrome = function(s) {
//   // 特殊处理空的情况 ''
//   if(s.length==0) return true
  
//   let i = 0;
//   let j = s.length-1;
//   while(i<j){
//     if(checkchar(s[i])){
//       i++;
//       continue;
//     }
//     if(checkchar(s[j])){
//       j--;
//       continue;
//     }
//     if(character(s[i]) == character(s[j])){
//       i++;
//       j--;
//     }else{
//       return false;
//     }
//   }
//   return true;
// };
// // 校验大小写
// function character(sub){
//   var code = sub.charCodeAt()
//   if(code>=65&&code<=90){
//     return code + 32
//   }
//   return code;
// }
// // 校验是否是数字或字母
// function checkchar(sub){
//   var code = sub.charCodeAt()
//   if(code>=65&&code<=90||code>=97&&code<=122||code>=48&&code<=57){
//     return false
//   }
//   return true;
// }
// @lc code=end

