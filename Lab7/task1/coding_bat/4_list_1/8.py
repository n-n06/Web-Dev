def max_end3(nums):
  max = nums[0] if nums[0] > nums[-1] else nums[-1]
  return [max for el in nums]
