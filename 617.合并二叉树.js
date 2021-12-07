/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2021-08-26 17:15:29
 * @LastEditTime: 2021-12-07 19:06:10
 */
/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1 || !root2) return root1 || root2
    let root = new TreeNode(root1.val + root2.val)
    root.left = mergeTrees(root1.left, root2.left)
    root.right = mergeTrees(root1.right, root2.right)
    return root
};
// @lc code=end

// var mergeTrees = function(root1, root2) {
//     if (!root1) { return root2 }
//     if (!root2) { return root1 }

//     (function merge(root1, root2) {
//         root1.val += root2.val;
//         if (root1.left && root2.left) {
//             merge(root1.left, root2.left)
//         }
//         if (root1.right && root2.right) {
//             merge(root1.right, root2.right)
//         }
//         if (!root1.left) {
//             root1.left = root2.left
//         }
//         if (!root1.right) {
//             root1.right = root2.right
//         }
//     })(root1, root2)
//     return root1
// };

// var mergeTrees = function(root1, root2) {
//     if (root1 == null) { return root2 }
//     if (root2 == null) { return root1 }

//     root1.val += root2.val;
//     root1.left = mergeTrees(root1.left, root2.left)
//     root1.right = mergeTrees(root1.right, root2.right)
//     return root1
// };
