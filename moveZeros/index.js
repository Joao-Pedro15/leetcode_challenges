function moveZeros(nums) {
  let lastZero = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      const aux = nums[lastZero]
      nums[lastZero] = nums[i]
      nums[i] = aux
      lastZero++
    }
  }
  return nums
} 

{
  let nums = [0,1,0,3,12]
  console.log(JSON.stringify(moveZeros(nums)) === '[1,3,12,0,0]')
}


{
  let nums = [0]
  console.log(JSON.stringify(moveZeros(nums)) === '[0]')
}