/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

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
var addTwoNumbers = function (l1, l2) {
  const stackl1 = [];
  const stackl2 = [];
  while (l1 !== null) {
    stackl1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stackl2.push(l2.val);
    l2 = l2.next;
  }
  let l3 = new ListNode(0);
  while (stackl1.length || stackl2.length) {
    let sum = 0;
    if (stackl1.length > 0) sum += stackl1.pop();
    if (stackl2.length > 0) sum += stackl2.pop();
    sum += l3.val;
    l3.val = sum % 10;
    let head = new ListNode(Math.floor(sum / 10));
    head.next = l3;
    l3 = head;
  }
  return l3.val === 0 ? l3.next : l3;
};

// time: O(n)
// space: O(n)