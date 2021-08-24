/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if (root) return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    return 0;
};
// @lc code=end

// var maxDepth = function(root) {
//     return (function equl(root, n) {
//         if (root) return Math.max(equl(root.left, n + 1), equl(root.right, n + 1));
//         return --n;
//     })(root, 1)
// };

// var maxDepth = function(root) {
//     return (function equl(root) {
//         if (root) return Math.max(equl(root.left), equl(root.right)) + 1;
//         return 0;
//     })(root)
// };