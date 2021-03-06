/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-03-01 14:55:28
 * @LastEditTime: 2022-03-01 16:16:14
 */
/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 var oddEvenList = function(head) {
  // 分成奇偶双链，最后偶连奇，
  if(head == null || head.next == null) {
      return head;
  } else {
      var odd = head;
      var even = head.next;
      var evenHead = even;
      // 这里是参考别人的，属实滴水不漏
      while (even&&even.next) {
         odd.next = even.next;
         odd = odd.next;
         even.next = odd.next;
         even = even.next;
      }
      odd.next = evenHead;
  }
  return head;
};




// var oddEvenList = function(head) {
//   // 新建两个节点链表的头
//   var odd = new ListNode();
//   var oddTail = odd; // 偶数指针
//   var even = new ListNode();
//   var evenTail = even; // 奇数指针

//   // 原链表指针
//   var p = head;
//   var i = true;

//   while(p){
//       var temp = p.next;
//       // 奇数
//       if(i){
//           oddTail.next = p;
//           oddTail = p;
//       }else{
//           evenTail.next = p;
//           evenTail = p;
//       }
//       i=!i;
//       p = temp;
//   }
//   // 这里最为关键，要将偶数的尾巴置为null
//   evenTail.next = null;
//   oddTail.next = even.next;

//   return odd.next;
// };


// var oddEvenList = function(head) {
//   // 如果是空
//   if(head == null) return null;
//   // 如果只有1个或者2个
//   if(head.next == null || head.next.next == null) return head;
  
//   var odd = oddTail = oddP = head;
//   var even = evenTail = evenP = head.next;
//   while(evenP&&evenP.next){
//     var tempOdd = oddP.next.next;
//     oddTail.next = oddP;
//     oddTail = oddP;
//     oddP = tempOdd;

//     var tempEven =  evenP.next.next;
//     evenTail.next = evenP;
//     evenTail = evenP;
//     evenP = tempEven;
//   }

//   if(evenP == null){
//     // 奇数链
//     oddTail.next = oddP;
//     oddTail = oddP;
//   }
//   else if(evenP.next == null){
//     // 偶数链
//     oddTail.next = oddP;
//     oddTail = oddP;

//     evenTail.next = evenP;
//     evenTail = evenP;
//   }
//   evenTail.next =null; // 偶数的末尾一定要置为null
//   oddTail.next = even;
//   return odd;
// };


// @lc code=end

