/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-09 17:15:13
 * @LastEditTime: 2022-02-11 11:17:43
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
  var vNode = new ListNode();
  var vNodeTail = vNode;
  var first = l1;
  var second = l2;
  while(first && second){
    if(first.val<=second.val){
      vNodeTail.next = first;
      vNodeTail = vNodeTail.next;
      first = first.next;
    }else{
      vNodeTail.next = second;
      vNodeTail = vNodeTail.next;
      second = second.next;
    }
  }
  if(!first){
    vNodeTail.next = second;
  }
  if(!second){
    vNodeTail.next = first;
  }
  return vNode.next;
};
// @lc code=end

