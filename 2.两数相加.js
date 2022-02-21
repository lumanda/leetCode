/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-21 19:30:20
 * @LastEditTime: 2022-02-21 20:15:39
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
  var re = 0; // 进位 
  var sum = 0;
  var yu = 0; // 余数
  var head = l2;
  var l2tail;  // l2 的尾节点
  var l1tail;  // l2 的尾节点对应的l1的节点
  while(l1 && l2){
    sum = l1.val + l2.val + re;
    re = Math.floor(sum/10);
    yu = sum%10;
    l2.val = yu;
    if(l2.next === null){
      l2tail = l2; // 保存尾节点
      l1tail = l1;
    }
    l2 = l2.next;
    l1 = l1.next; 
  }
  if(l2 === null){
    l2tail.next = l1;
    l2 = l1;
    l1tail.next = null;
    l1 = null;
  }
  if(l1 === null){
    while(re!==0&&l2){
      sum = l2.val + re
      re = Math.floor(sum/10);
      yu = sum%10;
      l2.val = yu;
      if(l2.next === null){
        l2tail = l2;
      }
      l2 = l2.next;
    }
    if(re === 0){
      return head
    }
    if(l2===null){
      l2tail.next = new ListNode(re);
      return head
    }
  }
};
// @lc code=end

