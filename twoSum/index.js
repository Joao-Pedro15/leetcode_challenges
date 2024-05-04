function twoSum(nums, target) {
  let hashed = {}
  for (let i = 0; i < nums.length; i++) {
    const item = target - nums[i]
    if(hashed[item] !=undefined) return [hashed[item], i]
    hashed[nums[i]] = i
  }
}

// case 1
{
  const nums = [2,7,11,15]
  const target = 9
  const result = twoSum(nums, target)
  console.log(JSON.stringify(result) == '[0,1]')
}

// case 2
{
  const nums = [3,2,4]
  const target = 6
  const result = twoSum(nums, target)
  console.log(JSON.stringify(result) == '[1,2]')
}

// case 3
{
  const nums = [3,3]
  const target = 6
  const result = twoSum(nums, target)
  console.log(JSON.stringify(result) == '[0,1]')
}
