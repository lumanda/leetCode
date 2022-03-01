/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-03-01 10:57:03
 * @LastEditTime: 2022-03-01 14:43:01
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 第一步，获取中间节点,
  // 奇数链表取中间节点的next，偶数链表取后半截第一个
  var midNode = getMidNode(head);
  
  // 第二部，后半截翻转链表
  var newNodeList = getReverseList(midNode);
  // 第三步，两截比较
  var lastP = head;
  var nextP = newNodeList;
  while(nextP){
    if(nextP.val == lastP.val){
      lastP = lastP.next;
      nextP = nextP.next;
    }else{
      return false;
    }
  }
  return true;
};

var getMidNode = function(head){
  var slow = head;
  var fast = head;
  while(fast&&fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  if(fast==null){
    // 链表是偶数
    return slow;
  }
  if(fast.next ==null){
    // 链表是奇数
    return slow.next;
  }
}

var getReverseList = function(head){
  var tail = null
  var p = head;
  while(p){
    var temp = p.next;
    p.next = tail;
    tail = p;
    p = temp;
  }
  return tail;
}



// var isPalindrome = function(head) {
//   var arr = [];
//   var p = head;
//   while(p){
//     arr.push(p.val);
//     p = p.next;
//   }
//   var i = 0;
//   var j = arr.length -1;
//   while(i<=j){
//     if(arr[i]==arr[j]){
//       i++;
//       j--;
//     }else{
//       return false;
//     }
//   }
//   return true;
// };
// @lc code=end

