function longSubstringWithouRepeatCharacters(s) {
  let [right, left] = [0, 0]
  let maxSize = 0
  const setter = new Set()
  while(right < s.length) {
      if(setter.has(s[right])) {
          setter.delete(s[left++])
      } else {
          setter.add(s[right++])
          maxSize = Math.max(setter.size, maxSize)
      }
  }
  return maxSize
}

//case 1 
{
  const str = 'abcabcbb'
  const result = longSubstringWithouRepeatCharacters(str)
  console.log(result === 3)
}

// case 2 
{
  const str = 'bbbbb'
  const result = longSubstringWithouRepeatCharacters(str)
  console.log(result === 1)
}

// case 3
{
  const str = 'pwwkew'
  const result = longSubstringWithouRepeatCharacters(str)
  console.log(result === 3)
}

