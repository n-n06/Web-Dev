def array_front9(nums):
  for i in range(4):
    if i >= len(nums):
      return False
    
    if nums[i] == 9:
      return True
  return False
