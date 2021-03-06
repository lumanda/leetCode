/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2021-12-07 11:29:17
 * @LastEditTime: 2022-03-01 10:44:52
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 var reverseList = function(head) {
  var tail = null;
  var p = head;
  while(p){
      var temp = p.next;
      p.next = tail;
      tail = p;
      p = temp;
  }
  return tail
};

// var reverseList = function(head) {
//   var firstNode = null;
//   (function reverse(head){
//       if(head == null) return null;
//       var node = reverse(head.next);
//       if(node){
//           head.next = null;
//           node.next = head;
//       }else{
//           firstNode = head; 
//       }
//       return head;
//   })(head);
//   return firstNode;
// };


// var reverseList = function(head) {
//   // 极端情况 空链表 一个节点 两个节点
//   if(head==null) return null;
//   if(head.next==null) return head;
  
//   let left = head;
//   let curr = head.next;
//   let right = head.next.next;
//   // 处理头指针的反转
//   head.next = null;
//   while(right!=null){
//     curr.next = left;
//     left = curr;
//     curr = right;
//     right = right.next;
//   }
//   // 最后收尾
//   // 两个节点
//   curr.next = left;
//   return curr;
  
// };
// @lc code=end

