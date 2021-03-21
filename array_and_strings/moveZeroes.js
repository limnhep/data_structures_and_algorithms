/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]


Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


Follow up: Could you minimize the total number of operations done?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
    i: an array of nums;
    o: an array of nums with nums > 0 on the left side and 0s on the right side;
    e: none, assuming.
    strategy: swap the smallest with the largest as long as the number element isn't 0;
*/
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
  return nums;
};

// time: O(logn)
// space: O(1)