/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2021-12-07 13:29:04
 * @LastEditTime: 2021-12-07 18:31:13
 */
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  // 当只有0个
  if(head==null) return null;

  let temp = head;
  while(temp.next!=null){
    if(temp.next.val>temp.val){
      temp = temp.next;
    }else{
      temp.next = temp.next.next;
    }
  }
  return head;

};
// @lc code=end

