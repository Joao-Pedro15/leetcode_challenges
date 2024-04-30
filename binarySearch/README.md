# Leet Code 704
# Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

## Test Results

The following test results demonstrate the correctness of the Binary Search algorithm:

- **Test Case 1:**
  - Input: nums = [-1,0,3,5,9,12], target = 9
  - Expected Output: 4
  - Explanation: 9 exists in nums and its index is 4

- **Test Case 2:**
  - Input: nums = [-1,0,3,5,9,12], target = 2
  - Expected Output: -1
  - Explanation: 2 does not exist in nums so return -1

## Constraints

- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- All the integers in nums are unique.
- nums is sorted in ascending order.
