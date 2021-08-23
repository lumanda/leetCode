/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var small = [];
    var a = 0;
    var obj = {
        '(':')',
        '{':'}',
        '[':']'
    };
    while(a<s.length){

        if(small.length>0){
            var temp = small.pop();
            if(obj[temp] !== s[a]){
                small.push(temp,s[a])
            }
        }else{
            if(s[a] === ')' || s[a] === '}' || s[a] === ']'){
                return false;
            }
            small.push(s[a])
        }
        a++
    }

    return small.length>0?false:true;
};
// @lc code=end

// 76 ms  38.5 MB
// var isValid = function(s) {
//     var small = [];
//     var a = 0;
//     var obj = {
//         '(':')',
//         '{':'}',
//         '[':']'
//     };
//     while(a<s.length){

//         if(small.length>0){
//             var temp = small.pop();
//             if(obj[temp] !== s[a]){
//                 small.push(temp,s[a])
//             }
//         }else{
//             small.push(s[a])
//         }
//         a++
//     }

//     return small.length>0?false:true;
// };

// 60ms  37.8 MB
// var isValid = function(s) {
//     var small = [];
//     var a = 0;
//     var obj = {
//         '(':')',
//         '{':'}',
//         '[':']'
//     };
//     while(a<s.length){

//         if(small.length>0){
//             var temp = small.pop();
//             if(obj[temp] !== s[a]){
//                 small.push(temp,s[a])
//             }
//         }else{
//             if(s[a] === ')' || s[a] === '}' || s[a] === ']'){
//                 return false;
//             }
//             small.push(s[a])
//         }
//         a++
//     }

//     return small.length>0?false:true;
// };