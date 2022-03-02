/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-03-02 17:39:17
 * @LastEditTime: 2022-03-02 18:01:02
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var slow = p = head;
  var i = 0;
  while(i<n){
      p = p.next;
      i++;
  }
  if(!p){
    // 针对头部的处理 如果这里出现则说明 删的是第一个
    return head.next;
  }
  while(p.next){        
      p = p.next;
      if(p){
          slow = slow.next;
      }else{
          break;
      }
  }
  // 针对尾部的处理
  slow.next =slow.next?slow.next.next:null;
  return head;
};
// @lc code=end

