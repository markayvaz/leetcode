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
  let list = new ListNode();
  let head = list;
  let sum = 0;

  while (l1 || l2 || sum > 0) {
    let carry = false;

    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = true;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    carry ? (sum = 1) : (sum = 0);
  }

  return list.next;
};
