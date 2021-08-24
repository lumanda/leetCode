/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var max = 0;
    (function maxDepth(root) {
        if (root == null) return 0;
        var tempLeft = 0; // 左子树的深度
        var tempRight = 0; // 右子树的深度
        tempLeft = maxDepth(root.left);
        tempRight = maxDepth(root.right);
        // 这里的1 是递归里加一，后面减一也只是减了一个一
        if (tempLeft + tempRight + 1 > max) max = tempLeft + tempRight + 1
        return Math.max(tempLeft, tempRight) + 1;
    })(root)
    return max - 1;
};
// @lc code=end

// var diameterOfBinaryTree = function(root) {
//     var max = 0;
//     (function maxDepth(root) {
//         var maxTemp = 0; // 整个树的深度
//         var tempLeft = 0; // 左子树的深度
//         var tempRight = 0; // 右子树的深度
//         if (root.left) {
//             tempLeft = maxDepth(root.left) + 1;
//             maxTemp += tempLeft;
//         }
//         if (root.right) {
//             tempRight = maxDepth(root.right) + 1;
//             maxTemp += tempRight;
//         }
//         if (root.left == null && root.right == null) {
//             maxTemp = 0;
//             tempLeft = 0;
//             tempRight = 0;
//         }
//         if (maxTemp > max) max = maxTemp
//         return Math.max(tempLeft, tempRight);
//     })(root)
//     return max;
// };