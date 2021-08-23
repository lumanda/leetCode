/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 1) return 0;
    var max = tempMax = (prices[1] - prices[0]) < 0 ? 0 : prices[1] - prices[0];
    for (var j = 2; j < prices.length; j++) {
        tempMax = Math.max(tempMax + prices[j] - prices[j - 1], prices[j] - prices[j - 1]);
        max = Math.max(max, tempMax);
    }
    return max;
};
// @lc code=end

// 先变成问题53 再求解
// var maxProfit = function(prices) {

//     for (var i = 0; i < prices.length - 1; i++) {
//         prices[i] -= prices[i + 1]
//     }
//     prices.pop();

//     var min = tempMin = prices[0];
//     for (var j = 1; j < prices.length; j++) {
//         tempMin = Math.min(prices[j] + tempMin, prices[j])
//         min = Math.min(min, tempMin);
//     }

//     return (-min)>0?(-min):0;
// };


// var maxProfit = function(prices) {
//     prices.reverse();

//     for (var i = 0; i < prices.length - 1; i++) {
//         prices[i] -= prices[i + 1]
//     }
//     prices.pop();

//     var max = 0,
//         tempMax = prices[0];
//     for (var j = 1; j < prices.length; j++) {
//         tempMax = Math.max(prices[j] + tempMax, prices[j])
//         max = Math.max(max, tempMax);
//     }
//     return max;
// };