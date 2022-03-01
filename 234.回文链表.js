/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-03-01 10:57:03
 * @LastEditTime: 2022-03-01 11:08:14
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
  var arr = [];
  var p = head;
  while(p){
    arr.push(p.val);
    p = p.next;
  }
  var i = 0;
  var j = arr.length -1;
  while(i<=j){
    if(arr[i]==arr[j]){
      i++;
      j--;
    }else{
      return false;
    }
  }
  return true;
};
// @lc code=end

