function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1

  while(left <= right) {
    
    const middle = parseInt((right + left) / 2)

    if(nums[middle] == target) return middle

    if(target > nums[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }    
  return -1
}

// case 1
{
  const nums = [-1,0,3,5,9,12]
  const target = 9
  const result = binarySearch(nums, target)
  console.log(result == 4)
}

// case 2 
{
  const nums = [-1,0,3,5,9,12]
  const target = 2
  const result = binarySearch(nums, target)
  console.log(result == -1)
}