/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};
// @lc code=end

// 88ms 39.4MB
// var reverse = function(x) {
//     var str = String(x)
//     var newStr = '';
//     var flag = true;
//     for(let len=str.length,i=len-1;i>-1;i--){
//         if(i==0&&str[i]=='-'){
//             newStr = '-' + newStr
//         }else{
//             if(str[i] === '0'&&flag){ continue;}
//             flag = false;
//             newStr+=str[i];
//         }
//     }
//     newStr = Number(newStr)
//     if(newStr<=Math.pow(2,31)-1 && newStr>=-Math.pow(2,31) ){
//         return newStr; 
//     }
//     return  0
// };




// var reverse = function(x) {
//     let rev = 0;
//     while (x !== 0) {
//         const digit = x % 10;
//         x = ~~(x / 10);
//         rev = rev * 10 + digit;
//         if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
//             return 0;
//         }
//     }
//     return rev;
// };