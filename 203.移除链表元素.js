/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2021-12-07 18:39:34
 * @LastEditTime: 2021-12-07 18:54:34
 */
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 特殊情况 当为0
  if(head == null) return head;

  // 加入哨兵
  let newNode = new ListNode();
  newNode.next = head;
  head = newNode;

  let temp = head;
  while(temp.next){
    if(temp.next.val == val){
      temp.next = temp.next.next;
    }else{
      temp = temp.next;
    }
  }
  head = head.next;
  return head;
};
// @lc code=end

