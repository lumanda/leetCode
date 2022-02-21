/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-09 17:15:13
 * @LastEditTime: 2022-02-21 19:01:32
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;
  if(l1.val<=l2.val){
    l1.next = mergeTwoLists(l1.next,l2);
    return l1;
  }else{
    l2.next = mergeTwoLists(l1,l2.next);
    return l2;
  }
};


// var mergeTwoLists = function(l1, l2) {
//   var vNode = new ListNode();
//   var vNodeTail = vNode;
//   while(l1 && l2){
//     if(l1.val<=l2.val){
//       vNodeTail.next = l1;
//       l1 = l1.next;
//     }else{
//       vNodeTail.next = l2;
//       l2 = l2.next;
//     }
//     vNodeTail = vNodeTail.next;
//   }
//   vNodeTail.next = l1 ? l1: l2;
//   return vNode.next;
// };
// @lc code=end

