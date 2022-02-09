/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-02-09 16:40:54
 * @LastEditTime: 2022-02-09 16:58:43
 */
/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @return {ListNode}
 */
// 快慢指针
var middleNode = function(head) {
  var fast = low = head;
  while(fast.next!==null&&fast.next.next!==null){
    fast = fast.next.next;
    low = low.next;
  }
  if(fast.next&&fast.next.next==null){
    return low.next;
  }
  return low;
};
// @lc code=end

