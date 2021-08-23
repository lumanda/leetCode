/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return (function equl(l, r) {
        if (!l && !r) { return true; }
        if (l && r && l.val == r.val && equl(l.left, r.right) && equl(l.right, r.left)) {
            return true;
        }
        return false;
    })(root.left, root.right)
};
// @lc code=end

// var isSymmetric = function(root) {
//     // 原来认为是中序排序,但是 对于[1,2,2,2,null,2] 不适用
//     var stack = [];
//     var str = [];
//     while (root || stack.length) {
//         while (root) {
//             stack.push(root)
//             root = root.left
//         }
//         root = stack.pop();
//         str.push(root);
//         root = root.right;
//     }
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] != str[str.length - i]) {
//             return false;
//         }
//     }
//     return true;
// };