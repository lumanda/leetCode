/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-08 17:09:32
 * @LastEditTime: 2022-02-08 17:12:34
 */
/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replace(/\./g,'[.]')
};
console.log(defangIPaddr('1.1.1.1'));
// @lc code=end

