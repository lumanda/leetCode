/*
 * @Descripttion: 
 * @version: data
 * @Author: @zhanghuiyong
 * @Date: 2022-03-02 09:26:07
 * @LastEditTime: 2022-03-02 15:04:50
 */
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  var pStart = vnodeHead = new ListNode();
  pStart.next = head;
  var pEnd = head;
  var index = 1;
  while(pEnd){ 
    while(index<k&&pEnd){
      pEnd = pEnd.next;
      index++ 
    }
    if(index = k&&pEnd){
      var tailNode = reverseList(pStart,pEnd);
      // 新一段的 头和尾巴
      pStart = tailNode; 
      pEnd = tailNode.next;
      index = 1;
    }else{
      // pEnd为空，可以退出了,返回
      return vnodeHead.next;
    }
  }
  return vnodeHead.next;
};
// 返回 反转列表的尾巴
var reverseList = function(pStart,pEnd){
  var tempPend = pEnd.next; // 下一截一定要存一下，否则pEnd 会在之后被挪动到最前面
  var tempPstart = pStart; // 开头也要存一下，随后用它来链接上一段和下一段
  var pSt = pStartTemp = pStart.next;
  var firstNode = pEnd.next; // 这里确保 这一段和下一段的连接
  while(true){
    var temp = pSt.next;
    pSt.next = firstNode;
    firstNode = pSt;
    pSt = temp;
    if(pSt == tempPend){
      // firstNode 是新链表的头，pStart.next一开始是头，后面成了尾巴
      tempPstart.next = firstNode; // 上一段和这一段的连接
      return pStartTemp;
    }
  }
}
// @lc code=end

