/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    let left = invertTree(root.right);
    let right = invertTree(root.left);
    root.left = left
    root.right = right;
    return root
};
// @lc code=end


// var invertTree = function(root) {
//     if (!root) return null;
//     var temp = root.left;
//     root.left = root.right;
//     root.right = temp;
//     invertTree(root.left);
//     invertTree(root.right);
//     return root
// };


// var invertTree = function(root) {
//     if (!root) return null;
//     var temp = root.left 
//     root.left = invertTree(root.right);
//     root.right = invertTree(temp);
//     return root
// };