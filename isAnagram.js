/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const obj = {};
  for (const str of s) {
    obj[str] = obj[str] + 1 || 1;
  }
  for (const char of t) {
    if (!obj[char]) return false;
    obj[char]--;
  }
  return true;
};

// time: O(n);
// space: O(n);

// alternative solution:

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  return sortedS === sortedT;
};

// time: O(nlogn);
// space: O(n);