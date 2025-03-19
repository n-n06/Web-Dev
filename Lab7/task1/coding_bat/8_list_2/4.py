def sum13(nums):
  sum = 0
  flag = False
  for num in nums:
    if flag:
      flag = False
      continue
    
    if num == 13:
      flag = True
      continue
    sum += num
  return sum
