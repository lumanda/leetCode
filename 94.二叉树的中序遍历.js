/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var arr = [];
    var stack = [];
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            arr.push(root.val);
            root = root.right;
        }
    }
    return arr;
};
// @lc code=end

// 这个是错的，退出一个栈的时候它又去访问自己的左节点去了
// var inorderTraversal = function(root) {
//     var arr = [];
//     if (!root) return [];
//     var stack = [root];
//     while (stack.length) {
//         if (root.left) {
//             stack.push(root.left);
//             root = root.left;
//         } else {
//             root = stack.pop();
//             arr.push(root.val)
//             if (root.right) {
//                 stack.push(root.right);
//                 root = root.right;
//             }
//         }
//     }
//     return arr;
// };

// var inorderTraversal = function(root) {
//     var arr = [];
//     var stack = [];
//     while (root || stack.length) {
//         while (root) {
//             stack.push(root);
//             root = root.left
//         };
//         root = stack.pop();
//         arr.push(root.val);
//         root = root.right;
//     }
//     return arr;
// };